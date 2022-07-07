import { useEffect, useRef, useState, forwardRef } from 'react'
import { Cover } from '@/components/home/cover'
import { useWindowScroll } from 'react-use'
import * as ReactDOM from 'react-dom'
import { Player } from '@/components/home/player'

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

export const AppBackground = forwardRef(({ changeButtonColor }, ref) => {
  const svgRef = useRef()
  const [len, setLen] = useState()
  const { y } = useWindowScroll()
  const pathLen = useRef()

  useEffect(() => {
    const path = svgRef.current?.getElementById('path')
    if (path && !pathLen.current) {
      pathLen.current = path?.getTotalLength() * 1.04
      setLen(pathLen.current)
    }
  }, [svgRef.current])

  useEffect(() => {
    const next = pathLen.current - 6 * y
    if (next >= 0) {
      setLen(next)
    } else {
      setLen(0)
    }
  }, [y])

  const [playMaskShow, setPlayMaskShow] = useState(false)

  useEffect(() => {
    ReactDOM.createPortal(<Player />, document.body)
  }, [playMaskShow])

  return (
    <div
      ref={ref}
      className={`w-full top-0 flex absolute flex-col  justify-center pointer-events-none items-center hidden sm:block `}
    >
      <div className={' z-30 relative top-0  w-full flex justify-center pointer  '}>
        <svg
          ref={svgRef}
          height="calc(150vh)"
          width={'100vw'}
          viewBox="0 0 1283 1336"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path"
            strokeDasharray="3957.00 3957.00"
            strokeDashoffset={len}
            d="M359.064 1C100.564 143 -71.4359 387.5 31.0642 467C133.564 546.5 627.564 577.5 704.064 324.5C779.699 74.3603 264.5 681.5 221.5 788.5C178.5 895.5 631.5 783.5 811 919C990.5 1054.5 996 1335 1084 1335C1172 1335 1153 1170 1282 859"
            stroke="#DADEE6"
          />
        </svg>
      </div>
      <Cover changeButtonColor={changeButtonColor} />
      <Modal isOpen={playMaskShow} onClose={() => setPlayMaskShow(false)} />
    </div>
  )
})
