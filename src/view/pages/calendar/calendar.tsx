import React from "react"

import {
  CalendarScaffold,
  CalendarSearch,
  CalendarMonthSelection,
  CalendarGrid,
  CalendarTaskEditModal,
  CalendarTaskAddModal,
} from "./components"

export const CalendarPage = () => (
  <CalendarScaffold
    calendarSearch={<CalendarSearch />}
    calendarMonthSelection={<CalendarMonthSelection />}
    calendarGrid={<CalendarGrid />}
    calendarTaskEditModal={<CalendarTaskEditModal />}
    calendarTaskAddModal={<CalendarTaskAddModal />}
  />
)
