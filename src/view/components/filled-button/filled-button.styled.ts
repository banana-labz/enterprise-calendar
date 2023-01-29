import styled from "styled-components"

export const FilledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 32px;
  min-width: 96px;
  padding: ${props => props.theme.metrics.medium}px;

  border: none;
  border-radius: ${props => props.theme.metrics.small}px;
  background-color: ${props => props.theme.palette.blue};
  color: ${props => props.theme.palette.white};

  cursor: pointer;
`
