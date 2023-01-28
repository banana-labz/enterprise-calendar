import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"
import { controllers } from "controllers"

import { CalendarGridComponent } from "./calendar-grid-component"

export const CalendarGrid = () => {
  const error = useSelector(selectors.holiday.getError)
  const holidays = useSelector(selectors.holiday.getHolidays)
  const currentMonth = useSelector(selectors.calendar.getCurrentMonth)

  return (
    <CalendarGridComponent
      selectedMonth={currentMonth}
      holidayRequestError={error}
      holidayList={holidays}
      loadHolidays={controllers.holidays.loadHolidays}
    />
  )
}