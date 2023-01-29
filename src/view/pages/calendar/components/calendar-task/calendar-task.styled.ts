import styled from "styled-components"

export const CalendarTaskLayout = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${props => props.theme.metrics.small}px;
  border-radius: ${props => props.theme.metrics.small}px;
  border: 1px solid ${props => props.theme.palette.lightGrey};
`

export const CalendarTaskGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${props => props.theme.metrics.small}px;

  overflow: hidden;
`

export const CalendarTaskButtonGroup = styled(CalendarTaskGroup)`
  flex-shrink: 0;
  gap: 0;
`

export const CalendarTaskName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
