import React from "react"
import { Moment } from "moment"

import { TransparentButton } from "view/components"

import {
  CalendarMonthSelectionLayout,
  CalendarMonthTitle,
} from "./calendar-month-selection.styled"

interface CalendarMonthSelectionProps {
  currentMonth: Moment
  nextMonth: () => void
  previousMonth: () => void
}

const CalendarMonthSelection = ({
  currentMonth,
  nextMonth,
  previousMonth,
}: CalendarMonthSelectionProps) => {
  return (
    <CalendarMonthSelectionLayout>
      <TransparentButton
        icon={<i className="fa-solid fa-chevron-left" />}
        onClick={previousMonth}
      />
      <CalendarMonthTitle>
        {currentMonth.format("MMMM, YYYY")}
      </CalendarMonthTitle>
      <TransparentButton
        icon={<i className="fa-solid fa-chevron-right" />}
        onClick={nextMonth}
      />
    </CalendarMonthSelectionLayout>
  )
}

export { CalendarMonthSelection as CalendarMonthSelectionComponent }
