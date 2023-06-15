import {useRef, useEffect } from 'react'
import lottie from 'lottie-web'

export const LottieItem = ({json}) => {
  const lottieRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    animationRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      animationData: json,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
    return () => {
      if(animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [json]);
  return (
    <div ref={lottieRef} className='h-full w-full'/>
  )
}