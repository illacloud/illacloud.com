import Link from 'next/link'
import { useRef, useState } from 'react'
import { SelectIcon, SelectIconBlack } from '@/img/home/svg'
import { useClickAway } from 'react-use'
import { forwardRef } from 'react'

export const ProductSelect = forwardRef(({ buttonColorChange }) => {
  const options = [
    { label: 'ILLA Builder', value: '/' },
    { label: 'ILLA design', value: '/' },
  ]
  const [expandPanel, setExpandPanel] = useState(false)

  const ref = useRef(null)

  useClickAway(ref, () => {
    setExpandPanel(false)
  })

  return (
    <div className="flex flex-col px-[16px]  bg-transparent  items-center h-[48px] cursor-pointer  justify-between ">
      <div
        className="text-[16px] h-full w-full flex flex-row items-center justify-between px-[16px]"
        onClick={() => {
          setExpandPanel(() => !expandPanel)
        }}
      >
        <span className="mr-[8px]">products</span>
        {buttonColorChange ? <SelectIcon /> : <SelectIconBlack />}
      </div>
      <div
        ref={ref}
        className="bg-white top-[88px] flex flex-col items-center justify-center w-[121px] text-[#000000] rounded-[8px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)]"
        style={{
          height: `${expandPanel ? 96 : 0}px `,
          transition: 'height 200ms',
          position: 'absolute',
          overflowY: 'hidden',
        }}
      >
        {options.map((option) => (
          <Link key={option.value} href={option.value}>
            <div
              className="leading-[40px] text-center w-full hover:bg-[#f2f3f5]"
              onClick={() => {
                setExpandPanel(() => !expandPanel)
              }}
            >
              {option.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})
