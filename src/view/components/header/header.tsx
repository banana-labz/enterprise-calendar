import React from "react"

import { LoadButton, SaveButton } from "./components"
import { HeaderLayout, HeaderTitle, HeaderNavigation } from "./header.styled"

export const Header = () => (
  <HeaderLayout>
    <HeaderTitle>
      Calendar
    </HeaderTitle>
    <HeaderNavigation>
      <LoadButton />
      <SaveButton />
    </HeaderNavigation>
  </HeaderLayout>
)