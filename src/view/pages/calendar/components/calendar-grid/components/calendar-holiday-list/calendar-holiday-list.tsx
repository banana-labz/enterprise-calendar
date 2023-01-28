import React from "react"

import { HolidayDTM } from "models/dtm"

import { CalendarHolidayListItem, CalendarHolidayListLayout } from "./calendar-holiday-list.styled"

interface CalendarHolidayListProps {
  holidayList: HolidayDTM[]
}

export const CalendarHolidayList = ({ holidayList }: CalendarHolidayListProps) => {
  if (!holidayList.length) {
    return null
  }

  return (
    <CalendarHolidayListLayout>
      {holidayList.map((holiday) => (
        <CalendarHolidayListItem key={holiday.name}>
          {holiday.name}
        </CalendarHolidayListItem>
      ))}
    </CalendarHolidayListLayout>
  )
}