import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import createUniqueId from "uuidv4"

import { TaskLabelDTM } from "models/dtm"

import { TaskLabelsState } from "./task-labels.types"

const initialState: TaskLabelsState = {
  labels: [{
    id: createUniqueId(),
    color: "red",
    description: "important",
  }, {
    id: createUniqueId(),
    color: "green",
    description: "reminder",
  }]
}

const taskLabelsSlice = createSlice({
  name: "task-labels",
  initialState,
  reducers: {
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

export const taskLabelsActions = taskLabelsSlice.actions
export const taskLabelsReducer = taskLabelsSlice.reducer
