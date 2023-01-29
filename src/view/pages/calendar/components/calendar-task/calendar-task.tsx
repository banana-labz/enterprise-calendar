import React from "react"

import { LabelDTM } from "models/dtm"
import { Badge, TransparentButton } from "view/components"

import {
  CalendarTaskLayout,
  CalendarTaskGroup,
  CalendarTaskButtonGroup,
  CalendarTaskName,
} from "./calendar-task.styled"

interface CalendarTaskProps extends React.HTMLAttributes<HTMLLIElement> {
  name: string
  labels: LabelDTM[]
  editTask: () => void
  deleteTask: () => void
}

export const CalendarTask = ({
  name,
  labels,
  editTask,
  deleteTask,
  ...other
}: CalendarTaskProps) => {
  return (
    <CalendarTaskLayout {...other}>
      <CalendarTaskGroup>
        {labels.map(label => (
          <Badge key={label.id} color={label.color} />
        ))}
        <CalendarTaskName>{name}</CalendarTaskName>
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
