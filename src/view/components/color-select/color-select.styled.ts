import styled from "styled-components"

import { SketchPicker } from "react-color"

export const ColorSelectLayout = styled.div`
`

export const ColorPicker = styled(SketchPicker)`
  position: absolute;
`

interface SquareButtonProps {
  color: string
}

export const SquareButton = styled.button<SquareButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.metrics.small}px;
  border: 2px solid ${props => props.theme.palette.black};
  background-color: ${props => props.color};

  cursor: pointer;
`