/**
 * @file useCursorStyle
 * Helper to quickly change the cursor style.
 */
import { useCallback } from 'react'

/**
 * See the CursorContext component in @fomolol/dope for more.
 *
 * You will need to pass the following from:
 * import { useCursor } from 'contexts/CursorContext/useCursorContext';
 * const [state, dispatch] = useCursor();
 *
 * @param {*} state
 * @param {*} dispatch
 * @returns
 */
export const useCursorStyle = (state, dispatch) => {
  const addCursorBorder = useCallback(() => {
    dispatch({ type: 'ADD_CURSOR_BORDER' })
  }, [dispatch])

  const removeCursorBorder = useCallback(() => {
    dispatch({ type: 'REMOVE_CURSOR_BORDER' })
  }, [dispatch])

  const addCursorColor = useCallback(
    (color) => {
      dispatch({ type: 'ADD_CURSOR_COLOR', payload: color })
    },
    [dispatch]
  )

  const resetCursorColor = useCallback(() => {
    dispatch({ type: 'RESET_CURSOR_COLOR' })
  }, [dispatch])

  const lockCursorPosition = useCallback(
    (coordinates) => {
      dispatch({ type: 'LOCK_CURSOR_POSITION', payload: coordinates })
    },
    [dispatch]
  )

  return {
    ...state,
    addCursorColor,
    resetCursorColor,
    addCursorBorder,
    removeCursorBorder,
    lockCursorPosition,
  }
}

export default useCursorStyle
