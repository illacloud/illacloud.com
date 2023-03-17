import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'


export const PricingContent = () => {
  const { t } = useTranslation('home')
  const [activeContent, setActiveContent] = useState(0)
  return (
    <div className={style.pricingContent}>
      <div className='flex flex-row justify-center items-end'>
        <span className={style.pricingContentTitle}>Pricing</span>
        <span className={style.pricingContentTitleTag}>Coming soon</span>
      </div>
      <div className='font-[400] text-[14px] leading-[17px] xl:text-[16px] xl:leading-[19px] text-center'>ILLA Cloud is going to release features for teams and SMEs with security, access control, and technical support. After release, we will implement the following pricing standards. You can compare the features and prices to find a plan that works for you.</div>
      <div className='flex flex-row gap-[2px] p-[1px]'>
        <span className={clsx(style.pricingContentBtn, !activeContent ? (style.pricingContentBtnActive) : '')}>Monthly</span>
        <span className={clsx(style.pricingContentBtn, activeContent ? (style.pricingContentBtnActive) : '')}>Annually</span>
      </div>
      <div className='h-[800px] w-[1px]'></div>
    </div>
  )
}
