/**
 * @file useLatest
 */
import { useRef, useEffect } from 'react'

const useLatest = (current) => {
  const storedValue = useRef(current)
  useEffect(() => {
    storedValue.current = current
  })
  return storedValue
}

export default useLatest
