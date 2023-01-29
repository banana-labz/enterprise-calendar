import React from "react"

import { CalendarLayout, CalendarPageLayout } from "./calendar-scaffold.styled"

interface CalendarScaffoldProps {
  calendarSearch: React.ReactNode
  calendarMonthSelection: React.ReactNode
  calendarGrid: React.ReactNode
  calendarTaskEditModal: React.ReactNode
  calendarTaskAddModal: React.ReactNode
}

export const CalendarScaffold = ({
  calendarSearch,
  calendarMonthSelection,
  calendarGrid,
  calendarTaskEditModal,
  calendarTaskAddModal,
}: CalendarScaffoldProps) => (
  <CalendarPageLayout>
    {calendarTaskEditModal}
    {calendarTaskAddModal}
    {calendarSearch}
    <CalendarLayout id="calendar">
      {calendarMonthSelection}
      {calendarGrid}
    </CalendarLayout>
  </CalendarPageLayout>
)
