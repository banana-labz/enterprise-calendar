import React from "react"
import moment from "moment"

import { CalendarMonthTitle } from "./calendar-month-selection.styled"

interface CalendarMonthSelectionProps {

}

const CalendarMonthSelection = ({ }: CalendarMonthSelectionProps) => {
  return (
    <CalendarMonthTitle>
      {moment(Date.now()).format("MMMM")}
    </CalendarMonthTitle>
  )
}

export { CalendarMonthSelection as CalendarMonthSelectionComponent }