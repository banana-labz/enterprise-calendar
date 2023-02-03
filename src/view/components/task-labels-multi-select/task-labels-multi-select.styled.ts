import styled from "styled-components"

export const MultiSelectLayout = styled.div`
  position: relative;
  margin: 0;
`

interface SelectorProps {
  error?: boolean
}

export const Selector = styled.button<SelectorProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: ${props => props.theme.metrics.small}px
    ${props => props.theme.metrics.small * 3}px;

  border: 1px solid
    ${props =>
      props.error ? props.theme.palette.red : props.theme.palette.lightGrey};
  border-radius: ${props => props.theme.metrics.small}px;
  background-color: ${props => props.theme.palette.white};

  cursor: pointer;

  &:focus {
    outline: 1px solid
      ${props =>
        props.error ? props.theme.palette.red : props.theme.palette.grey};
  }

  > i {
    color: ${props => props.theme.palette.grey};
  }
`

interface DropdownProps {
  visible?: boolean
}

export const Dropdown = styled.div<DropdownProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.metrics.small}px;

  width: 100%;
  max-height: 384px;
  z-index: 2;
  padding-top: ${props => props.theme.metrics.small}px;
  padding-bottom: ${props => props.theme.metrics.small}px;
  margin-top: 2px; /* 1px + 1px (borders) */
  border: 1px solid ${props => props.theme.palette.lightGrey};
  border-radius: ${props => props.theme.metrics.small}px;
  background-color: ${props => props.theme.palette.white};

  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`

interface DropdownItemProps {
  selected: boolean
}

export const DropdownItem = styled.div<DropdownItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${props => props.theme.metrics.small}px;

  padding: ${props => props.theme.metrics.small}px
    ${props => props.theme.metrics.medium}px
    ${props => props.theme.metrics.small}px
    ${props => props.theme.metrics.medium}px;
  background-color: ${props =>
    props.selected ? props.theme.palette.lightBlue : props.theme.palette.white};

  cursor: pointer;
`
