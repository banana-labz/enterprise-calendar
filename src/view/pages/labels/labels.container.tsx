import { controllers } from "controllers"
import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"

import { LabelsPageComponent } from "./labels.component"

export const LabelsPage = () => {
  const labels = useSelector(selectors.tasks.getLabels)

  return (
    <LabelsPageComponent
      labels={labels}
      addLabel={controllers.tasks.addLabel}
      removeLabel={controllers.tasks.removeLabel}
      setLabelColor={controllers.tasks.setLabelColor}
      setLabelDescription={controllers.tasks.setLabelDescription}
    />
  )
}