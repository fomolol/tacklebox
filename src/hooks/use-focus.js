/**
 * @file useFocus
 */
import { useState, useCallback } from 'react'
import { useLayoutEffect } from './use-isomorphic-layout-effect'

export const useFocus = (onFocus = () => {}, onBlur = () => {}) => {
  const [focused, setFocused] = useState(true)

  const onFocusHandler = useCallback(() => {
    onFocus()
    setFocused(true)
  }, [onFocus])

  const onBlurHandler = useCallback(() => {
    onBlur()
    setFocused(false)
  }, [onBlur])

  useLayoutEffect(() => {
    window.addEventListener('focus', onFocusHandler)
    window.addEventListener('blur', onBlurHandler)

    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener('focus', onFocusHandler)
      window.removeEventListener('blur', onBlurHandler)
    }
  }, [])

  return { focused }
}

export default useFocus
