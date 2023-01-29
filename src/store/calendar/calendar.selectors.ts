import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "store"

const getLocalState = (state: RootState) => state.calendar

const getCurrentMonth = createSelector(
  getLocalState,
  state => state.currentMonth,
)

const getLoading = createSelector(getLocalState, state => state.isLoading)

const getError = createSelector(getLocalState, state => state.error)

const getHolidays = createSelector(getLocalState, state => state.holidays)

export const calendarSelectors = {
  getCurrentMonth,
  getLoading,
  getError,
  getHolidays,
}
