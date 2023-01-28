import React from "react"

import {
  CalendarScaffold,
  CalendarSearch,
  CalendarMonthSelection,
  CalendarGrid,
} from "./components"

export const CalendarPage = () => (
  <CalendarScaffold
    calendarSearch={<CalendarSearch />}
    calendarMonthSelection={<CalendarMonthSelection />}
    calendarGrid={<CalendarGrid />}
  />
)