import React from "react"

import { TransparentButton } from "view/components"

interface LoadButtonProps {

}

const LoadButton = ({ }: LoadButtonProps) => {
  return (
    <TransparentButton
      icon={<i className="fa-sharp fa-solid fa-arrow-up-from-bracket" />}
      text="Load"
    />
  )
}

export { LoadButton as LoadButtonComponent }