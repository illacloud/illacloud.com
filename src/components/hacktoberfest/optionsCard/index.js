import React, { useState, useRef, useEffect } from 'react'
import style from './index.module.css'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const OptionsCard = ({ content, styles, visible, handleVisible }) => {
  const { t } = useTranslation('hacktober')
  const { googleLink, microsoftLink, officeLink, yahooLink } = content

  const ref = useRef()
  const [currentVisibility, setCurrentVisibility] = useState(false)

  const { top, left } = styles
  const OFFSET_HEIGHT = 24
  const OFFSET_WIDTH = 64
  const offsetHeight = ref.current?.offsetHeight
  const currentStyle = {
    top: `${top - offsetHeight - OFFSET_HEIGHT}px`,
    left: `${left - OFFSET_WIDTH}px`,
  }
  useEffect(() => {
    const onScroll = () => {
      visible && handleVisible(false)
    }
    document.addEventListener('scroll', onScroll)
    document.addEventListener('click', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onScroll)
    }
  }, [handleVisible, visible])
  useEffect(() => {
    setCurrentVisibility(visible)
  }, [visible])
  return (
    <div
      className={style.optionsCardContainer}
      ref={ref}
      style={{
        visibility: currentVisibility ? 'visible' : 'hidden',
        ...currentStyle,
      }}
    >
      <Link href={googleLink ?? ''}>
        <span className={style.optionsItemContainer}>
          <img
            className="w-[20px] xl:w-[16px]"
            src="https://cdn.illacloud.com/official-website/img/hacktoberFest/googleCalendar.svg"
            alt=""
          />
          <span>{t('event.google-calenar')}</span>
        </span>
      </Link>
      <Link href={microsoftLink ?? ''}>
        <span className={style.optionsItemContainer}>
          <img
            className="w-[20px] xl:w-[16px]"
            src="https://cdn.illacloud.com/official-website/img/hacktoberFest/microsoftCalendar.svg"
            alt=""
          />
          <span>{t('event.outlook')}</span>
        </span>
      </Link>
      <Link href={officeLink ?? ''}>
        <span className={style.optionsItemContainer}>
          <img
            className="w-[20px] xl:w-[16px]"
            src="https://cdn.illacloud.com/official-website/img/hacktoberFest/officeCalendar.svg"
            alt=""
          />
          <span>{t('event.office')}</span>
        </span>
      </Link>
      <Link href={yahooLink ?? ''}>
        <span className={style.optionsItemContainer}>
          <img
            className="w-[20px] xl:w-[16px]"
            src="https://cdn.illacloud.com/official-website/img/hacktoberFest/yahooCalendar.svg"
            alt=""
          />
          <span>{t('event.yahoo')}</span>
        </span>
      </Link>
    </div>
  )
}
