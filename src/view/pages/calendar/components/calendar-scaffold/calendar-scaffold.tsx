import React from "react"

import { CalendarLayout } from "./calendar-scaffold.styled"

interface CalendarScaffoldProps {
  calendarSearch: React.ReactNode,
  calendarMonthSelection: React.ReactNode,
  calendarGrid: React.ReactNode,
}

export const CalendarScaffold = ({
  calendarSearch,
  calendarMonthSelection,
  calendarGrid,
}: CalendarScaffoldProps) => (
  <CalendarLayout>
    {calendarSearch}
    {calendarMonthSelection}
    {calendarGrid}
  </CalendarLayout>
)