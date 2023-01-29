import styled from "styled-components"

export const CalendarGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: ${props => props.theme.metrics.medium}px;
`

export const CalendarDayOfWeekLabel = styled.p`
  display: flex;
  justify-content: center;
`

export const CalendarCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.metrics.medium}px;

  height: 192px;
  padding: ${props => props.theme.metrics.medium}px;

  border-radius: ${props => props.theme.metrics.small}px;

  background-color: ${props => props.theme.palette.white};
`

export const CalendarCellHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CalendarCellLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  > i {
    font-size: ${props => props.theme.fontSize.medium}px;
  }
`

export const CalendarCellLabel = styled.h3`
  font-weight: ${props => props.theme.fontWeight.semiBold};
`

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
