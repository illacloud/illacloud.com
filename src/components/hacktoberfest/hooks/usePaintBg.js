import { useCallback, useEffect, useRef } from 'react'

export const usePaintBg = (canvasRef, containerRef) => {
  const requestId = useRef(null)
  const init = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const interval = 56
    const dropColor = 'rgba(255, 255, 255, 1)'
    let dropSpeed = 7
    let dropAcceleration = 0.002

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

    const drawDrop = (drop) => {
      const gradient = ctx.createLinearGradient(
        drop.x,
        drop.y,
        drop.x,
        drop.y + 40,
      )
      gradient.addColorStop(1, dropColor)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      ctx.strokeStyle = gradient
      ctx.beginPath()
      ctx.moveTo(drop.x, drop.y)
      ctx.lineTo(drop.x, drop.y + 80)
      ctx.stroke()
    }

    const drops = [
      { x: interval * 4, y: -20 },
      { x: interval * 8, y: -100 },
      { x: interval * 12, y: -70 },
      { x: interval * 16, y: -50 },
      { x: interval * 20, y: -110 },
      { x: interval * 24, y: -20 },
      { x: interval * 28, y: -100 },
      { x: interval * 32, y: -70 },
      { x: interval * 36, y: -50 },
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid()
      if (canvas.width > 390) {
        for (let i = 0; i < drops.length; i++) {
          const drop = drops[i]
          drawDrop(drop)

          drop.y += dropSpeed
          dropSpeed -= dropAcceleration
          if (dropSpeed <= 2) {
            dropSpeed = 2
          }
          if (drop.y > canvas.height) {
            drop.y = -20
            dropSpeed = 7
          }
        }
        requestId.current = requestAnimationFrame(animate)
      }
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
