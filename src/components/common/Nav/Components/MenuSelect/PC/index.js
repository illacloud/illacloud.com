import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { useTranslation } from 'next-i18next'
import { SelectIcon, SelectIconBlack } from '@/img/home/svg'
import clsx from 'clsx'
import { sendTagEvent } from '@/utils/gtag'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SelectItemHeight } from '@/constants/defaultVal'

const MenuSelectPC = ({ buttonColorChange = true, options }) => {
  const { t } = useTranslation('home')
  const [expandPanel, setExpandPanel] = useState(false)
  const router = useRouter()
  const { title, category, values } = options
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
          sendTagEvent({
            action: 'click',
            category,
            label: t(title),
          })
          setExpandPanel(() => !expandPanel)
        }}
      >
        <span className="mr-[8px]">{t(title)}</span>
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
          height: `${expandPanel ? SelectItemHeight * values.length : 0}px `,
        }}
      >
        {values.map((option) => (
          <Link
            href={`${router.locale === 'en-US' ? '' : `/${router.locale}`}${
              option.href
            }`}
            className="w-full"
            key={option.title}
            target={option.openNewPage ? '_blank' : '_self'}
            passHref
          >
            <div
              className={clsx(
                'h-[40px] leading-[40px] text-center w-full hover:bg-white-09',
                {
                  'hover:bg-white-09': buttonColorChange,
                  'hover:bg-garyBlue-09': !buttonColorChange,
                },
              )}
              onClick={() => {
                sendTagEvent({
                  action: 'click',
                  category: option.category,
                  label: t(option.title),
                  value: option.href,
                })
                setExpandPanel(() => !expandPanel)
              }}
              role="link"
            >
              {t(option.title)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MenuSelectPC
