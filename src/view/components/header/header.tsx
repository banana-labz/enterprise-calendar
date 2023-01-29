import React from "react"
import { Link } from "react-router-dom"

import { LoadButton, SaveButton, ScreenshotButton } from "./components"
import { HeaderLayout, HeaderTitle, HeaderNavigation } from "./header.styled"

export const Header = () => {
  return (
    <HeaderLayout>
      <HeaderTitle to="calendar">Calendar</HeaderTitle>
      <HeaderNavigation>
        <ScreenshotButton />
        <LoadButton />
        <SaveButton />
        <Link to="labels">Labels</Link>
      </HeaderNavigation>
    </HeaderLayout>
  )
}
