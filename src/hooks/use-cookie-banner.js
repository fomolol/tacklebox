/**
 * @file useCookieBanner
 *
 * Handles the dependency code related to accepting a cookie banner notification prompt
 *
 * NOTE: You need to add a process.env.NEXT_PUBLIC_COOKIE_ACCEPT_KEY to your env vars
 */
import { useState } from 'react'
import { useLayoutEffect } from './use-isomorphic-layout-effect'

export const useCookieBanner = ({ cookieAcceptKey }) => {
  const [cookieAccepted, setCookieAccepted] = useState()

  useLayoutEffect(() => {
    // Check to see if cookies were accepted
    const acceptedCookies = window.localStorage.getItem(
      process.env.NEXT_PUBLIC_COOKIE_ACCEPT_KEY || cookieAcceptKey
    )
    if (acceptedCookies !== null) {
      // NOTE: We need to actually store this information somewhere.
      setCookieAccepted(true)
    } else {
      setCookieAccepted(false)
    }
  }, [])

  return cookieAccepted
}

export default useCookieBanner
