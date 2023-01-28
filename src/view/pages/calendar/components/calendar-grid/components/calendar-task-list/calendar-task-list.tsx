import React from "react"

import { TaskDTM } from "models/dtm"

import { CalendarTaskListContainer, CalendarTaskListItem, CalendarTaskListLayout, CalendarTaskListTitle } from "./calendar-task-list.styled"
import { Badge } from "view/components"

interface CalendarTaskListProps {
  taskList: TaskDTM[],
}

export const CalendarTaskList = ({ taskList }: CalendarTaskListProps) => {
  if (!taskList.length) {
    return null
  }

  return (
    <CalendarTaskListLayout>
      <CalendarTaskListTitle>Tasks</CalendarTaskListTitle>
      <CalendarTaskListContainer>
        {taskList.map((task) => (
          <CalendarTaskListItem key={task.id}>
            <p>{task.name}</p>
            {task.labels.map((label) => (
              <Badge key={label.id} color={label.color} />
            ))}
          </CalendarTaskListItem>
        ))}
      </CalendarTaskListContainer>
    </CalendarTaskListLayout>
  )
}