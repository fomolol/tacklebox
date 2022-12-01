/**
 * @file useHoverImage.js
 * @see https://tympanus.net/codrops/2020/07/01/creating-a-menu-image-animation-on-hover/
 */
import { useEffect } from 'react'
import { useMotionTemplate, animate, useMotionValue } from 'framer-motion'

import { map, lerp, clamp } from '../misc/util'
import { useMousePosition } from './use-mouse-position'

/**
 * useHoverImage
 * @returns
 */
export const useHoverImage = (ref, reveal) => {
  const { x, y } = useMousePosition()

  const tx = useMotionValue(0)
  const txp = useMotionValue(0)
  const ty = useMotionValue(0)
  const typ = useMotionValue(0)
  const rotationVal = useMotionValue(0)
  const brightnessVal = useMotionValue(0)

  const transform = useMotionTemplate(
    `translate(${tx.get()}px, ${ty.get()}px) rotate(${rotationVal.get()}deg)`
  )
  const filter = `brightness(${brightnessVal.get()})`

  // Update the motion value based on the mouse movement
  useEffect(() => {
    // new translation values
    // the center of the image element is positioned where the mouse is
    const bounds = ref.current.getBoundingClientRect()
    const boundReveal = reveal.current.getBoundingClientRect()
    const _tx = Math.abs(x - bounds.left) - boundReveal.width / 2
    const _ty = Math.abs(y - bounds.top) - boundReveal.height / 2
    tx.set(_tx)
    ty.set(_ty)
  }, [x, y])

  useEffect(() => {
    function update() {
      // calculate the mouse distance (current vs previous cycle)
      const direction = {
        x: txp.get() - tx.get(),
        y: typ.get() - ty.get(),
      }

      // set up the interpolated values
      // for the first cycle, both the interpolated values need to be the same so there's no "lerped" animation between the previous and current state
      txp.set(lerp(txp.get(), tx.getPrevious(), 0.08))
      typ.set(lerp(typ.get(), ty.getPrevious(), 0.08))

      const mouseDistanceX = clamp(Math.abs(direction.x), 0, 100)

      // new rotation value
      const tRotation = map(
        mouseDistanceX,
        0,
        100,
        0,
        direction.x < 0 ? 33 : -33
      )
      animate(rotationVal, tRotation, {
        duration: 0.25,
        ease: 'linear',
      })

      // new filter value
      const tBrightness = map(mouseDistanceX, 0, 100, 1, 3)
      brightnessVal.set(tBrightness)
    }

    const unsubscribeX = tx.onChange(update)
    const unsubscribeY = ty.onChange(update)

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [])

  return {
    transform,
    filter,
  }
}

export default useHoverImage

/**
 * Integration Example
 */
/*
 import { useState, useRef, useEffect } from 'react';
 import {
   animate,
   motion,
   useMotionValue,
   AnimatePresence,
 } from 'framer-motion';
 
 const MenuImageHover = ({
   tagName: Tag = 'div',
   className = 'relative flex items-center justify-center',
   variant = 'default',
   children = '',
   src = '/img/pizza.gif',
   alt = 'lorem ipsum',
 }) => {
   const ref = useRef();
   const reveal = useRef();
   const [active, setActive] = useState(false);
 
   const opacity = useMotionValue(0);
   
   // returns all of the motion values for the container
   const { transform, filter } = useHoverImage(ref, reveal);
 
   useEffect(() => {
     if (active) {
       animate(opacity, 1, {
         duration: 1,
         ease: easeInOutCirc,
       });
     } else {
       animate(opacity, 0, {
         duration: 1,
         ease: easeInOutCirc,
       });
     }
   }, [active]);
 
   return (
     <Tag
       className={`${s.menu_image_hover} ${
         s[`menu_image_hover__${variant}`]
       } ${className}`}
       onMouseOver={() => setActive(true)}
       onMouseOut={() => setActive(false)}
       ref={reveal}
     >
       <motion.div
         className={`pointer-events-none absolute z-0 h-[calc(692px/1.5)] w-[calc(563px/1.5)] origin-center overflow-hidden`}
         style={{
           transform,
           filter,
           opacity,
         }}
       >
         <AnimatePresence>
           {active && (
             <HoverImageContainer>
               <HoverImage src={src} />
             </HoverImageContainer>
           )}
         </AnimatePresence>
       </motion.div>
       <p ref={ref} className="relative z-10">
         {children}
       </p>
     </Tag>
   );
 };
 */
