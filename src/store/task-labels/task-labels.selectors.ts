import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "store"

const getLocalState = (state: RootState) => state.taskLabels

const getLabels = createSelector(
  getLocalState,
  (state) => state.labels,
)

export const taskLabelsSelectors = {
  getLabels,
}