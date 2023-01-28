import React from "react"

import { TaskDTM, TaskLabelDTM } from "models/dtm"
import { Badge, Input, Modal } from "view/components"

import { CalendarTaskEditModalTitle } from "./calendar-task-edit-modal.styled"

interface CalendarTaskEditModalProps {
  labels: TaskLabelDTM[],
  isOpen: boolean,
  selectedTask?: TaskDTM,
  closeModalFailure: () => void,
  closeModalSuccess: () => void,
}

const CalendarTaskEditModal = ({
  selectedTask,
  labels,
  isOpen,
  closeModalFailure,
  closeModalSuccess,
}: CalendarTaskEditModalProps) => {
  if (!isOpen || !selectedTask) {
    return null
  }

  return (
    <Modal title="Edit task">
      <div>
        <p>Name</p>
        <Input placeholder="go for a walk" value={selectedTask.name} />
        <div>
          <h3>labels</h3>
          <ul>
            {labels.map((label) => (
              <li key={label.id} style={{ display: "flex", flexDirection: "row", gap: "4px", alignItems: "center" }}>
                <Badge color={label.color} />
                <p>{label.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button onClick={closeModalFailure}>cancel</button>
        <button onClick={closeModalSuccess}>save</button>
      </div>
    </Modal>
  )
}

export { CalendarTaskEditModal as CalendarTaskEditModalComponent }