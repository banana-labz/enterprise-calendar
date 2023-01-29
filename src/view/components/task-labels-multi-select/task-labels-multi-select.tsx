import React, { useState, useRef, useCallback } from "react"

import { useClickOutside } from "view/hooks"
import { Badge } from "view/components"
import { LabelDTM } from "models/dtm"

import {
  MultiSelectLayout,
  Selector,
  Dropdown,
  DropdownItem,
} from "./task-labels-multi-select.styled"

interface TaskLabelsMultiSelectProps {
  placeholder?: string
  selectedIds: string[]
  labels: LabelDTM[]
  error?: boolean
  onAddLabel: (id: string) => void
  onRemoveLabel: (id: string) => void
  onClear: () => void
}

export const TaskLabelsMultiSelect = ({
  placeholder = "None",
  selectedIds,
  error,
  labels,
  onAddLabel,
  onRemoveLabel,
  onClear,
}: TaskLabelsMultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  const handleClickDropdown = useCallback(() => {
    setIsOpen(isOpen => !isOpen)
  }, [])
  const handleCloseDropdown = useCallback(() => {
    setIsOpen(false)
  }, [])

  useClickOutside(selectRef, handleCloseDropdown)

  const createClickOptionHandler = (id: string) => () => {
    if (selectedIds.includes(id)) {
      onRemoveLabel(id)
      return
    }

    onAddLabel(id)
  }

  let selectorContent = placeholder
  if (selectedIds.length) {
    selectorContent = labels
      .filter(label => selectedIds.includes(label.id))
      .map(label => label.description)
      .join(", ")
  }

  return (
    <MultiSelectLayout ref={selectRef}>
      <Selector error={error} onClick={handleClickDropdown}>
        {selectorContent}
        {!selectedIds.length && <i className="fa-solid fa-caret-down" />}
        {!!selectedIds.length && (
          <i className="fa-solid fa-xmark" onClick={onClear} />
        )}
      </Selector>
      <Dropdown visible={isOpen}>
        {labels.map(label => (
          <DropdownItem
            key={label.id}
            selected={selectedIds.includes(label.id)}
            onClick={createClickOptionHandler(label.id)}
          >
            <Badge color={label.color} />
            <p>{label.description || "unnamed"}</p>
          </DropdownItem>
        ))}
      </Dropdown>
    </MultiSelectLayout>
  )
}
