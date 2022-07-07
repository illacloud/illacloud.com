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
    <div className="flex lg:h-[100vh] lg:overflow-y-hidden flex-col lg:flex-row items-start lg:items-center bg-black px-[40px] justify-center lg:gap-[46px] gap-0 pt-[40px] lg:pt-0 text-[28px]  lg:text-[48px] font-bold text-white  ">
      <div ref={ref} className={'w-auto  lg:w-[calc(100vw-696px)] xl:w-[520px]'}>
        {contentNode}
      </div>
      <div className="relative lg:h-[1110px]  flex flex-col  items-center w-[calc(100vw-80px)]  lg:w-[558px] ">
        <img
          style={{ objectFit: 'cover', backgroundColor: maskColor ?? 'rgba(255,255,255,0.12)' }}
          src={img}
          className="w-full h-[calc(100vw-80px)] rounded-[16px]  lg:rounded-none z-10 lg:w-full lg:h-[1110px] object-none mt-[20px] lg:mt-0"
          alt={'video'}
        />
        <div
          className={clsx(
            'hidden lg:flex h-[1110px] top-0 w-full  z-20  rounded-[40px]   absolute flex-col  justify-center '
          )}
        >
          <div style={{ height: bgTop }} className={clsx(' w-full  bg-black ')} />
          <div className={clsx('hidden lg:block h-[740px] w-full  ')}>
            <Mask />
          </div>
          <div className={clsx('grow w-full   bg-black   ')} />
        </div>
      </div>
    </div>
  )
}
