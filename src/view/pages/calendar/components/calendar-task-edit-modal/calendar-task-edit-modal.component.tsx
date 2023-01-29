import React, { useCallback } from "react"

import { TaskDTM, TaskLabelDTM } from "models/dtm"
import { Input, Modal, TaskLabelsMultiSelect } from "view/components"

import { CalendarTaskEditModalReturnButton, CalendarTaskEditModalLabel } from "./calendar-task-edit-modal.styled"

interface CalendarTaskEditModalProps {
  labels: TaskLabelDTM[],
  isOpen: boolean,
  task?: TaskDTM,
  setEditedTaskName: (name: string) => void,
  addEditedTaskLabel: (label: TaskLabelDTM) => void,
  removeEditedTaskLabel: (id: string) => void,
  clearEditedTaskLabels: () => void,
  closeModal: () => void,
}

const CalendarTaskEditModal = ({
  labels,
  isOpen,
  task,
  setEditedTaskName,
  addEditedTaskLabel,
  removeEditedTaskLabel,
  clearEditedTaskLabels,
  closeModal,
}: CalendarTaskEditModalProps) => {
  const handleChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTaskName(event.target.value)
  }, [])

  if (!isOpen || !task) {
    return null
  }

  return (
    <Modal title="Edit task">
      <CalendarTaskEditModalLabel>Name</CalendarTaskEditModalLabel>
      <Input placeholder="go for a walk" value={task.name} onChange={handleChangeName} />
      <CalendarTaskEditModalLabel>Task Labels</CalendarTaskEditModalLabel>
      <TaskLabelsMultiSelect
        selected={task.labels}
        options={labels}
        onAddOption={addEditedTaskLabel}
        onRemoveOption={removeEditedTaskLabel}
        onClear={clearEditedTaskLabels}
      />
      <CalendarTaskEditModalReturnButton onClick={closeModal}>Return to calendar</CalendarTaskEditModalReturnButton>
    </Modal>
  )
}

export { CalendarTaskEditModal as CalendarTaskEditModalComponent }