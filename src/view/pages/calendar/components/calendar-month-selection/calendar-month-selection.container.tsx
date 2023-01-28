import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"
import { controllers } from "controllers"

import { CalendarMonthSelectionComponent } from "./calendar-month-selection.component"

export const CalendarMonthSelection = () => {
  const currentMonth = useSelector(selectors.calendar.getCurrentMonth)

  return (
    <CalendarMonthSelectionComponent
      currentMonth={currentMonth}
      nextMonth={controllers.holidays.nextMonth}
      previousMonth={controllers.holidays.previousMonth}
    />
  )
}