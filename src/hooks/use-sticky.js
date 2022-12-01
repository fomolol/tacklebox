/**
 * @file useSticky
 * @see https://css-tricks.com/styling-based-on-scroll-position/
 *
 * @param {string} className
 */
export const useSticky = (
  className = 'header-not-at-top',
  anchorId = '#top-of-site-pixel-anchor'
) => {
  // The debounce function receives our function as a parameter
  const debounce = (fn) => {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) {
        cancelAnimationFrame(frame)
      }

      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        // Call our function and pass any params we received
        fn(...params)
      })
    }
  }

  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY
  }

  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true })

  // Update scroll position for first time
  storeScroll()

  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].boundingClientRect.y < 0) {
        document.body.classList.add(className)
      } else {
        document.body.classList.remove(className)
      }
    })
    observer.observe(document.querySelector(anchorId))
  }
}

export default useSticky
