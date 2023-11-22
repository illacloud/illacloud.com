import { useCallback, useEffect, useRef } from 'react'

export const usePaintBg = (canvasRef, containerRef) => {
  const requestId = useRef(null)
  const init = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const interval = 56

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'

      for (let y = 0; y <= canvas.height; y += interval) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      for (let x = 0; x <= canvas.width; x += interval) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid()
    }
    requestId.current = animate()
  }, [canvasRef])

  useEffect(() => {
    const item = containerRef.current
    const observer = new ResizeObserver(() => {
      requestId.current && cancelAnimationFrame(requestId.current)
      init()
    })
    observer.observe(item)
    init()
    return () => {
      if (observer) {
        observer.unobserve(item)
      }
    }
  }, [containerRef, init])

  useEffect(() => {
    return () => {
      requestId.current && cancelAnimationFrame(requestId.current)
    }
  }, [])
}
