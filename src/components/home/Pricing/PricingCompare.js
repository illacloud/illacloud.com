import React from 'react'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import style from './index.module.css'
import { Compare } from '@/components/comm/compare'
import { compare } from '@/constants/pricingContent'

export const PricingCompare = () => {
  const { t } = useTranslation('pricing')
  return (
    <div className={clsx(style.pricingContent, style.compareContainerStyle)}>
      <h1 className={style.compareTitle}>{t('compare.title')}</h1>
      <Compare needReport={false} colNum={4} compare={compare} translationScope='pricing'/>
    </div>
  )
}