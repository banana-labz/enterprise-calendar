import styled from "styled-components"

export const CalendarLayout = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.metrics.medium}px;
`