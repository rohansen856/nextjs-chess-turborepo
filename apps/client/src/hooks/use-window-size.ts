import { useState, useLayoutEffect } from "react"

interface WindowSizeProps {
  height: null | number
  width: null | number
}

export function useWindowSize(): WindowSizeProps {
  const [size, setSize] = useState<WindowSizeProps>({
    height: null,
    width: null,
  })

  useLayoutEffect(() => {
    function handleResize() {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size
}
