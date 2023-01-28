import { createSelector } from "@reduxjs/toolkit"

import { TaskDTM, TaskLabelDTM } from "models/dtm"
import { RootState } from "store"

const getLocalState = (state: RootState) => state.tasks

const getSearchParameters = createSelector(
  getLocalState,
  (state) => state.search,
)

const getAllTasks = createSelector(
  getLocalState,
  (state) => state.tasks
)

const filterTaskNames = (tasks: TaskDTM[], searchPattern: string) => {
  if (!searchPattern) {
    return tasks
  }

  const lowerCasePattern = searchPattern.toLowerCase()
  return tasks.filter((task) => (
    task.name.toLocaleLowerCase().search(lowerCasePattern) !== -1
  ))
}

const filterTaskLabels = (tasks: TaskDTM[], searchedLabels: TaskLabelDTM[]) => {
  const searchedLabelIds = searchedLabels.map((label) => label.id)
  return tasks.filter((task) => (
    task.labels.find((label) => searchedLabelIds.includes(label.id))
  ))
}

const getFilteredTasks = createSelector(
  getLocalState,
  (state) => {
    let filteredTasks = state.tasks
    filteredTasks = filterTaskNames(filteredTasks, state.search.text)
    filteredTasks = filterTaskLabels(filteredTasks, state.search.labels)

    return filteredTasks
  }
)

const getIsEditModalOpen = createSelector(
  getLocalState,
  (state) => state.modal.isModalOpen,
)

const getSelectedTask = createSelector(
  getLocalState,
  (state) => {
    if (!state.modal.selectedTask) {
      return undefined
    }
    
    return state.tasks[state.modal.selectedTask]
  }
)

export const tasksSelectors = {
  getSearchParameters,
  getAllTasks,
  getFilteredTasks,
  getIsEditModalOpen,
  getSelectedTask,
}