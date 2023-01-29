import React, { useEffect } from "react"

export const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: (event: MouseEvent) => void
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (!ref.current) {
      return
    }
    if (ref.current.contains(event.target as Node)) {
      return
    }

    callback(event)
  }

  const addEventListener = () => {
    document.addEventListener("mousedown", handleClickOutside)
  }

  const removeEventListener = () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }

  useEffect(() => {
    addEventListener()
    return removeEventListener
  }, [ref])
}
