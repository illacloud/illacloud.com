import {useRef, useEffect} from 'react'

export const useElementFirstShow = (el, callback) => {
  const firstShow = useRef(true)

  useEffect(() => {
    let target = el.current
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting && firstShow.current) {
        firstShow.current = false
        callback && callback()
        observer.unobserve(target)
      }
    })
    if(target) {
      observer.observe(target)
    }
    return () => {
      if(target) {
        observer.unobserve(target)
      }
      firstShow.current = true
    }
  }, [callback, el])
}