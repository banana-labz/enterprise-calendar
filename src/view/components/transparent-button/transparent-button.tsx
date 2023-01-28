import React from "react"

import { ButtonLayout, Text } from "./transparent-button.styled"

interface TransparentButtonProps {
  icon?: React.ReactNode,
  text?: React.ReactNode | string,
  onClick?: () => void,
  onBlur?: () => void,
}

export const TransparentButton = ({
  icon,
  text,
  onClick,
  onBlur,
}: TransparentButtonProps) => (
  <ButtonLayout onClick={onClick} onBlur={onBlur}>
    {icon}
    {typeof text === "string" ? <Text>{text}</Text> : text}
  </ButtonLayout>
)