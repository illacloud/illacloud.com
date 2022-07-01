import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Mask } from '@/img/home/svg'

export function ContentItem({ contentNode, img, maskColor }) {
  const ref = useRef(null)
  const [bgTop, setBgTop] = useState(336)

  useEffect(() => {
    if (ref.current.getBoundingClientRect().top < window.innerHeight) {
      const top =
        336 -
        ((window.innerHeight - ref.current.getBoundingClientRect().top) /
          (window.innerHeight + 266)) *
          336
      setBgTop(top)
    }
  }, [ref.current, ref?.current && ref.current.getBoundingClientRect().top])

  return (
    <div className="flex sm:h-[100vh] sm:overflow-y-hidden flex-col sm:flex-row items-center bg-black justify-center pt-[40px] sm:pt-0 text-[28px] sm:text-[48px] font-bold text-white px-[48px] sm:px-0">
      <div ref={ref}>{contentNode}</div>
      <div className=" relative sm:h-[1110px] flex flex-col   items-center sm:ml-[42px]  ">
        <img
          style={{ objectFit: 'cover' }}
          src={img}
          className="rounded-[40px]  w-[279px] h-[279px]  z-10 sm:w-[558px] sm:h-[1110px] object-none mt-[20px] sm:mt-0"
          alt={'video'}
        />
        <div
          className={clsx(
            'hidden sm:flex h-[1110px] top-0 w-full  z-20   rounded-[40px]   absolute flex-col  justify-center '
          )}
        >
          <div style={{ height: bgTop }} className={clsx(' w-full  bg-black ')} />
          <div className={clsx('hidden sm:block h-[740px] w-full bg-white/[0.12] border-1')}>
            <Mask />
          </div>
          <div className={clsx('grow w-full    bg-black   ')} />
        </div>
      </div>
    </div>
  )
}
