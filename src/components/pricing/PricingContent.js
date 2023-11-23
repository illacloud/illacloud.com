import React from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import { BuilderCard } from './builderCard'
import { CollaCard } from './collaCard'

export const PricingContent = () => {
  const { t } = useTranslation('pricing')

  return (
    <div className={style.pricingContent}>
      <div className="w-full flex flex-col items-center justify-center gap-[8px]">
        <span className={style.pricingContentTitleExtra}>{t('sub-title')}</span>
        <span className={style.pricingContentTitle}>{t('title')} </span>
      </div>
      <div className="px-[24px] font-[400] text-[14px] leading-[17px] xl:text-[16px] xl:leading-[19px] text-center lg:w-[1040px] w-full">
        {t('page-desc')}
      </div>
      <div className={style.cardContainerStyle}>
        <BuilderCard />
        {/* <CollaCard /> */}
      </div>
    </div>
  )
}
