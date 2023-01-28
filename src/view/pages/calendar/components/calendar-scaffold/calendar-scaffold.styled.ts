import styled from "styled-components"

export const CalendarLayout = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.metrics.medium}px;

  padding: ${props => props.theme.metrics.large}px;
  padding-top: ${props => props.theme.metrics.large}px;

  background-color: ${props => props.theme.palette.lightGrey};
`