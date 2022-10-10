import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Mask } from '@/img/home/svg'
import { useViewportScroll } from 'framer-motion'

export function ContentItem({ contentNode, img, maskColor }) {
  const ref = useRef(null)
  const [bgTop, setBgTop] = useState(336)
  const { scrollYProgress } = useViewportScroll()

  useEffect(() => {
    return scrollYProgress.onRenderRequest(() => {
      if (ref.current.getBoundingClientRect().top < window.innerHeight) {
        const top =
          336 -
          ((window.innerHeight - ref.current.getBoundingClientRect().top) /
            (window.innerHeight + 266)) *
            336
        setBgTop(top)
      }
    })
  }, [scrollYProgress])

  return (
    <div className="flex xl:h-[100vh] xl:overflow-y-hidden flex-col xl:flex-row items-start xl:items-center bg-black px-[20px] justify-center xl:gap-[46px] gap-0 pt-[40px] xl:pt-0 text-[28px]  xl:text-[48px] font-bold text-white  ">
      <div ref={ref} className={'w-auto lg:w-[calc(100vw-696px)] xl:w-[520px]'}>
        {contentNode}
      </div>
      <div className="relative xl:h-[1110px]  flex flex-col  items-center w-[calc(100vw-80px)]  xl:w-[558px] ">
        <img
          style={{
            objectFit: 'cover',
            backgroundColor: maskColor ?? 'rgba(255,255,255,0.12)',
          }}
          src={img}
          className="w-full h-[calc(100vw-80px)] rounded-[16px]  xl:rounded-none z-10 xl:w-full xl:h-[1110px] object-none mt-[20px] xl:mt-0"
          alt={'video'}
        />
        <div
          className={clsx(
            'hidden xl:flex h-[1110px] top-0 w-full  z-20  rounded-[40px]   absolute flex-col  justify-center ',
          )}
        >
          <div
            style={{ height: bgTop }}
            className={clsx(' w-full  bg-black ')}
          />
          <div className={clsx('hidden xl:block h-[740px] w-full  ')}>
            <Mask />
          </div>
          <div className={clsx('grow w-full   bg-black   ')} />
        </div>
      </div>
    </div>
  )
}
