/**
 * @file useCustomConsole
 *
 * Hook to generate a custom console message in the developer console.
 *
 * Usage: This shows up when you right click and select inspect element.
 * @returns
 */
import { useLayoutEffect } from './use-isomorphic-layout-effect'

export const useCustomConsole = () => {
  useLayoutEffect(() => {
    var stopCss =
      'color:red; font-size:65px; font-weight:bold; -webkit-text-stroke: 1px black'
    var msgCss = 'font-size:15px;'

    console.log('%cFOMOLOL Police 🚨', stopCss)
    console.log(
      `%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and could give them access to your wallet.`,
      msgCss
    )
    console.log(
      '%cIf you need a job see https://jobs.fomolol.com for more info.',
      msgCss
    )
  }, [])

  return null
}

export default useCustomConsole
