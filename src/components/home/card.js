import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

export function Card({ icon, title, des, index }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!show && ref.current.getBoundingClientRect().top + 72 <= window.innerHeight) {
      setTimeout(() => {
        setShow(true)
      }, index * 100)
    }
  }, [ref.current, ref?.current && ref.current.getBoundingClientRect().top])

  return (
    <a
      key={title}
      className={clsx(
        'ease-in-out w-full sm:w-1/2  origin-top-left scale-100  opacity-1 transition-all duration-[400ms]',
        show ? 'sm:opacity-1 sm:scale-100' : 'sm:opacity-0 sm:scale-95'
      )}
    >
      <div
        ref={ref}
        className=" bg-white/[0.12] w-full  sm:w-auto flex flex-col items-start justify-center p-[16px] sm:p-[32px] mt-[16px] mr-4 rounded-[16px]  sm:rounded-[32px]"
      >
        {icon}
        <div className="text-[16px] sm:text-[24px] mt-[12px] mb-[8px]">{title}</div>
        <div className="text-[12px] sm:text-[16px] font-normal h-[32px]">{des}</div>
      </div>
    </a>
  )
}
