import NextLink from 'next/link'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useClickAway } from 'react-use'

const options = [
  { label: '简体中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
]

export const LanguageSelect = () => {
  const [expandPanel, setExpandPanel] = useState(false)

  const ref = useRef(null)

  const router = useRouter()
  useClickAway(ref, () => {
    setExpandPanel(false)
  })

  return (
    <div
      ref={ref}
      className="flex flex-col bg-transparent items-center h-[48px] cursor-pointer  justify-between relative"
    >
      <div
        className="text-[16px] h-full w-full flex flex-row items-center justify-between px-[16px] text-white-01"
        onClick={() => {
          setExpandPanel(() => !expandPanel)
        }}
      >
        <span className="mr-[10px]">
          {router.locale === 'en-US' ? 'English' : '简体中文'}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.76 4.2a.75.75 0 0 0-1.06.04L6 7.148 3.3 4.24a.75.75 0 1 0-1.1 1.02l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 0 0-.04-1.06z"
            fill="#fff"
          />
        </svg>
      </div>
      <div
        className="bg-gray-02 text-[14px] absolute top-[48px] flex flex-col items-center justify-center w-[108px] text-white-01 rounded-[8px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)] transition-height overflow-y-hidden duration-200"
        style={{
          height: `${expandPanel ? 96 : 0}px `,
        }}
      >
        {options.map((option) => (
          <NextLink
            key={option.value}
            href={router.pathname}
            locale={option.value}
          >
            <div className="h-[40px] leading-[40px] text-center w-full hover:bg-white-09">
              {option.label}
            </div>
          </NextLink>
        ))}
      </div>
    </div>
  )
}
