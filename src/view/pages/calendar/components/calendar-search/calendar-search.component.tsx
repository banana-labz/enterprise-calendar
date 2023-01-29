
import React, { useCallback } from "react"

import { TaskLabelDTM } from "models/dtm"
import { Input, TaskLabelsMultiSelect } from "view/components"

import { CalendarSearchLayout } from "./calendar-search.styled"

interface CalendarSearchProps {
  searchedText: string,
  searchedLabels: TaskLabelDTM[],
  allTaskLabels: TaskLabelDTM[],
  setSearchedText: (text: string) => void,
  addSearchLabel: (label: TaskLabelDTM) => void,
  removeSearchLabel: (id: string) => void,
  clearSearchLabels: () => void,
}

const CalendarSearch = ({
  searchedText,
  searchedLabels,
  allTaskLabels,
  setSearchedText,
  addSearchLabel,
  removeSearchLabel,
  clearSearchLabels,
}: CalendarSearchProps) => {
  const handleChangeSearchedText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedText(event.target.value)
  }, [])

  return (
    <CalendarSearchLayout>
      <TaskLabelsMultiSelect
        selected={searchedLabels}
        options={allTaskLabels}
        onAddOption={addSearchLabel}
        onRemoveOption={removeSearchLabel}
        onClear={clearSearchLabels}
      />
      <Input value={searchedText} onChange={handleChangeSearchedText} />
    </CalendarSearchLayout>
  )
}

export { CalendarSearch as CalendarSearchComponent }