import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosError } from "axios"

import { HolidayDTM } from "models/dtm"

import { HolidaysState } from "./holiday.types"

const initialState: HolidaysState = {
  isLoading: true,
  error: undefined,
  holidays: [],
}

const holidaysSlice = createSlice({
  name: "holidays",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<AxiosError | undefined>) => {
      state.error = action.payload
    },
    setHolidays: (state, action: PayloadAction<HolidayDTM[]>) => {
      state.holidays = action.payload
    },
    reset: () => (initialState),
  },
})

export const holidaysActions = holidaysSlice.actions
export const holidaysReducer = holidaysSlice.reducer
