import { useEffect, useRef, useState, forwardRef } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import { PlayIcon } from '@/img/home/svg'
import { Player } from '@/components/home/player'
import * as ReactDOM from 'react-dom'

const COVER_HEIGHT = 400
const BUFFER_HEIGHT = 160
const OFFSET = 50

export const Cover = forwardRef(({ changeButtonColor }, ref) => {
  const [size, setSize] = useState(COVER_HEIGHT)
  const scrollRef = useRef(null)
  const { y } = useWindowScroll()

  const [top, setTop] = useState()
  const [_width, setWidth] = useState(0)
  const [_height, setHeight] = useState(0)

  const bgRef = useRef(null)

  const { width, height } = useWindowSize()

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
  }, [])

  useEffect(() => {
    setWidth(width)
  }, [width])

  useEffect(() => {
    setHeight(height)
  }, [height])

  useEffect(() => {
    if (scrollRef.current.getBoundingClientRect().top > 0) {
      setTop(scrollRef.current.getBoundingClientRect().top)
    }
    changeButtonColor && changeButtonColor(bgRef.current?.getBoundingClientRect()?.top, size, top)
  }, [y, _height, _width])

  useEffect(() => {
    let _size = 0
    if (_width && _height && top) {
      _size =
        ((_height - COVER_HEIGHT / 2 + OFFSET - top) / _height) * (_width + 1000) * 2.5 +
        COVER_HEIGHT
      setSize(_size)
    }
  }, [top, _height, _width])

  const [playMaskShow, setPlayMaskShow] = useState(false)

  useEffect(() => {
    ReactDOM.createPortal(<Player />, document.body)
  }, [playMaskShow])

  return (
    <>
      <div
        style={{
          height: `${_height + BUFFER_HEIGHT}px`,
          position: 'absolute',
          top: `${(_height - BUFFER_HEIGHT) / 2 + OFFSET}px`,
          overflow: `${top && top < (_height - COVER_HEIGHT) / 2 ? 'hidden' : 'visible'}`,
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,
        }}
        className=" w-full flex justify-center items-center "
      >
        <div
          ref={bgRef}
          style={{ height: size - 2, width: size - 2 }}
          className="bg-[#654aec] z-20 flex justify-center  items-center rounded-[99999px] "
        >
          <span
            style={{ objectFit: 'cover' }}
            ref={scrollRef}
            className=" w-[400px] h-[400px]  bg-[#fdf1c0]  rounded-full  opacity-0"
          />
        </div>
      </div>
    </>
  )
})
