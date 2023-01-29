import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"
import { controllers } from "controllers"

import { CalendarTaskEditModalComponent } from "./calendar-task-edit-modal.component"

export const CalendarTaskEditModal = () => {
  const isEditModalOpen = useSelector(selectors.tasks.getIsEditModalOpen)
  const labels = useSelector(selectors.tasks.getLabels)
  const editedTask = useSelector(selectors.tasks.getEditedTask)

  return (
    <CalendarTaskEditModalComponent
      labels={labels}
      task={editedTask}
      isOpen={isEditModalOpen}
      setEditedTaskName={controllers.tasks.setEditedTaskName}
      addEditedTaskLabel={controllers.tasks.addEditedTaskLabel}
      removeEditedTaskLabel={controllers.tasks.removeEditedTaskLabel}
      clearEditedTaskLabels={controllers.tasks.clearEditedTaskLabels}
      closeModal={controllers.tasks.closeEditModal}
    />
  )
}
