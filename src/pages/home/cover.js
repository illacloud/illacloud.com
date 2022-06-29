import { useEffect, useRef, useState, forwardRef } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import { PlayIcon } from '@/pages/home/svg'
import { Player } from '@/pages/home/player'

const COVER_HEIGHT = 400
const BUFFER_HEIGHT = 160
const OFFSET = 50

export const Cover = forwardRef(({ changeButtonColor, openPlayer }, ref) => {
  const [size, setSize] = useState(COVER_HEIGHT)
  const scrollRef = useRef(null)
  const { y } = useWindowScroll()

  const [top, setTop] = useState()
  const [radius, setRadius] = useState(0)
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
    console.log('changeButtonColor  --- ', scrollRef.current.getBoundingClientRect().top)
  }, [y, _height, _width])

  useEffect(() => {
    let _size = 0
    if (_width && _height && top) {
      _size =
        ((_height - COVER_HEIGHT / 2 + OFFSET - top) / _height) * (_width + 1000) * 2.5 +
        COVER_HEIGHT
      setSize(_size)
    }
    if (top - (_height - COVER_HEIGHT) / 2 >= BUFFER_HEIGHT / 2) {
      setRadius(top - (_height - COVER_HEIGHT) / 2)
    }
    changeButtonColor && changeButtonColor(bgRef.current?.getBoundingClientRect()?.top, _size, top)
  }, [top, _height, _width])

  const [playMaskShow, setPlayMaskShow] = useState(false)

  useEffect(() => {
    document.body.style.overflow = playMaskShow ? 'hidden' : 'auto'
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
          style={{ height: size - 1, width: size - 1 }}
          className="bg-[#654aec] z-30 flex justify-center  items-center rounded-full "
          onClick={() => {
            console.log('playMaskShow')
          }}
        >
          <img
            style={{ objectFit: 'cover' }}
            ref={scrollRef}
            src={require('./images/video-placeholder.png').default}
            className={' w-[200px] sm:w-[400px] h-[200px] sm:h-[400px]  bg-[#fdf1c0]  rounded-full'}
            alt={'video'}
          />
          <span
            className="absolute bg-white rounded-full w-[120px] h-[120px] flex items-center justify-center"
            onClick={() => {
              setPlayMaskShow(true)
            }}
          >
            <PlayIcon />
          </span>
        </div>
      </div>
      <Player
        menuExpand={playMaskShow}
        closeMenu={() => setPlayMaskShow(false)}
        top={_height / 2}
      />
    </>
  )
})
