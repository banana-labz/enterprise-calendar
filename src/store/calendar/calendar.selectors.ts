import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "store"

const getLocalState = (state: RootState) => state.calendar

const getCurrentMonth = createSelector(
  getLocalState,
  (state) => state.currentMonth,
)

export const calendarSelectors = {
  getCurrentMonth,
}