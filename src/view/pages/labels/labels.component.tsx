import React from "react"

import { LabelDTM } from "models/dtm"
import { ColorSelect, Input } from "view/components"

import {
  LabelsPageLayout,
  LabelsPageTitle,
  LabelsList,
  DashedButton,
} from "./labels.styled"

interface LabelsPageProps {
  labels: LabelDTM[]
  addLabel: () => void
  removeLabel: (index: number) => void
  setLabelColor: (index: number, color: string) => void
  setLabelDescription: (index: number, description: string) => void
}

const LabelsPage = ({
  labels,
  addLabel,
  removeLabel,
  setLabelColor,
  setLabelDescription,
}: LabelsPageProps) => {
  const createChangeLabelDescriptionHandler =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setLabelDescription(index, event.target.value)
    }

  const createChangeLabelColorHandler = (index: number) => (color: string) => {
    setLabelColor(index, color)
  }

  const createRemoveLabelHandler = (index: number) => () => {
    removeLabel(index)
  }

  return (
    <LabelsPageLayout>
      <LabelsPageTitle>Task Labels</LabelsPageTitle>
      <LabelsList>
        {labels.map((label, i) => (
          <React.Fragment key={label.id}>
            <ColorSelect
              value={label.color}
              onChange={createChangeLabelColorHandler(i)}
            />
            <Input
              placeholder="Enter label description"
              value={label.description}
              onChange={createChangeLabelDescriptionHandler(i)}
            />
            {i === 0 && (
              <DashedButton onClick={addLabel}>
                <i className="fa-solid fa-plus" />
              </DashedButton>
            )}
            {i > 0 && (
              <DashedButton onClick={createRemoveLabelHandler(i)}>
                <i className="fa-solid fa-minus" />
              </DashedButton>
            )}
          </React.Fragment>
        ))}
      </LabelsList>
    </LabelsPageLayout>
  )
}

export { LabelsPage as LabelsPageComponent }
