import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"
import { controllers } from "controllers"

import { CalendarTaskEditModalComponent } from "./calendar-task-edit-modal.component"

export const CalendarTaskEditModal = () => {
  const isEditModalOpen = useSelector(selectors.tasks.getIsEditModalOpen)
  const labels = useSelector(selectors.taskLabels.getLabels)
  const selectedTask = useSelector(selectors.tasks.getSelectedTask)

  return (
    <CalendarTaskEditModalComponent
      labels={labels}
      selectedTask={selectedTask}
      isOpen={isEditModalOpen}
      closeModalFailure={controllers.calendar.closeModalFailure}
      closeModalSuccess={controllers.calendar.closeModalSuccess}
    />
  )
}