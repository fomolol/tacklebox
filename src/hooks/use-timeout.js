/**
 * useTimeout
 */

// EXAMPLES
// const OneSecondTimer = (props) => {
//   const [seconds, setSeconds] = React.useState(0)
//   useTimeout(() => {
//     setSeconds(seconds + 1)
//   }, 1000)

//   return <p>{seconds}</p>
// }

import { useRef, useEffect } from 'react'

// delay is in seconds
export const useTimeout = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay * 1000)
      return () => clearTimeout(id)
    }
  }, [delay])
}

export default useTimeout
