import styled from "styled-components"

export const CalendarTaskAddModalControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${props => props.theme.metrics.medium}px;

  margin-top: ${props => props.theme.metrics.large}px;
`

export const CalendarTaskAddModalLabel = styled.label`
  margin-bottom: 4px;
`
