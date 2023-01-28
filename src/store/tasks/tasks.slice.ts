import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import moment, { Moment } from "moment"
import createUniqueId from "uuidv4"

import { TaskDTM, TaskLabelDTM } from "models/dtm"

import { TasksState } from "./tasks.types"

const initialState: TasksState = {
  search: {
    text: "",
    labels: [],
  },
  tasks: Array(8).fill(null).map((_, i) => ({
    id: createUniqueId(),
    name: `task ${i + 1}`,
    labels: [{
      id: createUniqueId(),
      color: "red",
      description: "important",
    }, {
      id: createUniqueId(),
      color: "green",
      description: "reminder",
    }],
    date: moment(Date.now()).startOf("month")
  })),
  modal: {
    isModalOpen: false,
    selectedTask: 0,
  },
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    openEditModal: (state, action: PayloadAction<number>) => {
      state.modal.selectedTask = action.payload
      state.modal.isModalOpen = true
    },
    closeModal: (state) => {
      state.modal.isModalOpen = false
      state.modal.selectedTask = 0
    },
    setSelectedTaskName: (state, action: PayloadAction<string>) => {
      state.tasks[state.modal.selectedTask].name = action.payload
    },
    setSelectedTaskLabels: (state, action: PayloadAction<TaskLabelDTM[]>) => {
      state.tasks[state.modal.selectedTask].labels = action.payload
    },
    setSelectedTask: (state, action: PayloadAction<number>) => {
      state.modal.selectedTask = action.payload
    },
    setTasks: (state, action: PayloadAction<TaskDTM[]>) => {
      state.tasks = action.payload
    },
    addTask: (state, action: PayloadAction<Moment>) => {
      state.tasks.push({
        id: createUniqueId(),
        name: "",
        labels: [],
        date: action.payload,
      })
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((_, i) => i !== action.payload)
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.search.text = action.payload
    },
    setSearchLabels: (state, action: PayloadAction<TaskLabelDTM[]>) => {
      state.search.labels = action.payload
    },
    reset: () => (initialState),
  },
})

export const tasksActions = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
