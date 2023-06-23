import { useState, useCallback } from "react"

interface ClipboardProps {
  error: null | Error
  text: null | string
}

export function useCopyToClipboard(): [
  state: ClipboardProps,
  copyToClipboard: (value: string) => void
] {
  const [state, setState] = useState<ClipboardProps>({
    error: null,
    text: null,
  })

  const copyToClipboard = useCallback((value: string) => {
    if (!navigator?.clipboard) {
      return setState({
        error: new Error("Clipboard not supported"),
        text: null,
      })
    }

    const handleSuccess = () => {
      setState({
        error: null,
        text: value,
      })
    }

    const handleFailure = (e: Error) => {
      setState({
        error: e,
        text: null,
      })
    }

    navigator.clipboard.writeText(value).then(handleSuccess, handleFailure)
  }, [])

  return [state, copyToClipboard]
}
