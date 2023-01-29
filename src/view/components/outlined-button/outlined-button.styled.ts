import styled from "styled-components"

export const OutlinedButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 32px;
  min-width: 96px;
  padding: ${props => props.theme.metrics.medium}px;

  border: 1px solid ${props => props.theme.palette.grey};
  border-radius: ${props => props.theme.metrics.small}px;
  background-color: ${props => props.theme.palette.white};

  cursor: pointer;
`