import React from "react"

import { controllers } from "controllers"

import { LoadButtonComponent } from "./load-button.component"

export const LoadButton = () => {
  return <LoadButtonComponent loadJSON={controllers.tasks.loadJSON} />
}
