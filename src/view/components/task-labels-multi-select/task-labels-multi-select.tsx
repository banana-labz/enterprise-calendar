import React, { useState, useRef, useCallback } from "react"

import { useClickOutside } from "view/hooks"
import { Badge } from "view/components"
import { TaskLabelDTM } from "models/dtm"

import {
  MultiSelectLayout,
  Selector,
  Dropdown,
  DropdownItem,
} from "./task-labels-multi-select.styled"

interface TaskLabelsMultiSelectProps {
  placeholder?: string,
  selected: TaskLabelDTM[],
  options: TaskLabelDTM[],
  error?: boolean,
  onAddOption: (option: TaskLabelDTM) => void,
  onRemoveOption: (id: string) => void,
  onClear: () => void,
}

export const TaskLabelsMultiSelect = ({
  placeholder = "None",
  selected,
  error,
  options,
  onAddOption,
  onRemoveOption,
  onClear,
}: TaskLabelsMultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleClickDropdown = useCallback(() => {
    setIsOpen((isOpen) => !isOpen)
  }, [])
  const handleCloseDropdown = useCallback(() => {
    setIsOpen(false)
  }, [])

  useClickOutside(selectRef, handleCloseDropdown)

  const selectedIds = selected.map((item) => item.id);

  const createClickOptionHandler = (option: TaskLabelDTM) => () => {
    if (selectedIds.includes(option.id)) {
      onRemoveOption(option.id)
      return
    }

    onAddOption(option)
  }

  let selectorContent = placeholder
  if (selected.length) {
    selectorContent = selected.map((item) => item.description).join(", ")
  }

  return (
    <MultiSelectLayout ref={selectRef}> 
      <Selector error={error} onClick={handleClickDropdown}>
        {selectorContent}
        {!selected.length && <i className="fa-solid fa-caret-down" />}
        {!!selected.length && <i className="fa-solid fa-xmark" onClick={onClear} />}
      </Selector> 
      <Dropdown visible={isOpen}>
        {options.map((option) => (
          <DropdownItem
            key={option.id}
            selected={selectedIds.includes(option.id)}
            onClick={createClickOptionHandler(option)}
          >
            <Badge color={option.color} />
            <p>{option.description}</p>
          </DropdownItem>
        ))}
      </Dropdown>
    </MultiSelectLayout>
  )
}
