import React, { useEffect } from "react"
import moment, { Moment } from "moment"
import { AxiosError } from "axios"

import { HolidayDTM, TaskDTM, TaskLabelDTM } from "models/dtm"
import { TransparentButton } from "view/components"

import {
  CalendarGridLayout,
  CalendarDayOfWeekLabel,
  CalendarCell,
  CalendarCellLabel,
  CalendarCellHeader,
  CalendarCellLabelContainer,
  CalendarTaskListContainer,
  CalendarTaskListLayout,
  CalendarTaskListTitle,
} from "./calendar-grid.styled"

import { CalendarTask } from "../calendar-task"

interface CalendarGridProps {
  selectedMonth: Moment,
  holidayRequestError?: AxiosError,
  holidayList: HolidayDTM[],
  tasks: TaskDTM[],
  labels: TaskLabelDTM[],
  loadHolidays: (year: number, countryCode?: string) => void,
  addTask: (date: Moment) => void,
  removeTask: (id: string) => void,
  editTask: (id: string) => void,
}

const CalendarGrid = ({
  selectedMonth,
  holidayList,
  tasks,
  labels,
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

  const createEditTaskHandler = (id: string) => () => {
    editTask(id)
  }

  const createDeleteTaskHandler = (id: string) => () => {
    removeTask(id)
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
        const currenyDayTasks = tasks.filter((task) => Math.abs(task.date.diff(currentDay, "days")) < 1)

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
            <CalendarTaskListLayout>
              <CalendarTaskListTitle>Tasks</CalendarTaskListTitle>
              <CalendarTaskListContainer>
                {currenyDayTasks.map((task) => (
                  <CalendarTask
                    key={task.id}
                    name={task.name}
                    labels={labels.filter((label) => task.labelIds.includes(label.id))}
                    editTask={createEditTaskHandler(task.id)}
                    deleteTask={createDeleteTaskHandler(task.id)}
                  />
                ))}
              </CalendarTaskListContainer>
            </CalendarTaskListLayout>
          </CalendarCell>
        )
      })}
    </CalendarGridLayout>
  )
}

export { CalendarGrid as CalendarGridComponent }