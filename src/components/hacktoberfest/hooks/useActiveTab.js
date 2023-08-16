import { useEffect, useRef } from 'react'

export const useActiveTab = (id, callback) => {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(id)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [callback, id])
  return ref
}
