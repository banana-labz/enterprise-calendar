import styled from "styled-components"

export const CalendarPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.metrics.medium}px;

  min-height: calc(100vh - 64px);
  padding: ${props => props.theme.metrics.large}px;
  padding-top: ${props => props.theme.metrics.large}px;

  background-color: ${props => props.theme.palette.lighterGrey};
`

export const CalendarLayout = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.metrics.medium}px;

  background-color: ${props => props.theme.palette.lighterGrey};
`
