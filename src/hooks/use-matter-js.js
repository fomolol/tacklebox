/**
 * @file useMatterJS.js
 * Hook to get started with MatterJS
 */
// import * as Matter from 'matter-js'
import { useMemo } from 'react'

// import MatterAttractors from 'matter-attractors';
// import MatterWrap from 'matter-wrap';

export const useMatterJS = ({
  ref,
  width,
  height,
  wireframes = false,
  hasBounds = true,
  background = 'transparent',
}) =>
  useMemo(() => {
    // Enable plugins
    // Matter.Plugin.register(MatterAttractors);
    Matter.use('matter-attractors')
    Matter.use('matter-wrap')

    // create an engine
    const engine = Matter.Engine.create()
    const { world, timing } = engine

    timing.timeScale = 1.5

    // create a renderer
    const render = Matter.Render.create({
      element: ref.current,
      engine: engine,
      options: {
        hasBounds,
        wireframes,
        width,
        height,
        background,
        // showDebug: true,
        // showWireframes: false,
        // showVelocity: true,
        // showCollisions: true,
        // showAxes: false,
        // showPositions: true,
        // showAngleIndicator: false,
        // showIds: true,
        // showShadows: false,
      },
    })

    const { canvas } = render

    // run the renderer
    Matter.Render.run(render)

    // create runner
    const runner = Matter.Runner.create()
    // run the engine
    Matter.Runner.run(runner, engine)

    // add mouse control
    const mouse = Matter.Mouse.create(canvas)

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    })

    Matter.World.add(world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse

    // fit the render viewport to the scene
    Matter.Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: width, y: height },
    })

    // By default, MouseConstraint captures scroll events, to prevent this behaviour use the following snippet:
    mouseConstraint.mouse.element.removeEventListener(
      'mousewheel',
      mouseConstraint.mouse.mousewheel
    )
    mouseConstraint.mouse.element.removeEventListener(
      'DOMMouseScroll',
      mouseConstraint.mouse.mousewheel
    )

    return {
      loaded: true,
      engine,
      render,
      runner,
      mouse,
    }
  }, [ref, background, wireframes, hasBounds, height, width])

export default useMatterJS
