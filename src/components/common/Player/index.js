import clsx from 'clsx'
import { CloseWhiteIcon } from '@/img/home/svg'
import { forwardRef } from 'react'
import * as ReactDOM from 'react-dom'

const Player = forwardRef(({ menuExpand, closeMenu, link }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        'h-screen flex justify-center items-center w-full  absolute left-0 xl:px-[200px]   z-50 font-bold text-[16px] bg-black/[0.64]',
        'overflow-y-hidden',
        menuExpand ? 'flex' : 'hidden',
      )}
    >
      <div className="w-full h-full max-w-[1600px] flex flex-col items-center justify-center">
        <span
          className="w-[40px] h-[40px] self-end flex justify-end items-center"
          onClick={() => {
            closeMenu && closeMenu()
          }}
        >
          <CloseWhiteIcon />
        </span>
        <video className="w-full  bg-blue-100" controls autoPlay>
          <source src={link} type="video/webm" />
          <source src={link} type="video/mp4" />
          <object data={link} width="320" height="240">
            <embed width="320" height="240" src={link} />
          </object>
        </video>
      </div>
    </div>
  )
})

export const Modal = ({ isOpen, onClose, link }) => {
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full z-50">
      <Player menuExpand closeMenu={onClose} link={link} />
    </div>,
    document.body,
  )
}
