import Link from 'next/link'
import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { useEffect, useRef } from 'react'
import clsx from 'clsx'

export const MobileNavItem = ({ href, isSelect, title, handleTabClick }) => {
  const { t } = useTranslation('hacktober')
  const ref = useRef(null)
  const onClick = () => {
    handleTabClick(href)
  }
  useEffect(() => {
    if (isSelect) {
      ref.current.scrollIntoView(true, { behavior: 'smooth' })
    }
  }, [isSelect])
  return (
    <Link href={href}>
      <span
        ref={ref}
        className={clsx(
          style.mobileTabsItems,
          isSelect ? style.activeTab : style.defaultTab,
        )}
        onClick={onClick}
      >
        {t(title)}
      </span>
    </Link>
  )
}
