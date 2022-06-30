import { useEffect, useRef, useState, forwardRef } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import { PlayIcon } from '@/img/home/svg'
import { Player } from '@/components/home/player'
import * as ReactDOM from 'react-dom'

const COVER_HEIGHT = 400
const BUFFER_HEIGHT = 160
const OFFSET = 50

const Modal = ({ isOpen, onClose }) => {
  let modalRoot
  if (typeof document != 'undefined') {
    modalRoot = document.getElementById('modal')
  }

  if (!isOpen || !modalRoot) return null
  return ReactDOM.createPortal(
    <div className="modal">
      <Player menuExpand closeMenu={onClose} />
    </div>,
    modalRoot
  )
}

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
    console.log('containerRef', containerRef.current.getBoundingClientRect().bottom)
  }, [y, _height, _width])

  useEffect(() => {
    let _size = 0
    console.log('top', top)
    if (_width && _height && top) {
      _size =
        ((_height - COVER_HEIGHT / 2 + OFFSET - top) / _height) * (_width + 1000) * 2.5 +
        COVER_HEIGHT
      setSize(_size)
    }
    changeButtonColor && changeButtonColor(bgRef.current?.getBoundingClientRect()?.top, _size, top)
  }, [top, _height, _width])

  const [playMaskShow, setPlayMaskShow] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    ReactDOM.createPortal(<Player />, document.body)
  }, [playMaskShow])

  return (
    <>
      <div
        ref={containerRef}
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
            src={require('../../img/home/video-placeholder.png').default}
            className={' w-[400px] h-[400px]  bg-[#fdf1c0]  rounded-full'}
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
        <Modal isOpen={playMaskShow} onClose={() => setPlayMaskShow(false)} />
      </div>
    </>
  )
})
