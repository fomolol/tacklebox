/**
 * @file useThrottleCallback
 */
import { useRef, useEffect, useCallback } from 'react'

import useLatest from './use-latest'

const perf = typeof performance !== 'undefined' ? performance : Date
const now = () => perf.now()

export function useThrottleCallback(callback, fps = 30, leading = false) {
  const storedCallback = useLatest(callback)
  const ms = 1000 / fps
  const prev = useRef(0)
  const trailingTimeout = useRef()
  const clearTrailing = () =>
    trailingTimeout.current && clearTimeout(trailingTimeout.current)
  const deps = [fps, leading, storedCallback]
  // Reset any time the deps change
  useEffect(
    () => () => {
      prev.current = 0
      clearTrailing()
    },
    deps
  )
  return useCallback(function () {
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    const rightNow = now()
    const call = () => {
      prev.current = rightNow
      clearTrailing()
      storedCallback.current.apply(null, args)
    }
    const current = prev.current
    // leading
    if (leading && current === 0) return call()
    // body
    if (rightNow - current > ms) {
      if (current > 0) return call()
      prev.current = rightNow
    }
    // trailing
    clearTrailing()
    trailingTimeout.current = setTimeout(() => {
      call()
      prev.current = 0
    }, ms)
  }, deps)
}

export function useThrottle(initialState, fps, leading) {
  const state = useState(initialState)
  return [state[0], useThrottleCallback(state[1], fps, leading)]
}

export default useThrottle
