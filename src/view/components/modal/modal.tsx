import React from "react"

import { ModalBackground, ModalContent, ModalTitle } from "./modal.styled"

interface ModalProps {
  title: string | React.ReactNode
  children: React.ReactNode | React.ReactNode[]
}

export const Modal = ({
  title,
  children,
}: ModalProps) => {

  return (
    <ModalBackground>
      <ModalContent>
        {typeof title === "string" ? <ModalTitle>{title}</ModalTitle> : title}
        {children}        
      </ModalContent>
    </ModalBackground>
  )
}
