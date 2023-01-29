import styled from "styled-components"

export const ButtonLayout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.metrics.small}px;

  padding: ${props => props.theme.metrics.small}px;

  border: 0;
  background-color: transparent;
  border-radius: ${props => props.theme.metrics.small}px;

  cursor: pointer;
  transition: background-color 1s ease-out;
  &:hover {
    background-color: ${props => props.theme.palette.lightBlue};
  }
`

export const Text = styled.p`
  font-size: ${props => props.theme.fontSize.large}px;
  font-weight: ${props => props.theme.fontWeight.regular};
`
