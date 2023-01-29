import React, { useCallback } from "react"

import { TransparentButton } from "view/components"

interface SaveButtonProps {
  data: string,
}

const downloadObjectAsJSON = (jsonString: string) => {
  const blob = new Blob([jsonString], { type: "text/json" })

  const jsonURL = window.URL.createObjectURL(blob)
  const link = document.createElement("a")

  document.body.appendChild(link)
  link.href = jsonURL
  link.setAttribute("download", "tasks.json")
  link.click()
  document.body.removeChild(link)
}

const SaveButton = ({ data }: SaveButtonProps) => {
  const handleDownloadObjectAsJSON = useCallback(() => {
    downloadObjectAsJSON(data)
  }, [data])

  return (
    <TransparentButton
      icon={<i className="fa-solid fa-floppy-disk" />}
      text="Save"
      onClick={handleDownloadObjectAsJSON}
    />
  )
}

export { SaveButton as SaveButtonComponent }