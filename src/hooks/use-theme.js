/**
 * useTheme hook
 */
import { useCallback } from 'react'
import { useLayoutEffect } from './use-isomorphic-layout-effect'

export const useTheme = () => {
  const toggle = useCallback(() => {
    if (typeof window === 'undefined') return
    // if set via local storage previously
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      }
    }
  }, [])

  const getTheme = useCallback(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('theme') : null
  }, [])

  useLayoutEffect(() => {
    // if set via local storage previously
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
    }
  }, [toggle])

  return { toggle, getTheme }
}

export default useTheme
