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
import { CalendarTaskList } from "./components"

interface CalendarGridProps {
  selectedMonth: Moment,
  holidayRequestError?: AxiosError,
  holidayList: HolidayDTM[],
  taskList: TaskDTM[],
  loadHolidays: (year: number, countryCode?: string) => void,
  addTask: (date: Moment) => void,
  removeTask: (id: string) => void,
  editTask: (id: string) => void,
}

const CalendarGrid = ({
  selectedMonth,
  holidayList,
  taskList,
  loadHolidays,
  addTask,
  removeTask,
  editTask,
}: CalendarGridProps) => {
  useEffect(() => {
    loadHolidays(selectedMonth.year())
  }, [selectedMonth.year()])

  const weekdays = moment.weekdays()
  const daysInCurrentMonth = selectedMonth.daysInMonth()

  const createAddTaskHandler = (day: Moment) => () => {
    addTask(day)
  }

  return (
    <CalendarGridLayout>
      {weekdays.map((weekday) => (
        <CalendarDayOfWeekLabel key={weekday}>
          {weekday}
        </CalendarDayOfWeekLabel>
      ))}
      {Array(daysInCurrentMonth).fill(null).map((_, i) => {
        const currentDay = selectedMonth.clone().startOf("month").add(i, "days")
        const holiday = holidayList.find((holiday) => Math.abs(holiday.date.diff(currentDay, "days")) < 1)
        const tasks = taskList.filter((task) => Math.abs(task.date.diff(currentDay, "days")) < 1)

        return (
          <CalendarCell key={i}>
            <CalendarCellHeader>
              <CalendarCellLabelContainer>
                <CalendarCellLabel>Day {i + 1}</CalendarCellLabel>
                {!!holiday && <i className="fa-regular fa-star" />}
              </CalendarCellLabelContainer>
              <TransparentButton
                icon={<i className="fa-solid fa-plus" />}
                onClick={createAddTaskHandler(currentDay)}
              />
            </CalendarCellHeader>
            <p>{holiday?.name}</p>
            <CalendarTaskList
              taskList={tasks}
              editTask={editTask}
              removeTask={removeTask}
            />
          </CalendarCell>
        )
      })}
    </CalendarGridLayout>
  )
}

export { CalendarGrid as CalendarGridComponent }