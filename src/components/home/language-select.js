import Link from 'next/link'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useClickAway } from 'react-use'
import { SelectIcon, SelectIconBlack } from '@/img/home/svg'
import clsx from 'clsx'
import { sendTagEvent } from '@/utils/gtag'
import { generateLanguageOptions } from '@/constants/language'
import { useTranslation } from 'next-i18next'


export const LanguageSelect = ({ buttonColorChange = true }) => {
  const [expandPanel, setExpandPanel] = useState(false)
  const { t } = useTranslation("common")

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
        className={clsx(
          'text-[16px] h-full w-full flex flex-row items-center gap-[8px]',
          {
            'text-white-01': buttonColorChange,
            'text-gray-01': !buttonColorChange,
          },
        )}
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_language_click',
            label: t(`language.${router.locale || "en-US"}`),
          })
          setExpandPanel(() => !expandPanel)
        }}
      >
        <span>
          {t(`language.${router.locale || "en-US"}`)}
        </span>
        {buttonColorChange ? <SelectIcon /> : <SelectIconBlack />}
      </div>
      <div
        className={clsx(
          'max-h-[180px] overflow-y-auto text-[14px] transition-height duration-200 absolute top-[48px] flex flex-col items-center  w-[121px] rounded-[8px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.16)]',
          {
            'bg-gray-02 text-white-01': buttonColorChange,
            'bg-white text-gray-01': !buttonColorChange,
          },
        )}
        style={{
          height: expandPanel ? 'auto' : 0,
        }}
      >
        {generateLanguageOptions(t).map((option) => (
          <Link
            legacyBehavior
            key={option.value}
            href={router.asPath}
            locale={option.value}
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
                  category: option.tagCategory,
                  label: option.label,
                })
              }}
            >
              {option.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
