import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import moment, { Moment } from "moment"
import { AxiosError } from "axios"

import { HolidayDTM } from "models/dtm"

import { CalendarState } from "./calendar.types"

const initialState: CalendarState = {
  currentMonth: moment(Date.now()).startOf("month"),
  isLoading: true,
  error: undefined,
  holidays: [],
}

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setCurrentMonth: (state, action: PayloadAction<Moment>) => {
      state.currentMonth = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<AxiosError | undefined>) => {
      state.error = action.payload
    },
    setHolidays: (state, action: PayloadAction<HolidayDTM[]>) => {
      state.holidays = action.payload
    },
    reset: () => initialState,
  },
})

export const calendarActions = calendarSlice.actions
export const calendarReducer = calendarSlice.reducer
