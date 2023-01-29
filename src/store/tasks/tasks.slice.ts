import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Moment } from "moment"
import createUniqueId from "uuidv4"

import { TaskDTM, TaskLabelDTM } from "models/dtm"

import { TasksState } from "./tasks.types"

const initialState: TasksState = {
  labels: [{
    id: createUniqueId(),
    color: "red",
    description: "important",
  }, {
    id: createUniqueId(),
    color: "green",
    description: "reminder",
  }],
  tasks: [],
  search: {
    text: "",
    labelIds: [],
  },
  editModal: {
    isModalOpen: false,
    selectedTask: '',
  },
  addModal: {
    isModalOpen: false,
  },
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    openEditModal: (state, action: PayloadAction<string>) => {
      state.editModal.selectedTask = action.payload
      state.editModal.isModalOpen = true
    },
    setEditedTaskName: (state, action: PayloadAction<string>) => {
      const selectedTask = state.tasks.find((task) => task.id === state.editModal.selectedTask)
      if (!selectedTask) {
        return
      }

      selectedTask.name = action.payload
    },
    addEditedTaskLabel: (state, action: PayloadAction<string>) => {
      const selectedTask = state.tasks.find((task) => task.id === state.editModal.selectedTask)
      if (!selectedTask) {
        return
      }

      selectedTask.labelIds.push(action.payload)
    },
    removeEditedTaskLabel: (state, action: PayloadAction<string>) => {
      const selectedTask = state.tasks.find((task) => task.id === state.editModal.selectedTask)
      if (!selectedTask) {
        return
      }

      selectedTask.labelIds = selectedTask.labelIds.filter((id) => id !== action.payload)
    },
    clearEditedTaskLabels: (state) => {
      const selectedTask = state.tasks.find((task) => task.id === state.editModal.selectedTask)
      if (!selectedTask) {
        return
      }

      selectedTask.labelIds = []
    },
    closeEditModal: (state) => {
      state.editModal.isModalOpen = false
      state.editModal.selectedTask = ""
    },
    // edit modal actions
    openAddModal: (state, action: PayloadAction<Moment>) => {
      state.addModal.isModalOpen = true
      state.addModal.newTask = {
        id: createUniqueId(),
        date: action.payload,
        name: "",
        labelIds: [],
      }
    },
    setNewTaskName: (state, action: PayloadAction<string>) => {
      const newTask = state.addModal.newTask
      if (!newTask) {
        return
      }

      newTask.name = action.payload
    },
    addNewTaskLabel: (state, action: PayloadAction<string>) => {
      const newTask = state.addModal.newTask
      if (!newTask) {
        return
      }

      newTask.labelIds.push(action.payload)
    },
    removeNewTaskLabel: (state, action: PayloadAction<string>) => {
      const newTask = state.addModal.newTask
      if (!newTask) {
        return
      }

      newTask.labelIds = newTask.labelIds.filter((id) => id !== action.payload)
    },
    clearNewTaskLabels: (state) => {
      const newTask = state.addModal.newTask
      if (!newTask) {
        return
      }

      newTask.labelIds = []
    },
    closeAddModal: (state) => {
      state.addModal.isModalOpen = false
      state.addModal.newTask = undefined
    },
    addTask: (state, action: PayloadAction<TaskDTM>) => {
      state.tasks.push(action.payload)
    },
    // add modal actions
    setSearchedText: (state, action: PayloadAction<string>) => {
      state.search.text = action.payload
    },
    addSearchedLabel: (state, action: PayloadAction<string>) => {
      state.search.labelIds.push(action.payload)
    },
    removeSearchedLabel: (state, action: PayloadAction<string>) => {
      state.search.labelIds = state.search.labelIds.filter((id) => id !== action.payload)
    },
    clearSearchedLabels: (state) => {
      state.search.labelIds = []
    },
    // search filters actions
    addLabel: (state) => {
      state.labels.push({
        id: createUniqueId(),
        color: "#FB4343",
        description: "",
      })
    },
    removeLabel: (state, action: PayloadAction<number>) => {
      state.labels.splice(action.payload)
    },
    setLabelColor: (state, action: PayloadAction<{ color: string, index: number }>) => {
      const { color, index } = action.payload
      state.labels[index].color = color
    },
    setLabelDescription: (state, action: PayloadAction<{ description: string, index: number }>) => {
      const { description, index } = action.payload
      state.labels[index].description = description
    },
    setLabels: (state, action: PayloadAction<TaskLabelDTM[]>) => {
      state.labels = action.payload
    },
    // label page actions
    pushTaskAfterOther: (state, action: PayloadAction<{ taskToPush: TaskDTM, other: TaskDTM }>) => {
      const { taskToPush, other } = action.payload
      const updatedTask = {
        ...taskToPush,
        date: other.date.clone(),
      }

      state.tasks = state.tasks.filter((task) => task.id !== updatedTask.id)
      const otherIndex = state.tasks.findIndex((task) => task.id === other.id)
      state.tasks.splice(otherIndex + 1, 0, updatedTask)
    },
    pushTaskOnEmptyCell: (state, action: PayloadAction<{ taskToPush: TaskDTM, emptyCell: Moment }>) => {
      const { taskToPush, emptyCell } = action.payload

      state.tasks = state.tasks.map((task) => {
        if (task.id === taskToPush.id) {
          return {
            ...task,
            date: emptyCell.clone(), 
          }
        }

        return task
      })
    },
    setTasks: (state, action: PayloadAction<TaskDTM[]>) => {
      state.tasks = action.payload
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    reset: () => (initialState),
  },
})

export const tasksActions = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
