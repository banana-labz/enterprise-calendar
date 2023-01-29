import React, { useCallback } from "react"

import { TaskDTM, TaskLabelDTM } from "models/dtm"
import {
  TaskLabelsMultiSelect,
  FilledButton,
  Input,
  Modal,
  OutlinedButton,
} from "view/components"

import { CalendarTaskAddModalControls, CalendarTaskAddModalLabel } from "./calendar-task-add-modal.styled"

interface CalendarTaskAddModalProps {
  labels: TaskLabelDTM[],
  isOpen: boolean,
  task?: TaskDTM,
  setNewTaskName: (name: string) => void,
  addNewTaskLabel: (label: TaskLabelDTM) => void,
  removeNewTaskLabel: (id: string) => void,
  clearNewTaskLabels: () => void,
  closeModalFailure: () => void,
  closeModalSuccess: () => void,
}

const CalendarTaskAddModal = ({
  task,
  labels,
  isOpen,
  setNewTaskName,
  addNewTaskLabel,
  removeNewTaskLabel,
  clearNewTaskLabels,
  closeModalFailure,
  closeModalSuccess,
}: CalendarTaskAddModalProps) => {
  const handleChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value)
  }, [])

  if (!isOpen || !task) {
    return null
  }

  return (
    <Modal title="New task">
      <CalendarTaskAddModalLabel>Name *</CalendarTaskAddModalLabel>
      <Input
        placeholder="go for a walk"
        value={task.name}
        onChange={handleChangeName}
      />
      <CalendarTaskAddModalLabel>Task labels</CalendarTaskAddModalLabel>
      <TaskLabelsMultiSelect
        selected={task.labels}
        options={labels}
        onAddOption={addNewTaskLabel}
        onRemoveOption={removeNewTaskLabel}
        onClear={clearNewTaskLabels}
      />
      <CalendarTaskAddModalControls>
        <OutlinedButton onClick={closeModalFailure}>Cancel</OutlinedButton>
        <FilledButton onClick={closeModalSuccess}>Save</FilledButton>
      </CalendarTaskAddModalControls>
    </Modal>
  )
}

export { CalendarTaskAddModal as CalendarTaskAddModalComponent }