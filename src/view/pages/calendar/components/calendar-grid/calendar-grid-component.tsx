import React from "react"
import moment from "moment"

import { CalendarGridLayout, CalendarDayOfWeekLabel, CalendarCell } from "./calendar-grid.styled"

const CalendarGrid = () => (
  <CalendarGridLayout>
    {moment.weekdays().map((weekday) => (
      <CalendarDayOfWeekLabel key={weekday}>{weekday}</CalendarDayOfWeekLabel>
    ))}
    {Array(moment(Date.now()).daysInMonth()).fill(null).map((_, i) => (
      <CalendarCell key={i}>Day {i + 1}</CalendarCell>
    ))}
  </CalendarGridLayout>
)

export { CalendarGrid as CalendarGridComponent }