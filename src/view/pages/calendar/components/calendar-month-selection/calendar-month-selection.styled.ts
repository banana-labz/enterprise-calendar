import styled from "styled-components"

export const CalendarMonthSelectionLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.metrics.medium}px;
  justify-content: center;
  align-items: center;
`

export const CalendarMonthTitle = styled.h2`
  display: flex;
  justify-content: center;

  margin-bottom: 0;
  min-width: 192px;
`
