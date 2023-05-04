import React from 'react'
import learnMoreIcon from '@/img/landingPage/learnMoreIcon.svg';
import style from './index.module.css'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const LearnMore = ({ href, btnText, onClick }) => {
  const { t } = useTranslation('landingPageDetails')

  return (
    <Link legacyBehavior href={href}>
      <a className={style.learnMore} onClick={onClick}>
        <span>{btnText || t('learn_more')}</span>
        <img src={learnMoreIcon} alt='' />
      </a>
    </Link>
  )
}
