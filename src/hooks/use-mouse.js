import { useReducer } from 'react'

import useEvent from './use-event'
import useThrottleCallback from './use-throttle-callback'

function useMouse(target, options = {}) {
  const { fps = 30, enterDelay = 0, leaveDelay = 0 } = options
  const [state, dispatch] = useReducer(
    (state, action) => {
      const { mouse, context } = state
      const handleDown = (state, action) => {
        if (typeof window === 'undefined') return state
        const { event: e, element } = action
        let event
        if ('touches' in e) {
          event = e.touches[0]
        } else {
          event = e
        }
        const {
          clientX,
          clientY,
          screenX,
          screenY,
          pageX = 0,
          pageY = 0,
        } = event
        const rect = element.getBoundingClientRect()
        const x = pageX - rect.left - (window.pageXOffset || window.scrollX)
        const y = pageY - rect.top - (window.pageYOffset || window.scrollY)
        // shims a mouseleave event for touch devices
        if (
          'touches' in e &&
          (x < 0 || y < 0 || x > rect.width || y > rect.height)
        ) {
          return Object.assign(Object.assign({}, state), {
            context: Object.assign(Object.assign({}, state.context), {
              hoverStatus: 'leave',
              touchStatus: 'end',
            }),
          })
        }
        return {
          context: Object.assign(Object.assign({}, state.context), {
            hoverStatus: 'enter',
          }),
          mouse: Object.assign(Object.assign({}, state.mouse), {
            x,
            y,
            pageX,
            pageY,
            clientX,
            clientY,
            screenX,
            screenY,
            elementWidth: rect.width,
            elementHeight: rect.height,
            isOver: true,
            isTouch: 'touches' in e,
          }),
        }
      }
      if (action.type === 'mousemove') {
        // Bails out if touch has ended
        if (context.touchStatus === 'end') return state
        return handleDown(state, action)
      } else if (action.type === 'touchmove') {
        const nextState = {
          context: Object.assign(Object.assign({}, context), {
            touchStatus: 'start',
          }),
          mouse,
        }
        return handleDown(nextState, action)
      } else if (action.type === 'touchdown') {
        const nextState = {
          context: Object.assign(Object.assign({}, context), {
            touchStatus: 'start',
          }),
          mouse: Object.assign(Object.assign({}, mouse), { isDown: true }),
        }
        return handleDown(nextState, action)
      } else if (action.type === 'mousedown') {
        return {
          context,
          mouse: Object.assign(Object.assign({}, mouse), { isDown: true }),
        }
      } else if (action.type === 'mouseup') {
        return {
          context,
          mouse: Object.assign(Object.assign({}, mouse), { isDown: false }),
        }
      } else if (action.type === 'mouseleave') {
        return {
          context: Object.assign(Object.assign({}, context), {
            hoverStatus: 'leave',
          }),
          mouse: Object.assign(Object.assign({}, mouse), { isOver: false }),
        }
      } else if (action.type === 'touchleave') {
        return {
          context: Object.assign(Object.assign({}, context), {
            hoverStatus: 'leave',
            touchStatus: 'end',
          }),
          mouse: Object.assign(Object.assign({}, mouse), {
            isOver: false,
            isDown: false,
          }),
        }
      } else if (action.type === 'activeStatus') {
        return {
          context: Object.assign(Object.assign({}, context), {
            activeStatus: action.value,
          }),
          mouse,
        }
      }
      return state
    },
    {
      mouse: initialState,
      context: initialContext,
    }
  )
  const onMove = useThrottleCallback(
    (event) => {
      const element = target && 'current' in target ? target.current : target
      if (!element) return
      dispatch({ type: 'mousemove', event, element })
    },
    fps,
    true
  )
  const onTouchMove = useThrottleCallback(
    (event) => {
      const element = target && 'current' in target ? target.current : target
      if (!element) return
      dispatch({ type: 'touchmove', event, element })
    },
    fps,
    true
  )
  const onLeave = useThrottleCallback(
    () => dispatch({ type: 'mouseleave' }),
    fps,
    // This has to be false because we always want this callback to fire after any
    // move events.
    false
  )
  const onDown = useThrottleCallback(
    (event) => {
      const element = target && 'current' in target ? target.current : target
      if (!element) return
      dispatch(
        'touches' in event
          ? {
              type: 'touchdown',
              element,
              event: event,
            }
          : {
              type: 'mousedown',
              element,
              event: event,
            }
      )
    },
    fps,
    true
  )
  const onUp = useThrottleCallback(
    () => dispatch({ type: 'mouseup' }),
    fps,
    // This has to be false because we always want this callback to fire after any
    // down events.
    false
  )
  const onTouchEnd = useThrottleCallback(
    () => dispatch({ type: 'touchleave' }),
    fps,
    // This has to be false because we always want this callback to fire after any
    // move events.
    false
  )
  useEvent(target, 'mouseenter', onMove)
  useEvent(target, 'mousemove', onMove)
  useEvent(target, 'mouseleave', onLeave)
  useEvent(target, 'mousedown', onDown)
  useEvent(typeof window !== 'undefined' ? window : null, 'mousedown', onDown)
  useEvent(typeof window !== 'undefined' ? window : null, 'mouseup', onUp)
  useEvent(target, 'touchstart', onDown)
  useEvent(target, 'touchmove', onTouchMove)
  useEvent(target, 'touchend', onTouchEnd)
  useEvent(target, 'touchcancel', onTouchEnd)
  useEffect(() => {
    if (state.context.hoverStatus === 'enter') {
      if (enterDelay) {
        const timeout = setTimeout(
          () => dispatch({ type: 'activeStatus', value: 'active' }),
          enterDelay
        )
        return () => clearTimeout(timeout)
      }
      dispatch({ type: 'activeStatus', value: 'active' })
    } else {
      if (leaveDelay) {
        const timeout = setTimeout(
          () => dispatch({ type: 'activeStatus', value: 'inactive' }),
          leaveDelay
        )
        return () => clearTimeout(timeout)
      }
      dispatch({ type: 'activeStatus', value: 'inactive' })
    }
  }, [state.context.hoverStatus, enterDelay, leaveDelay])
  return state.context.activeStatus === 'active' ? state.mouse : initialState
}
const initialState = {
  x: null,
  y: null,
  pageX: null,
  pageY: null,
  clientX: null,
  clientY: null,
  screenX: null,
  screenY: null,
  elementWidth: null,
  elementHeight: null,
  isOver: false,
  isDown: false,
  isTouch: false,
}
const initialContext = {
  hoverStatus: 'idle',
  touchStatus: 'idle',
  activeStatus: 'inactive',
}
export default useMouse
