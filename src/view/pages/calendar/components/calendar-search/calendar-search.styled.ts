import styled from "styled-components"

export const CalendarSearchLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.metrics.small}px;

  > * {
    width: 256px;
  }
`
