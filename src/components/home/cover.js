import { useEffect, useRef, useState, forwardRef } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import { PlayIcon } from '@/img/home/svg'
import { Player } from '@/components/home/player'
import * as ReactDOM from 'react-dom'
import {
  AppState,
  BUFFER_HEIGHT,
  COVER_HEIGHT,
  getBgSize,
  getCoverPosition,
  OFFSET,
  scale,
} from '@/components/home/utils'

export const Cover = forwardRef(({ changeButtonColor }, ref) => {
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
          overflowX: 'auto',
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,
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
              width: size,
              height: size,
              top: 0,
            }}
            className="bg-[#654aec]  flex-none relative z-20 rounded-full "
          />
        </div>
      </div>
    </>
  )
})
Cover.displayName = 'Cover'
