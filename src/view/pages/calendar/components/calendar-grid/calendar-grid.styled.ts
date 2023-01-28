import styled from "styled-components"

export const CalendarGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${props => props.theme.metrics.small}px;
`

export const CalendarDayOfWeekLabel = styled.p`
  display: flex;
  justify-content: center;
`

export const CalendarCell = styled.div`
  height: 128px;

  background-color: ${props => props.theme.palette.blue};
  color: white;
  padding: ${props => props.theme.metrics.medium}px;
`