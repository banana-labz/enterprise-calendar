import { TaskLabelDTM } from "models/dtm"
import moment, { Moment } from "moment"

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

  public addEditedTaskLabel = (taskLabel: TaskLabelDTM) => {
    store.dispatch(actions.tasks.addEditedTaskLabel(taskLabel))
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

  public addNewTaskLabel = (taskLabel: TaskLabelDTM) => {
    store.dispatch(actions.tasks.addNewTaskLabel(taskLabel))
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
}