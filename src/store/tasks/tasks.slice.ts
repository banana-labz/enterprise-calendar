import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { TaskDTM, TaskLabelDTM } from "models/dtm"

import { TasksState } from "./tasks.types"

const initialState: TasksState = {
  search: {
    text: "",
    labels: [],
  },
  tasks: [],
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<TaskDTM[]>) => {
      state.tasks = action.payload
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
