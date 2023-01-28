import styled from "styled-components"

export const CalendarGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${props => props.theme.metrics.small}px;
`

export const CalendarDayOfWeekLabel = styled.p`
`

export const CalendarCell = styled.div`
  background-color: ${props => props.theme.palette.blue};
  color: white;
  padding: 32px;
`