import styled from "styled-components"

export const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
`

export const ModalContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.metrics.small}px;

  min-width: 320px;
  height: auto;
  padding: ${props => props.theme.metrics.large}px;
  border-radius: ${props => props.theme.metrics.medium}px;

  background-color: ${props => props.theme.palette.white};
`

export const ModalTitle = styled.h2`
  margin-bottom: ${props => props.theme.metrics.large}px;
`
