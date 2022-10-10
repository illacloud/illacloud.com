import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { useTranslation } from 'next-i18next'

const options = [
  {
    label: 'Github',
    value: 'https://github.com/orgs/illa-family/discussions',
  },
  {
    label: 'Twitter',
    value: 'https://twitter.com/illafamily',
  },
  {
    label: 'Discord',
    value: 'https://discord.gg/zKf3WKCufR',
  },
  {
    label: 'ProductHunt',
    value: 'https://www.producthunt.com/posts/illa',
  },
]

export const FlowUsSelect = ({ buttonColorChange }) => {
  const { t } = useTranslation('home')

  const [expandPanel, setExpandPanel] = useState(false)

  const ref = useRef(null)

  useClickAway(ref, () => {
    setExpandPanel(false)
  })

  return (
    <div
      ref={ref}
      className="flex flex-col relative  bg-transparent  items-center h-[48px] cursor-pointer  justify-between "
    >
      <div
        className="text-[16px] h-full w-full flex flex-row items-center justify-between px-[16px]"
        onClick={() => {
          setExpandPanel(() => !expandPanel)
        }}
      >
        <span className="mr-[8px]">{t('nav.community')}</span>
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
        className="bg-gray-02 text-[14px] transition-height duration-200 absolute top-[48px] flex flex-col items-center justify-center w-[121px] text-white-01 rounded-[8px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)] overflow-y-hidden"
        style={{
          height: `${expandPanel ? 192 : 0}px `,
        }}
      >
        {options.map((option) => (
          <a
            href={option.value}
            target="_blank"
            className="w-full"
            key={option.label}
          >
            <div
              className="h-[40px] leading-[40px] text-center w-full hover:bg-white-09"
              onClick={() => {
                setExpandPanel(() => !expandPanel)
              }}
            >
              {option.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
