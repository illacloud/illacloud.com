import clsx from 'clsx'
import { CloseWhiteIcon } from './svg'
import { forwardRef } from 'react'

export const Player = forwardRef(({ menuExpand, closeMenu }, ref) => {
  return (
    <div
      className={clsx(
        'h-screen w-full flex-col  absolute left-0 px-[200px]  items-end justify-center z-50 font-bold text-[16px] bg-black/[0.64]',
        'overflow-y-hidden',
        menuExpand ? 'flex' : 'hidden'
      )}
    >
      <span
        className="w-[40px] h-[40px]"
        onClick={() => {
          closeMenu && closeMenu()
        }}
      >
        <CloseWhiteIcon />
      </span>
      <video className="w-full  bg-blue-100" controls autoPlay>
        <source src={require('./images/video.mp4').default} type="video/mp4" />
        <object data={require('./images/video.mp4').default} width="320" height="240">
          <embed width="320" height="240" src={require('./images/video.mp4').default} />
        </object>
      </video>
    </div>
  )
})
