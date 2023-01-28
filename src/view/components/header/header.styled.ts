import styled from "styled-components"

export const HeaderLayout = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-height: 64px;
  padding: ${props => props.theme.metrics.large}px;

  background-color: ${props => props.theme.palette.blue};
  color: ${props => props.theme.palette.white};
`

export const HeaderTitle = styled.h2`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.extraLarge};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`
export const HeaderNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${props => props.theme.metrics.large}px;

  > * {
    color: ${props => props.theme.palette.white};
  }
`