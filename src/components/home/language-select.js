import NextLink from 'next/link'
import { useRef, useState } from 'react'
import { SelectIcon, SelectIconBlack } from '@/img/home/svg'
import { useRouter } from 'next/router'
import { useClickAway } from 'react-use'
import clsx from 'clsx'

export const LanguageSelect = ({ buttonColorChange }) => {
  const options = [
    { label: '简体中文', value: 'zh-CN' },
    { label: 'English', value: 'en-US' },
  ]
  const [expandPanel, setExpandPanel] = useState(false)

  const ref = useRef(null)

  const router = useRouter()
  useClickAway(ref, () => {
    setExpandPanel(false)
  })

  return (
    <div
      ref={ref}
      className="flex flex-col bg-transparent items-center h-[48px] cursor-pointer  justify-between "
    >
      <div
        className={clsx(
          'text-[16px] h-full w-full flex flex-row items-center justify-between px-[16px]',
          buttonColorChange ? 'text-[#ffffff]' : 'text-[#1d2129]'
        )}
        onClick={() => {
          setExpandPanel(() => !expandPanel)
        }}
      >
        <span className="mr-[10px]">{router.locale === 'en-US' ? 'English' : '简体中文'}</span>
        {buttonColorChange ? <SelectIcon /> : <SelectIconBlack />}
      </div>
      <div
        className="bg-white text-[14px] top-[88px] flex flex-col items-center justify-center w-[108px] text-[#000000] rounded-[8px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)]"
        style={{
          height: `${expandPanel ? 96 : 0}px `,
          transition: 'height 200ms',
          position: 'absolute',
          overflowY: 'hidden',
        }}
      >
        {options.map((option) => (
          <NextLink key={option.value} href={router.pathname} locale={option.value}>
            <div className="leading-[40px] text-center w-full hover:bg-[#f2f3f5]">
              {option.label}
            </div>
          </NextLink>
        ))}
      </div>
    </div>
  )
}
