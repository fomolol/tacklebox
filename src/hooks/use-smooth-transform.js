/**
 * useSmoothTransform
 */
import { useSpring, useTransform } from 'framer-motion'

export const useSmoothTransform = (value, springOptions, transformer) => {
  return useSpring(useTransform(value, transformer), springOptions)
}

export default useSmoothTransform
