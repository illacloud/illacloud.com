import { SelectIcon } from '@/img/home/svg'
import { useState } from 'react'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'
import { useTranslation } from 'next-i18next'
import {getMobileCategory} from '@/utils/getMobileCategory'

export const MobileMenuSelect = ({ options, closeMenu }) => {
  const { t } = useTranslation('home')
  const ItemHeight = 40
  const [expend, setExpend] = useState(false)
    const {title, values, category} = options

  return (
    <>
      <span
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: getMobileCategory(category),
            label: t(title),
          })
          setExpend(() => !expend)
        }}
        className="w-full cursor-pointer flex flex-row flex-nowrap items-center h-[40px] gap-[8px]"
      >
        {t(title)} <SelectIcon />
      </span>
      <div
        style={{ height: expend ? values.length * ItemHeight : 0, overflowY: 'hidden' }}
        className="transition-height duration-200"
      >
        {values.map(({ href, title, category, target }) => (
          <Link legacyBehavior href={href.replace('/en-US', '')} key={title}>
            <a
              className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]  pl-[32px]"
              onClick={() => {
                closeMenu && closeMenu()
                sendTagEvent({
                  action: 'click',
                  category: getMobileCategory(category),
                  label: target || t(title),
                })
              }}
            >
              {t(title)}
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}