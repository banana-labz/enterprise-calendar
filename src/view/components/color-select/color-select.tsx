import React, { useCallback, useState, useRef } from "react"
import { ColorChangeHandler } from "react-color"

import { useClickOutside } from "view/hooks"

import {
  ColorSelectLayout,
  SquareButton,
  ColorPicker,
} from "./color-select.styled"

interface ColorSelectProps {
  value: string
  onChange: (color: string) => void
}

export const ColorSelect = ({ value, onChange }: ColorSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const colorSelectRef = useRef(null)

  const handleSwitchColorPicker = useCallback(() => {
    setIsOpen(open => !open)
  }, [])
  const handleCloseColorPicker = useCallback(() => {
    setIsOpen(false)
  }, [])

  useClickOutside(colorSelectRef, handleCloseColorPicker)

  const onChangeHandler: ColorChangeHandler = useCallback(color => {
    onChange(color.hex)
  }, [])

  return (
    <ColorSelectLayout ref={colorSelectRef}>
      <SquareButton color={value} onClick={handleSwitchColorPicker} />
      {isOpen && (
        <ColorPicker
          disableAlpha
          color={value}
          onChangeComplete={onChangeHandler}
        />
      )}
    </ColorSelectLayout>
  )
}
