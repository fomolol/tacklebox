/**
 * @file usePopup.js
 * @see https://dev.to/dinkydani21/how-we-use-a-popup-for-google-and-outlook-oauth-oci
 * @see https://stackoverflow.com/questions/58732237/oauth-popup-cross-domain-security-react-js
 * Window popups are a pain in the arse in React, so this hook makes them easier to deal with.
 */
import { useCallback, useRef } from 'react'

/**
 * usePopup
 * @param {*} props
 * @returns
 */
export const usePopup = ({
  title = '',
  width = 500,
  height = 1050,
  url,
  storageKey = 'FOMOLOL_TEMP_DATA',
  onCreate = (url) => console.log('Created a window with url', url),
  onData = (data) => console.log('data', data),
  onClose = () => {
    return
  },
  onError = (err) => console.log('Popup error', error),
}) => {
  const externalWindow = useRef()
  const previousUrl = useRef()

  /**
   * storageListener
   * Watch for a change to the local storage
   */
  const storageListener = useCallback(() => {
    try {
      const data = localStorage.getItem(storageKey)
      if (data) {
        const parsed = JSON.parse(data)
        onData(parsed)
        window.localStorage.removeItem(storageKey) //remove data from localStorage
        externalWindow.current?.close()
        window.removeEventListener('storage', storageListener)
      }
    } catch (e) {
      onError(e)
      window.removeEventListener('storage', storageListener)
    }
  }, [onData, onError, storageKey, externalWindow])

  /**
   * createPopup
   * @param {*} props
   * @returns
   */
  const createPopup = useCallback(
    ({ url, title, height, width, onError, onData, onClose, storageKey }) => {
      //   Window props
      const left = window.screenX + (window.outerWidth - width) / 2
      const top = window.screenY + (window.outerHeight - height) / 2.5
      const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`

      if (externalWindow.current === null || externalWindow.current?.closed) {
        /* 
             if the pointer to the window object in memory does not exist
             or if such pointer exists but the window was closed 
         */
        externalWindow.current = window.open(url, title, windowFeatures)
      } else if (previousUrl.current !== url) {
        /* 
             if the resource to load is different,
             then we load it in the already opened secondary window and then
             we bring such window back on top/in front of its parent window. 
         */
        externalWindow.current = window.open(url, title, windowFeatures)
        externalWindow.current.focus()
      } else {
        /* 
             else the window reference must exist and the window
             is not closed; therefore, we can bring it back on top of any other
             window with the focus() method. There would be no need to re-create
             the window or to reload the referenced resource. 
         */
        externalWindow.current.focus()
      }

      window.addEventListener('storage', storageListener)

      window.addEventListener(
        'beforeunload',
        () => {
          onClose()
        },
        false
      )

      // add the listener for receiving a message from the popup
      //   window.addEventListener('message', event => receiveMessage(event), false);
      // assign the previous URL
      previousUrl.current = url

      onCreate(url)
    },
    [externalWindow, storageListener]
  )

  /**
   * onClick
   * A click event that you can apply to buttons.
   * This will start the process and pop the pop
   */
  const onClick = useCallback(() => {
    createPopup({
      url,
      title,
      width,
      height,
      onData,
      onClose,
      onError,
      storageKey,
    })
  }, [
    createPopup,
    url,
    title,
    width,
    height,
    onData,
    onClose,
    onError,
    storageKey,
  ])

  return {
    onClick,
  }
}

export default usePopup
