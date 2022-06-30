import {useEffect, useRef, useState} from "react";
import clsx from "clsx";

const DEFAULT_TOP = 200

export function ContentItem({contentNode,img}) {
  const ref = useRef(null)
  const [bgTop, setBgTop] = useState(DEFAULT_TOP)


  useEffect(() => {
    console.log("ContentItem", ref.current.getBoundingClientRect().top, window.innerHeight, ref.current.getBoundingClientRect().height)
    if (ref.current.getBoundingClientRect().top < window.innerHeight) {
      const top = 336 - (window.innerHeight - ref.current.getBoundingClientRect().top) / (window.innerHeight + 266) * (2 * 336)
      console.log("ContentItem top", top, ((window.innerHeight - ref.current.getBoundingClientRect().top) / (window.innerHeight + 266)))
      setBgTop(top)
    }
  }, [ref.current, ref?.current && ref.current.getBoundingClientRect().top])


  return (
    <div
      className="flex sm:h-[100vh] sm:overflow-y-hidden flex-col sm:flex-row items-center bg-black justify-center text-[28px] sm:text-[48px] font-bold text-white px-[48px] sm:px-0">
      <div ref={ref}>
        {contentNode}
      </div>
      <div className='  relative h-[1110px] flex items-center sm:pl-[42px] '>
        <img
          style={{objectFit: 'cover'}}
          src={img}
          className="rounded-[40px]   w-[279px] h-[279px] z-10 sm:w-[558px] sm:h-[740px] object-none mt-[20px] sm:mt-0"
          alt={'video'}
        />
        <div
          style={{top: bgTop}}
          className={clsx('h-[1110px] w-[558px] rounded-[40px]  bg-white/[0.12] absolute ')}/>
      </div>
    </div>

  )
}
