import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"

import { SaveButtonComponent } from "./save-button.component"

export const SaveButton = () => {
  const tasksAndLabels = useSelector(selectors.tasks.getTasksAndLabelsAsString)

  return <SaveButtonComponent data={tasksAndLabels} />
}
