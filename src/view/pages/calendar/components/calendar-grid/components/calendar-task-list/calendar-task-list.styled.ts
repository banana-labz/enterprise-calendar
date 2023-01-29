import styled from "styled-components"

export const CalendarTaskListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  overflow: hidden;
  overflow-y: scroll;
`

export const CalendarTaskListTitle = styled.h4`
  font-weight: ${props => props.theme.fontWeight.semiBold};
`

export const CalendarTaskListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`