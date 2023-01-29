import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import moment, { Moment } from "moment"
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
  editModal: {
    isModalOpen: false,
    selectedTask: '',
  },
  addModal: {
    isModalOpen: false,
  },
  search: {
    text: "",
    labels: [],
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
    addEditedTaskLabel: (state, action: PayloadAction<TaskLabelDTM>) => {
      const selectedTask = state.tasks.find((task) => task.id === state.editModal.selectedTask)
      if (!selectedTask) {
        return
      }

      selectedTask.labels.push(action.payload)
    },
    removeEditedTaskLabel: (state, action: PayloadAction<string>) => {
      const selectedTask = state.tasks.find((task) => task.id === state.editModal.selectedTask)
      if (!selectedTask) {
        return
      }

      selectedTask.labels = selectedTask.labels.filter((label) => label.id !== action.payload)
    },
    clearEditedTaskLabels: (state) => {
      const selectedTask = state.tasks.find((task) => task.id === state.editModal.selectedTask)
      if (!selectedTask) {
        return
      }

      selectedTask.labels = []
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
        labels: [],
      }
    },
    setNewTaskName: (state, action: PayloadAction<string>) => {
      const newTask = state.addModal.newTask
      if (!newTask) {
        return
      }

      newTask.name = action.payload
    },
    addNewTaskLabel: (state, action: PayloadAction<TaskLabelDTM>) => {
      const newTask = state.addModal.newTask
      if (!newTask) {
        return
      }

      newTask.labels.push(action.payload)
    },
    removeNewTaskLabel: (state, action: PayloadAction<string>) => {
      const newTask = state.addModal.newTask
      if (!newTask) {
        return
      }

      newTask.labels = newTask.labels.filter((label) => label.id !== action.payload)
    },
    clearNewTaskLabels: (state) => {
      const newTask = state.addModal.newTask
      if (!newTask) {
        return
      }

      newTask.labels = []
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
    addSearchedLabel: (state, action: PayloadAction<TaskLabelDTM>) => {
      state.search.labels.push(action.payload)
    },
    removeSearchedLabel: (state, action: PayloadAction<string>) => {
      state.search.labels = state.search.labels.filter((label) => label.id !== action.payload)
    },
    clearSearchedLabels: (state) => {
      state.search.labels = []
    },
    // search filters actions
    setTasks: (state, action: PayloadAction<TaskDTM[]>) => {
      state.tasks = action.payload
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    addLabel: (state) => {
      state.labels.push({
        id: createUniqueId(),
        color: "",
        description: "",
      })
    },
    removeLabel: (state, action: PayloadAction<number>) => {
      state.labels = state.labels.filter((_, i) => (
        i !== action.payload
      ))
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
    reset: () => (initialState),
  },
})

export const tasksActions = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
