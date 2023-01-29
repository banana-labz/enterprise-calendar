import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"
import { controllers } from "controllers"

import { CalendarGridComponent } from "./calendar-grid-component"

export const CalendarGrid = () => {
  const error = useSelector(selectors.holiday.getError)
  const holidays = useSelector(selectors.holiday.getHolidays)
  const tasks = useSelector(selectors.tasks.getAllTasks)
  const currentMonth = useSelector(selectors.calendar.getCurrentMonth)

  return (
    <CalendarGridComponent
      selectedMonth={currentMonth}
      holidayRequestError={error}
      holidayList={holidays}
      taskList={tasks}
      loadHolidays={controllers.calendar.loadHolidays}
      addTask={controllers.tasks.openAddModal}
      removeTask={controllers.tasks.removeTask}
      editTask={controllers.tasks.editTask}
    />
  )
}