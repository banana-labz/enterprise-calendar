import React from "react"

import { TransparentButton } from "view/components"

interface SaveButtonProps {

}

const SaveButton = ({}: SaveButtonProps) => {
  return (
    <TransparentButton
      icon={<i className="fa-solid fa-floppy-disk" />}
      text="Save"
    />
  )
}

export { SaveButton as SaveButtonComponent }