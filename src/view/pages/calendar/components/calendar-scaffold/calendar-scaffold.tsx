import React from "react"

import { CalendarLayout } from "./calendar-scaffold.styled"

interface CalendarScaffoldProps {
  calendarSearch: React.ReactNode,
  calendarMonthSelection: React.ReactNode,
  calendarGrid: React.ReactNode,
  calendarTaskEditModal: React.ReactNode,
}

export const CalendarScaffold = ({
  calendarSearch,
  calendarMonthSelection,
  calendarGrid,
  calendarTaskEditModal,
}: CalendarScaffoldProps) => (
  <CalendarLayout>
    {calendarTaskEditModal}
    {calendarSearch}
    {calendarMonthSelection}
    {calendarGrid}
  </CalendarLayout>
)