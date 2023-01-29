import React, { useCallback, useRef } from "react"

import { TransparentButton } from "view/components"

interface LoadButtonProps {
  loadJSON: (json: any) => void
}

const LoadButton = ({
  loadJSON,
}: LoadButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUploadJSON = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return
    }
  
    const fileReader = new FileReader()
    fileReader.readAsText(event.target.files[0])
  
    fileReader.onload = (event) => {
      if (!event?.target?.result){
        return
      }

      if (typeof event.target.result !== "string") {
        return
      }

      const data = JSON.parse(event.target.result)
      loadJSON(data)
    }
  }, [])

  return (
    <>
      <TransparentButton
        icon={<i className="fa-sharp fa-solid fa-arrow-up-from-bracket" />}
        text="Load"
        onClick={() => inputRef.current?.click()}
      />
      <input
        hidden
        type="file"
        accept=".json"
        ref={inputRef}
        onChange={handleUploadJSON}
      />
    </>
  )
}

export { LoadButton as LoadButtonComponent }
/*
    
*/