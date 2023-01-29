import React, { useCallback } from "react"

import { LabelDTM } from "models/dtm"
import { Input, TaskLabelsMultiSelect } from "view/components"

import { CalendarSearchLayout } from "./calendar-search.styled"

interface CalendarSearchProps {
  searchedText: string
  searchedLabelIds: string[]
  allTaskLabels: LabelDTM[]
  setSearchedText: (text: string) => void
  addSearchLabel: (id: string) => void
  removeSearchLabel: (id: string) => void
  clearSearchLabels: () => void
}

const CalendarSearch = ({
  searchedText,
  searchedLabelIds,
  allTaskLabels,
  setSearchedText,
  addSearchLabel,
  removeSearchLabel,
  clearSearchLabels,
}: CalendarSearchProps) => {
  const handleChangeSearchedText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchedText(event.target.value)
    },
    [],
  )

  return (
    <CalendarSearchLayout>
      <TaskLabelsMultiSelect
        selectedIds={searchedLabelIds}
        labels={allTaskLabels}
        onAddLabel={addSearchLabel}
        onRemoveLabel={removeSearchLabel}
        onClear={clearSearchLabels}
      />
      <Input
        placeholder="search task name"
        value={searchedText}
        onChange={handleChangeSearchedText}
      />
    </CalendarSearchLayout>
  )
}

export { CalendarSearch as CalendarSearchComponent }
