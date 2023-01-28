import React, { useEffect } from "react"
import moment, { Moment } from "moment"
import { AxiosError } from "axios"

import { HolidayDTM } from "models/dtm"

import { CalendarGridLayout, CalendarDayOfWeekLabel, CalendarCell } from "./calendar-grid.styled"

interface CalendarGridProps {
  selectedMonth: Moment,
  holidayRequestError?: AxiosError,
  holidayList: HolidayDTM[],
  loadHolidays: (year: number, countryCode?: string) => void,
}

const CalendarGrid = ({
  selectedMonth,
  holidayList,
  holidayRequestError,
  loadHolidays,
}: CalendarGridProps) => {
  useEffect(() => {
    loadHolidays(2023)
  }, [])

  const weekdays = moment.weekdays()
  const daysInCurrentMonth = selectedMonth.daysInMonth()

  return (
    <CalendarGridLayout>
      {weekdays.map((weekday) => (
        <CalendarDayOfWeekLabel key={weekday}>
          {weekday}
        </CalendarDayOfWeekLabel>
      ))}
      {Array(daysInCurrentMonth).fill(null).map((_, i) => {
        const currentDay = selectedMonth.clone().startOf("month").add(i, "days")
        const holiday = holidayList.find((holiday) => (
          Math.abs(holiday.date.diff(currentDay, "days")) < 1
        ))

        return (
          <CalendarCell key={i}>
            {`Day ${i + 1}`}
            {holiday && (<p>{holiday.name}</p>)}
          </CalendarCell>
        )
      })}
    </CalendarGridLayout>
  )
}

export { CalendarGrid as CalendarGridComponent }