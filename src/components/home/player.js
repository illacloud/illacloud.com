import clsx from 'clsx'
import { CloseWhiteIcon } from '../../img/home/svg'
import { forwardRef } from 'react'

export const Player = forwardRef(({ menuExpand, closeMenu }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        'h-screen w-full flex-col  absolute left-0 xl:px-[200px]  items-end justify-center z-50 font-bold text-[16px] bg-black/[0.64]',
        'overflow-y-hidden',
        menuExpand ? 'flex' : 'hidden',
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
      <video className="w-full bg-blue-100" controls autoPlay>
        <source
          src="https://cdn.illacloud.com/official-website/img/home/video.webm"
          type="video/webm"
        />
        <source
          src="https://cdn.illacloud.com/official-website/img/home/video.mp4"
          type="video/mp4"
        />
        <object
          data="https://cdn.illacloud.com/official-website/img/home/video.mp4"
          width="320"
          height="240"
        >
          <embed
            width="320"
            height="240"
            src="https://cdn.illacloud.com/official-website/img/home/video.mp4"
          />
        </object>
      </video>
    </div>
  )
})
