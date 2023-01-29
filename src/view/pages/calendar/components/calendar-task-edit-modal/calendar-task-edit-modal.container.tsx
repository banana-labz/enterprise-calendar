import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"
import { controllers } from "controllers"

import { CalendarTaskEditModalComponent } from "./calendar-task-edit-modal.component"

export const CalendarTaskEditModal = () => {
  const isEditModalOpen = useSelector(selectors.tasks.getIsEditModalOpen)
  const labels = useSelector(selectors.tasks.getLabels)
  const editedTask = useSelector(selectors.tasks.getEditModalTask)

  return (
    <CalendarTaskEditModalComponent
      labels={labels}
      selectedTask={editedTask}
      isOpen={isEditModalOpen}
      closeModalFailure={() => {}}
      closeModalSuccess={() => {}}
    />
  )
}