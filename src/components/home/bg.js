import { useEffect, useRef, useState, forwardRef } from 'react'
import { Cover } from '@/components/home/cover'
import { useWindowScroll, useWindowSize } from 'react-use'

export const AppBackground = forwardRef(({ changeButtonColor }, ref) => {
  const svgRef = useRef()
  const [len, setLen] = useState()
  const { y } = useWindowScroll()
  const pathLen = useRef()
  const [innerHeight, setInnerHeight] = useState()
  const { height } = useWindowSize()

  useEffect(() => {
    if (window) {
      setInnerHeight(window.innerHeight)
    }
  }, [])

  useEffect(() => {
    setInnerHeight(height)
  }, [height])

  useEffect(() => {
    const next = pathLen.current - 6 * y
    if (next >= 0) {
      setLen(next)
    } else {
      setLen(0)
    }
  }, [y])

  useEffect(() => {
    if (svgRef.current) {
      const path = svgRef.current.getElementById('path')
      pathLen.current = path.getTotalLength()
      setLen(pathLen.current)
    }
  }, [svgRef.current])

  return (
    <div
      ref={ref}
      className={`w-full top-0 flex absolute flex-col  justify-center items-center hidden sm:block `}
    >
      <div className={'pointer-events-none z-30 relative top-0  w-full flex justify-center '}>
        <svg
          ref={svgRef}
          viewBox="0 0 1186 1746"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none meet"
          className="h-[calc(150vh+80px)]"
        >
          <path
            id="path"
            strokeDasharray="3957.00 3957.00"
            strokeDashoffset={len}
            d="M359.064 1C100.564 143 -71.4359 387.5 31.0642 467C133.564 546.5 627.564 577.5 704.064 324.5C779.699 74.3603 334.064 738 322 795.5C309.936 853 553.064 810 565.064 841.5C577.064 873 217.564 1090 250.564 1171C261.637 1198.18 365.264 1353.3 694.064 1450.5C1022.86 1547.7 1158.4 1687.33 1185.06 1745"
            stroke="#DADEE6"
          />
        </svg>
      </div>
      <Cover changeButtonColor={changeButtonColor} />
    </div>
  )
})
