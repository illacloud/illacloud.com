import { useState, useEffect } from 'react'

export const usePlatform = () => {
  const [isInMobile, setIsInMobile] = useState(false)
  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : window.navigator.userAgent;
    const mobileRegex = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
    setIsInMobile(mobileRegex.test(userAgent))
  }, [])
  return isInMobile
}