import { useRef, useEffect, useCallback } from 'react'
import lottie from 'lottie-web'

const LottieItem = ({ json }) => {
  const lottieRef = useRef(null)
  const animationRef = useRef(null)
  const loadAnimation = useCallback(() => {
    animationRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      animationData: json,
      renderer: 'svg',
      loop: false,
      autoplay: true,
    })
  }, [json])

  useEffect(() => {
    let target = lottieRef.current
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadAnimation()
      } else {
        if (animationRef.current) {
          animationRef.current.destroy()
          animationRef.current = null
        }
      }
    })
    if (target) {
      observer.observe(target)
    }
    return () => {
      if (target) {
        observer.unobserve(target)
      }
      if (animationRef.current) {
        animationRef.current.destroy()
        animationRef.current = null
      }
    }
  }, [loadAnimation])

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
        animationRef.current = null
      }
    }
  }, [])
  return <div ref={lottieRef} className="h-full w-full" />
}

export default LottieItem
