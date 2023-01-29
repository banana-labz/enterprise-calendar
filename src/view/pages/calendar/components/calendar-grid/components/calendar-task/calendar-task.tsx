import React from "react"

import { TaskLabelDTM } from "models/dtm"
import { Badge, TransparentButton } from "view/components"

import {
  CalendarTaskLayout,
  CalendarTaskGroup,
  CalendarTaskButtonGroup,
  CalendarTaskName,
} from "./calendar-task.styled"

interface CalendarTaskProps {
  name: string,
  labels: TaskLabelDTM[],
  editTask: () => void,
  deleteTask: () => void,
}

export const CalendarTask = ({
  name,
  labels,
  editTask,
  deleteTask,
}: CalendarTaskProps) => {
  return (
    <CalendarTaskLayout>
      <CalendarTaskGroup>
        <CalendarTaskName>{name}</CalendarTaskName>
        {labels.map((label) => (
          <Badge key={label.id} color={label.color} />
        ))}
      </CalendarTaskGroup>
      <CalendarTaskButtonGroup>
        <TransparentButton
          icon={<i className="fa-solid fa-pen-to-square" />}
          onClick={editTask}
        />
        <TransparentButton
          icon={<i className="fa-solid fa-trash" />}
          onClick={deleteTask}
        />
      </CalendarTaskButtonGroup>
    </CalendarTaskLayout>
  )
}