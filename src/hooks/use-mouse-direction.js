/**
 * useMouseDirection
 * Handles finding which quadrant of the screen the user is on.
 */
import { useMousePosition } from './use-mouse-position'
import { useWindowSize } from './use-window-size'

export const useMouseDirection = () => {
  const { width, height } = useWindowSize()
  const { x, y } = useMousePosition()

  const hasMovedCursor = typeof x === 'number' && typeof y === 'number'

  let se = x > width / 2 && y > height / 2
  let ne = x > width / 2 && y < height / 2
  let nw = x < width / 2 && y < height / 2
  let sw = x < width / 2 && y > height / 2
  return {
    direction: se ? 'se' : sw ? 'sw' : ne ? 'ne' : 'nw',
    hasMovedCursor,
  }
}

export default useMouseDirection
