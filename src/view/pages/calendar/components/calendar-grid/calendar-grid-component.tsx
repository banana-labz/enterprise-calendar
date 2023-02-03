import React, { useCallback, useEffect, useState } from "react"
import moment, { Moment } from "moment"
import { AxiosError } from "axios"

import { HolidayDTM, TaskDTM, LabelDTM } from "models/dtm"
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
  selectedMonth: Moment
  holidayRequestError?: AxiosError
  holidayList: HolidayDTM[]
  tasks: TaskDTM[]
  labels: LabelDTM[]
  loadHolidays: (year: number, countryCode?: string) => void
  pushTaskOnOther: (other: TaskDTM, taskToPush?: TaskDTM) => void
  pushTaskOnEmptyCell: (emptyCell: Moment, taskToPush?: TaskDTM) => void
  addTask: (date: Moment) => void
  removeTask: (id: string) => void
  editTask: (id: string) => void
}

const CalendarGrid = ({
  selectedMonth,
  holidayList,
  tasks,
  labels,
  loadHolidays,
  pushTaskOnOther,
  pushTaskOnEmptyCell,
  addTask,
  removeTask,
  editTask,
}: CalendarGridProps) => {
  const [draggedTask, setDraggedTask] = useState<TaskDTM>()

  useEffect(() => {
    loadHolidays(selectedMonth.year())
  }, [selectedMonth.year()])

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
  }, [])

  const createDragStartHandler = (task: TaskDTM) => () => {
    setDraggedTask(task)
  }

  const createDropOnTaskHandler =
    (task: TaskDTM) => (event: React.DragEvent) => {
      event.preventDefault()
      pushTaskOnOther(task, draggedTask)
    }

  const createDropOnEmptyCellHandler = (day: Moment) => () => {
    pushTaskOnEmptyCell(day, draggedTask)
  }

  const createAddTaskHandler = (day: Moment) => () => {
    addTask(day)
  }

  const createEditTaskHandler = (id: string) => () => {
    editTask(id)
  }

  const createDeleteTaskHandler = (id: string) => () => {
    removeTask(id)
  }

  const firstDayOfGrid = selectedMonth.clone().startOf("week")
  const amountOfGridCells =
    selectedMonth.daysInMonth() + selectedMonth.diff(firstDayOfGrid, "days")

  return (
    <CalendarGridLayout>
      {moment.weekdays().map(weekday => (
        <CalendarDayOfWeekLabel key={weekday}>{weekday}</CalendarDayOfWeekLabel>
      ))}
      {Array(amountOfGridCells)
        .fill(null)
        .map((_, i) => {
          const currentDay = firstDayOfGrid.clone().add(i, "days")
          const holiday = holidayList.find(
            holiday => Math.abs(holiday.date.diff(currentDay, "days")) < 1,
          )
          const currenyDayTasks = tasks.filter(
            task => Math.abs(task.date.diff(currentDay, "days")) < 1,
          )

          return (
            <CalendarCell
              key={currentDay.format()}
              onDragOver={handleDragOver}
              onDrop={createDropOnEmptyCellHandler(currentDay)}
              otherMonth={!currentDay.isSame(selectedMonth, "month")}
            >
              <CalendarCellHeader>
                <CalendarCellLabelContainer>
                  <CalendarCellLabel>
                    {currentDay.format("MMM D")}
                  </CalendarCellLabel>
                  {!!holiday && <i className="fa-regular fa-star" />}
                </CalendarCellLabelContainer>
                <TransparentButton
                  icon={<i className="fa-solid fa-plus" />}
                  onClick={createAddTaskHandler(currentDay)}
                />
              </CalendarCellHeader>
              <p>{holiday?.name}</p>
              {currenyDayTasks.length > 0 && (
                <CalendarTaskListLayout>
                  <CalendarTaskListTitle>Tasks</CalendarTaskListTitle>
                  <CalendarTaskListContainer>
                    {currenyDayTasks.map(task => (
                      <CalendarTask
                        key={task.id}
                        name={task.name}
                        draggable
                        labels={labels.filter(label =>
                          task.labelIds.includes(label.id),
                        )}
                        editTask={createEditTaskHandler(task.id)}
                        deleteTask={createDeleteTaskHandler(task.id)}
                        onDragOver={handleDragOver}
                        onDragStart={createDragStartHandler(task)}
                        onDrop={createDropOnTaskHandler(task)}
                      />
                    ))}
                  </CalendarTaskListContainer>
                </CalendarTaskListLayout>
              )}
            </CalendarCell>
          )
        })}
    </CalendarGridLayout>
  )
}

export { CalendarGrid as CalendarGridComponent }
