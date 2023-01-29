import React from "react"

import { TaskDTM } from "models/dtm"

import { CalendarTaskListContainer, CalendarTaskListLayout, CalendarTaskListTitle } from "./calendar-task-list.styled"

import { CalendarTask } from "../calendar-task"

interface CalendarTaskListProps {
  taskList: TaskDTM[],
  removeTask: (id: string) => void
  editTask: (id: string) => void
}

export const CalendarTaskList = ({
  taskList,
  removeTask,
  editTask,
}: CalendarTaskListProps) => {
  if (!taskList.length) {
    return null
  }

  const createEditTaskHandler = (id: string) => () => {
    editTask(id)
  }

  const createDeleteTaskHandler = (id: string) => () => {
    removeTask(id)
  }

  return (
    <CalendarTaskListLayout>
      <CalendarTaskListTitle>Tasks</CalendarTaskListTitle>
      <CalendarTaskListContainer>
        {taskList.map((task) => (
          <CalendarTask
            key={task.id}
            name={task.name}
            labels={task.labels}
            editTask={createEditTaskHandler(task.id)}
            deleteTask={createDeleteTaskHandler(task.id)}
          />
        ))}
      </CalendarTaskListContainer>
    </CalendarTaskListLayout>
  )
}