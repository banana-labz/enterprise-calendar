import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import moment, { Moment } from "moment"

import { CalendarState } from "./calendar.types"

const initialState: CalendarState = {
  currentMonth: moment(Date.now()).startOf("month")
}

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setCurrentMonth: (state, action: PayloadAction<Moment>) => {
      state.currentMonth = action.payload
    },
    reset: () => (initialState),
  },
})

export const calendarActions = calendarSlice.actions
export const calendarReducer = calendarSlice.reducer
