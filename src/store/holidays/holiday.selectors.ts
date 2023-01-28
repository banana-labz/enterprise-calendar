import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "store"

const getLocalState = (state: RootState) => state.holidays

const getLoading = createSelector(
  getLocalState,
  (state) => state.isLoading,
)

const getError = createSelector(
  getLocalState,
  (state) => state.error,
)

const getHolidays = createSelector(
  getLocalState,
  (state) => state.holidays,
)

export const holidaysSelectors = {
  getLoading,
  getError,
  getHolidays,
}