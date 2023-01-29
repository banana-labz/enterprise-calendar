import React from "react"

import { LoadButton, SaveButton, ScreenshotButton } from "./components"
import { HeaderLayout, HeaderTitle, HeaderNavigation } from "./header.styled"

export const Header = () => {
  return (
    <HeaderLayout>
      <HeaderTitle>
        Calendar
      </HeaderTitle>
      <HeaderNavigation>
        <ScreenshotButton />
        <LoadButton />
        <SaveButton />
      </HeaderNavigation>
    </HeaderLayout>
  )
}