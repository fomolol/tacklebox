/**
 * @file useGiphy.js
 * Ensure you have a GIPHY_API_KEY environment variable in your .env file
 */
import { useState } from 'react'

export const useGiphy = (query = 'pokemon') => {
  const [gif, setGif] = useState(null)
  const [loading, setLoading] = useState(false)

  // Get an animated gif
  useEffect(() => {
    if (query && !gif && !loading) {
      try {
        setLoading(true)
        const giphy = require('giphy-api')(
          process.env.GIPHY_API_KEY || process.env.NEXT_PUBLIC_GIPHY_API_KEY
        )
        // Search with a plain string using callback
        giphy.search(query, (err, res) => {
          // Res contains gif data!
          if (res.meta.status === 200) {
            const randomGifIndex = Math.floor(
              Math.random() * (res.data.length - 1) + 1
            )
            const randomGif = res.data[randomGifIndex]
            //   console.log("randomGifIndex -> randomGif", randomGifIndex, randomGif);
            if (randomGif && randomGif.images) {
              console.log('randomGif', randomGif)
              const { images } = randomGif
              const { webp: url } = images?.fixed_width
              setGif({ data: randomGif, url })
              setLoading(false)
            }
          } else {
            setLoading(false)
            console.error(res.meta.msg, err)
          }
        })
      } catch (err) {
        setLoading(false)
        console.error('Error occurred initializing Giphy API', err)
      }
    }
  }, [gif, loading, query])

  return [loading, gif]
}

export default useGiphy
