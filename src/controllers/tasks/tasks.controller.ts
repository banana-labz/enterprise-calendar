import moment, { Moment } from "moment"

import { TaskDTM, TaskLabelDTM } from "models/dtm"
import { store, actions, selectors } from "store"

export class TasksController {
  public removeTask = (id: string) => {
    store.dispatch(actions.tasks.removeTask(id))
  }

  public openEditModal = (id: string) => {
    store.dispatch(actions.tasks.openEditModal(id))
  }

  public setEditedTaskName = (name: string) => {
    store.dispatch(actions.tasks.setEditedTaskName(name))
  }

  public addEditedTaskLabel = (id: string) => {
    store.dispatch(actions.tasks.addEditedTaskLabel(id))
  }

  public removeEditedTaskLabel = (id: string) => {
    store.dispatch(actions.tasks.removeEditedTaskLabel(id))
  }

  public clearEditedTaskLabels = () => {
    store.dispatch(actions.tasks.clearEditedTaskLabels())
  }

  public closeEditModal = () => {
    store.dispatch(actions.tasks.closeEditModal())
  }

  public openAddModal = (day: Moment) => {
    store.dispatch(actions.tasks.openAddModal(day))
  }

  public setNewTaskName = (name: string) => {
    store.dispatch(actions.tasks.setNewTaskName(name))
  }

  public addNewTaskLabel = (id: string) => {
    store.dispatch(actions.tasks.addNewTaskLabel(id))
  }

  public removeNewTaskLabel = (id: string) => {
    store.dispatch(actions.tasks.removeNewTaskLabel(id))
  }

  public clearNewTaskLabels = () => {
    store.dispatch(actions.tasks.clearNewTaskLabels())
  }

  public closeAddModalFailure = () => {
    store.dispatch(actions.tasks.closeAddModal())
  }

  public closeAddModalSuccess = () => {
    const newTask = selectors.tasks.getNewTask(store.getState())
    if (!newTask) return

    let task = { ...newTask }
    if (!task.name) {
      task.name = "No name specified"
    }
    store.dispatch(actions.tasks.addTask(task))
    store.dispatch(actions.tasks.closeAddModal())
  }

  public setSearchedText = (text: string) => {
    store.dispatch(actions.tasks.setSearchedText(text))
  }

  public addSearchedLabel = (label: string) => {
    store.dispatch(actions.tasks.addSearchedLabel(label))
  }

  public removeSearchedLabel = (id: string) => {
    store.dispatch(actions.tasks.removeSearchedLabel(id))
  }

  public clearSearchedLabels = () => {
    store.dispatch(actions.tasks.clearSearchedLabels())
  }

  public addLabel = () => {
    store.dispatch(actions.tasks.addLabel())
  }

  public removeLabel = (index: number) => {
    store.dispatch(actions.tasks.removeLabel(index))
  }

  public setLabelColor = (index: number, color: string) => {
    store.dispatch(actions.tasks.setLabelColor({
      index,
      color,
    }))
  }

  public setLabelDescription = (index: number, description: string) => {
    store.dispatch(actions.tasks.setLabelDescription({
      index,
      description,
    }))
  }

  public pushTaskOnOther = (other: TaskDTM, taskToPush?: TaskDTM) => {
    if (!taskToPush) {
      return
    }

    store.dispatch(actions.tasks.pushTaskAfterOther({
      taskToPush,
      other,
    }))
  }

  public pushTaskOnEmptyCell = (emptyCell: Moment, taskToPush?: TaskDTM) => {
    if (!taskToPush || taskToPush.date.isSame(emptyCell, "day")) {
      return
    }

    store.dispatch(actions.tasks.pushTaskOnEmptyCell({
      taskToPush,
      emptyCell,
    }))
  }

  public loadJSON = (json: any) => {
    let resultTasks: TaskDTM[] = []
    let resultLabels: TaskLabelDTM[] = []
    try {
      const { tasks, labels } = json
      resultTasks = tasks.map((task: any) => ({
        id: task.id,
        date: moment(task.date),
        name: task.name,
        labelIds: task.labelIds,
      }))
      resultLabels = labels.map((label: any) => ({
        id: label.id,
        color: label.color,
        description: label.description,
      }))
    } catch (error) {
      console.error("Invalid JSON format\n", error)
      return
    }

    if (resultLabels.length) {
      store.dispatch(actions.tasks.setLabels(resultLabels))
    }

    if (resultTasks.length) {
      store.dispatch(actions.tasks.setTasks(resultTasks))
    }
  }
}