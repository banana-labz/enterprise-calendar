import React, { useEffect } from "react"
import moment, { Moment } from "moment"
import { AxiosError } from "axios"

import { HolidayDTM, TaskDTM } from "models/dtm"
import { TransparentButton } from "view/components"

import {
  CalendarGridLayout,
  CalendarDayOfWeekLabel,
  CalendarCell,
  CalendarCellLabel,
  CalendarCellHeader,
  CalendarCellLabelContainer,
} from "./calendar-grid.styled"
import { CalendarHolidayList, CalendarTaskList } from "./components"

interface CalendarGridProps {
  selectedMonth: Moment,
  holidayRequestError?: AxiosError,
  holidayList: HolidayDTM[],
  taskList: TaskDTM[],
  loadHolidays: (year: number, countryCode?: string) => void,
  addTask: (date: Moment) => void,
}

const CalendarGrid = ({
  selectedMonth,
  holidayList,
  holidayRequestError,
  taskList,
  loadHolidays,
  addTask,
}: CalendarGridProps) => {
  useEffect(() => {
    loadHolidays(selectedMonth.year())
  }, [selectedMonth.year()])

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
        const holidays = holidayList.filter((holiday) => Math.abs(holiday.date.diff(currentDay, "days")) < 1)
        const tasks = taskList.filter((task) => Math.abs(task.date.diff(currentDay, "days")) < 1)

        return (
          <CalendarCell key={i}>
            <CalendarCellHeader>
              <CalendarCellLabelContainer>
                <CalendarCellLabel>Day {i + 1}</CalendarCellLabel>
                {!!holidays.length && <i className="fa-regular fa-star" />}
              </CalendarCellLabelContainer>
              <TransparentButton
                icon={<i className="fa-solid fa-plus" />}
                onClick={() => addTask(currentDay)}
              />
            </CalendarCellHeader>
            <CalendarHolidayList holidayList={holidays} />
            <CalendarTaskList taskList={tasks} />
            {/*
            <i className="fa-solid fa-pen-to-square" />
            <i className="fa-solid fa-trash" />
            */}
          </CalendarCell>
        )
      })}
    </CalendarGridLayout>
  )
}

export { CalendarGrid as CalendarGridComponent }