import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"
import { controllers } from "controllers"

import { CalendarTaskAddModalComponent } from "./calendar-task-add-modal.component"

export const CalendarTaskAddModal = () => {
  const isAddModalOpen = useSelector(selectors.tasks.getIsAddModalOpen)
  const labels = useSelector(selectors.tasks.getLabels)
  const newTask = useSelector(selectors.tasks.getNewTask)

  return (
    <CalendarTaskAddModalComponent
      labels={labels}
      task={newTask}
      isOpen={isAddModalOpen}
      setNewTaskName={controllers.tasks.setNewTaskName}
      addNewTaskLabel={controllers.tasks.addNewTaskLabel}
      removeNewTaskLabel={controllers.tasks.removeNewTaskLabel}
      clearNewTaskLabels={controllers.tasks.clearNewTaskLabels}
      closeModalFailure={controllers.tasks.closeAddModalFailure}
      closeModalSuccess={controllers.tasks.closeAddModalSuccess}
    />
  )
}