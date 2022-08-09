import { useEffect, useRef, useState, forwardRef } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import {
  AppState,
  BUFFER_HEIGHT,
  COVER_HEIGHT,
  getBgSize,
  getCoverPosition,
  OFFSET,
} from '@/components/home/utils'

export const Cover = () => {
  const [size, setSize] = useState(COVER_HEIGHT)
  const { y } = useWindowScroll()
  const bgRef = useRef(null)
  const { width, height } = useWindowSize()

  useEffect(() => {
    AppState.w = width
    AppState.h = height
    setSize(getBgSize(y))
  }, [width, height])

  useEffect(() => {
    if (getCoverPosition(y) > 0) {
      setSize(getBgSize(y))
    }
  }, [y])

  const coverHeight = AppState.h + BUFFER_HEIGHT
  const coverPosition = (AppState.h - BUFFER_HEIGHT) / 2 + OFFSET

  return (
    <>
      <div
        style={{
          height: coverHeight + coverPosition,
          position: 'absolute',
          top: 0,
          overflow: 'hidden',
          overflowX: 'hidden',
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,
          visibility: coverPosition > 0 ? 'unset' :'hidden'
        }}
        className=" w-full  flex justify-center items-end "
      >
        <div
          style={{
            height: coverHeight,
            position: 'relative',
            top: 0,
          }}
          className=" w-full flex justify-center items-center "
        >
          <div
            ref={bgRef}
            style={{
              width: size - 1,
              height: size - 1,
              top: 0,
            }}
            className="bg-[#654aec]  flex-none relative z-20 rounded-full "
          />
        </div>
      </div>
    </>
  )
}

Cover.displayName = 'Cover'
