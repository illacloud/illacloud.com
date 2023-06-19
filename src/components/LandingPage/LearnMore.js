import React, { useRef, useCallback } from 'react'
import learnMoreIcon from '@/img/landingPage/learnMoreIcon.svg';
import style from './index.module.css'
import Link from 'next/link'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { sendTagEvent } from '@/utils/gtag'
import { useElementFirstShow } from '@/hooks/useElementFirstShow'

export const LearnMore = ({ href, btnText, onClick, translationName = 'landingPageDetails', customClass, showReport }) => {
  const { t } = useTranslation(translationName)
  const ref = useRef(null)
  const reportShow = useCallback(() => {
    if(showReport) {
      sendTagEvent({
        action: 'click',
        category: showReport,
      })
    }
  }, [showReport])
  useElementFirstShow(ref, reportShow)

  return (
    <Link legacyBehavior href={href}>
      <a ref={ref} className={clsx(style.learnMore, customClass)} onClick={onClick}>
        <span>{btnText || t('learn_more')}</span>
        <img src={learnMoreIcon} alt='' />
      </a>
    </Link>
  )
}
