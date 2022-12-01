/**
 * @file usePaperJS
 * Helper to initial PaperJS
 */
import { useState } from 'react'
import Paper from 'paper'
import { useLayoutEffect } from './use-isomorphic-layout-effect'

/**
 *
 * @param {object} ref is a reference to the PaperJS canvas
 * @returns
 */
export const usePaperJS = ({ ref }) => {
  const [project, setProject] = useState()

  useLayoutEffect(() => {
    if (!project && ref && ref.current) {
      //   const ctx = ref.current.getContext('2d');
      //   ctx.clearRect(0, 0, ref.current.width, ref.current.height);

      // Instantiate the paperScope with the canvas element
      // const _project = Paper.install(window);
      // const _project = Paper.setup(ref.current);
      const _project = new Paper.Project(ref.current)
      setProject(_project)
    }
  }, [project, ref])

  return project
}

export default usePaperJS
