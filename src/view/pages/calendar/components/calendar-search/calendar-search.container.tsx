import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"
import { controllers } from "controllers"

import { CalendarSearchComponent } from "./calendar-search.component"

export const CalendarSearch = () => {
  const searchedText = useSelector(selectors.tasks.getSearchedText)
  const searchedLabelIds = useSelector(selectors.tasks.getSearchedLabelIds)
  const allTaskLabels = useSelector(selectors.tasks.getLabels)

  return (
    <CalendarSearchComponent
      searchedText={searchedText}
      searchedLabelIds={searchedLabelIds}
      allTaskLabels={allTaskLabels}
      setSearchedText={controllers.tasks.setSearchedText}
      addSearchLabel={controllers.tasks.addSearchedLabel}
      removeSearchLabel={controllers.tasks.removeSearchedLabel}
      clearSearchLabels={controllers.tasks.clearSearchedLabels}
    />
  )
}
