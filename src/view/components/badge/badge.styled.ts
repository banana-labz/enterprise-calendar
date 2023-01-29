import styled from "styled-components"

interface BadgeProps {
  color: string
}

export const Badge = styled.div<BadgeProps>`
  min-width: ${props => props.theme.metrics.medium}px;
  height: ${props => props.theme.metrics.medium}px;
  border-radius: 50%;

  background-color: ${props => props.color};
`
