import React, { useCallback } from "react"

import { TaskDTM, LabelDTM } from "models/dtm"
import {
  TaskLabelsMultiSelect,
  FilledButton,
  Input,
  Modal,
  OutlinedButton,
} from "view/components"

import {
  CalendarTaskAddModalControls,
  CalendarTaskAddModalLabel,
} from "./calendar-task-add-modal.styled"

interface CalendarTaskAddModalProps {
  labels: LabelDTM[]
  isOpen: boolean
  task?: TaskDTM
  setNewTaskName: (name: string) => void
  addNewTaskLabel: (id: string) => void
  removeNewTaskLabel: (id: string) => void
  clearNewTaskLabels: () => void
  closeModalFailure: () => void
  closeModalSuccess: () => void
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
  const handleChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTaskName(event.target.value)
    },
    [],
  )

  if (!isOpen || !task) {
    return null
  }

  return (
    <Modal title="New task">
      <CalendarTaskAddModalLabel>Name</CalendarTaskAddModalLabel>
      <Input
        placeholder="go for a walk"
        value={task.name}
        onChange={handleChangeName}
      />
      <CalendarTaskAddModalLabel>Task labels</CalendarTaskAddModalLabel>
      <TaskLabelsMultiSelect
        selectedIds={task.labelIds}
        labels={labels}
        onAddLabel={addNewTaskLabel}
        onRemoveLabel={removeNewTaskLabel}
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
