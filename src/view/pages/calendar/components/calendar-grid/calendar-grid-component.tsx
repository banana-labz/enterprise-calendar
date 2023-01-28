import React, { useEffect } from "react"
import moment from "moment"
import { AxiosError } from "axios"

import { HolidayDTM } from "models/dtm"

import { CalendarGridLayout, CalendarDayOfWeekLabel, CalendarCell } from "./calendar-grid.styled"

interface CalendarGridProps {
  holidayRequestError?: AxiosError,
  holidayList: HolidayDTM[],
  loadHolidays: (year: number, countryCode?: string) => void,
}

const CalendarGrid = ({
  holidayList,
  holidayRequestError,
  loadHolidays,
}: CalendarGridProps) => {
  useEffect(() => {
    loadHolidays(2023)
  }, [])

  const weekdays = moment.weekdays()
  const daysInCurrentMonth = moment(Date.now()).daysInMonth()

  return (
    <CalendarGridLayout>
      {weekdays.map((weekday) => (
        <CalendarDayOfWeekLabel key={weekday}>
          {weekday}
        </CalendarDayOfWeekLabel>
      ))}
      {Array(daysInCurrentMonth).fill(null).map((_, i) => {
        const holiday = i === 0 ? holidayList[0] : undefined

        return (
          <CalendarCell key={i}>
            {`Day ${i + 1}`}
            {holiday && (
              <p>{holiday.name}</p>
            )}
          </CalendarCell>
        )
      })}
    </CalendarGridLayout>
  )
}

export { CalendarGrid as CalendarGridComponent }