import React from "react"
import htmlToCanvas from "html2canvas"

import { TransparentButton } from "view/components"

const takeScreenshotOfCalendar = async () => {
  const calendar = document.getElementById("calendar")
  if (!calendar) {
    return
  }

  const canvas = await htmlToCanvas(calendar)

  const data = canvas.toDataURL("image/png")
  const link = document.createElement("a")

  if (typeof link.download === "string") {
    link.href = data
    link.download = "calendar.png"

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } else {
    window.open(data)
  }
}

export const ScreenshotButton = () => (
  <TransparentButton
    icon={<i className="fa-solid fa-camera" />}
    text="Screenshot"
    onClick={takeScreenshotOfCalendar}
  />
)