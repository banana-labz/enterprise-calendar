import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"
import { controllers } from "controllers"

import { CalendarGridComponent } from "./calendar-grid-component"

export const CalendarGrid = () => {
  const error = useSelector(selectors.holiday.getError)
  const holidays = useSelector(selectors.holiday.getHolidays)
  const tasks = useSelector(selectors.tasks.getFilteredTasks)
  const labels = useSelector(selectors.tasks.getLabels)
  const currentMonth = useSelector(selectors.calendar.getCurrentMonth)

  return (
    <CalendarGridComponent
      selectedMonth={currentMonth}
      holidayRequestError={error}
      holidayList={holidays}
      tasks={tasks}
      labels={labels}
      loadHolidays={controllers.calendar.loadHolidays}
      pushTaskOnOther={controllers.tasks.pushTaskOnOther}
      pushTaskOnEmptyCell={controllers.tasks.pushTaskOnEmptyCell}
      addTask={controllers.tasks.openAddModal}
      removeTask={controllers.tasks.removeTask}
      editTask={controllers.tasks.openEditModal}
    />
  )
}