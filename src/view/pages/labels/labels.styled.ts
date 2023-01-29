import styled from "styled-components"

export const LabelsPageLayout = styled.div`
  height: calc(100vh - 64px);
  padding: ${props => props.theme.metrics.extraLarge}px;

  background-color: ${props => props.theme.palette.lightGrey};
`

export const LabelsPageTitle = styled.h2`
  margin-bottom: ${props => props.theme.metrics.large}px;
`

export const LabelsList = styled.ul`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 32px;
  gap: ${props => props.theme.metrics.small}px;

  max-width: 512px;
`

export const DashedButton = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.metrics.medium}px;

  border: 1px dashed ${props => props.theme.palette.grey};
  border-radius: ${props => props.theme.metrics.small}px;
  background-color: ${props => props.theme.palette.white};

  cursor: pointer;
`
