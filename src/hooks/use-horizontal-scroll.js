import { useEffect, useState } from 'react'
import { throttle } from 'throttle-debounce'

/**
 * checkIfInBoundaries
 * @param {*} width
 * @param {*} deltaY
 * @returns
 */
function checkIfInBoundaries(width, deltaY) {
  const maxWidth = width - window.innerWidth
  if (deltaY > maxWidth) return maxWidth
  if (0 > deltaY) return 0
  return deltaY
}

export function useHorizontalScroll(scrollableRef) {
  const [x, setX] = useState(0)
  useEffect(() => {
    let scrollWidth = scrollableRef?.current?.scrollWidth
    if (!scrollWidth) return
    function handleResize() {
      scrollWidth = scrollableRef?.current?.scrollWidth
      setX(0)
    }
    let touchStart
    function handleScroll({ deltaY }) {
      setX((x) => checkIfInBoundaries(scrollWidth, x + deltaY))
    }
    function setTouchStart({ touches }) {
      touchStart = touches[0].clientY
    }
    function handleSwipe({ touches }) {
      const delta = Math.round(touches[0].clientY - touchStart)
      setX((x) => checkIfInBoundaries(scrollWidth, x - delta))
    }
    function handleTouchEnd() {
      touchStart = 0
    }
    const move = throttle(handleSwipe, 16)
    document.addEventListener('wheel', handleScroll)
    document.addEventListener('touchmove', move)
    document.addEventListener('touchstart', setTouchStart)
    document.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('wheel', handleScroll)
      document.removeEventListener('touchmove', move)
      document.removeEventListener('touchstart', setTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('resize', handleResize)
    }
  }, [scrollableRef, setX])
  return x
}

export default useHorizontalScroll
