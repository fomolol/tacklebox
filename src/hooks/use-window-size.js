/**
 * @file useWindowSize
 */
import { useCallback, useState } from 'react'
import { useLayoutEffect } from './use-isomorphic-layout-effect'

// Usage
// function App() {
//   const size = useWindowSize();
//   return (
//     <div>
//       {size.width}px / {size.height}px
//     </div>
//   );
// }
// Hook
export const useWindowSize = () => {
  if (typeof window === 'undefined') return

  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState()

  // Handler to call on window resize
  const handleResize = useCallback(() => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useLayoutEffect(() => {
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

export default useWindowSize
