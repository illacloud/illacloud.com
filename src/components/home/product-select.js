import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { useTranslation } from 'next-i18next'
import { SelectIcon, SelectIconBlack } from '@/img/home/svg'
import clsx from 'clsx'

export const ProductSelect = ({ buttonColorChange = true }) => {
  const { t } = useTranslation('home')
  const options = [
    {
      label: 'ILLA Builder',
      value: 'https://github.com/illa-family/illa-builder',
    },
    {
      label: 'ILLA Design',
      value: 'https://github.com/illa-family/illa-design',
    },
  ]
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
        <span className="mr-[8px]">{t('nav.product')}</span>
        {buttonColorChange ? <SelectIcon /> : <SelectIconBlack />}
      </div>
      <div
        className={clsx(
          'text-[14px] transition-height duration-200 absolute top-[48px] flex flex-col items-center justify-center w-[121px] rounded-[8px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)] overflow-y-hidden',
          {
            'bg-gray-02 text-white-01': buttonColorChange,
            'bg-white text-gray-01': !buttonColorChange,
          },
        )}
        style={{
          height: `${expandPanel ? 96 : 0}px `,
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
              className={clsx(
                'h-[40px] leading-[40px] text-center w-full hover:bg-white-09',
                {
                  'hover:bg-white-09': buttonColorChange,
                  'hover:bg-[#f2f3f5]': !buttonColorChange,
                },
              )}
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
