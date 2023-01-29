import styled from "styled-components"

interface InputProps {
  error?: boolean
}

export const Input = styled.input<InputProps>`
  height: 32px;
  padding: ${props => props.theme.metrics.small}px
    ${props => props.theme.metrics.small * 3}px;

  border: 1px solid
    ${props =>
      props.error ? props.theme.palette.red : props.theme.palette.lightGrey};
  border-radius: ${props => props.theme.metrics.small}px;
  box-shadow: none;

  ::placeholder {
    opacity: 1;
    color: ${props => props.theme.palette.grey};
  }

  &:focus {
    outline: 1px solid
      ${props =>
        props.error ? props.theme.palette.red : props.theme.palette.grey};
  }
`
