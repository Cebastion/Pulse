import { useState, useEffect } from "react"

const useVisible = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.bridge.startAnimation(() => setVisible(true))
    window.bridge.stopAnimation(() => setVisible(false))
  }, [])

  return visible
}

export default useVisible
