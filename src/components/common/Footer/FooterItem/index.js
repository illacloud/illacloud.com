import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useState } from 'react'
import { sendTagEvent } from '@/utils/gtag'
import style from '../index.module.css'
import clsx from 'clsx'

export const FooterItems = ({ items, whiteTheme }) => {
  const { t } = useTranslation('home')
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
    sendTagEvent({
      action: 'click',
      category: showMore
        ? 'homepage_footer_show_less'
        : 'homepage_footer_show_more',
    })
  }

  return (
    <>
      {items.slice(0, 6).map(({ label, href = '', tagCategory }) => (
        <Link key={label} href={href}>
          <span
            className={clsx(
              style.footerItem,
              whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
            )}
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: tagCategory,
                label: t(label),
                value: href,
              })
            }}
          >
            {t(label)}
          </span>
        </Link>
      ))}
      {showMore &&
        items.slice(6).map(({ label, href = '', tagCategory }) => (
          <Link key={label} href={href}>
            <span
              className={clsx(
                style.footerItem,
                whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
              )}
              onClick={() => {
                sendTagEvent({
                  action: 'click',
                  category: tagCategory,
                  label: t(label),
                  value: href,
                })
              }}
            >
              {t(label)}
            </span>
          </Link>
        ))}
      <span
        className={clsx(
          style.footerItem,
          'underline',
          whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
        )}
        onClick={handleShowMore}
      >
        {showMore ? t('footer.less') : t('footer.more')}
      </span>
    </>
  )
}
