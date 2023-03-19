import React from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'

export const PricingMask = () => {
  return (
    <>
      <div className={style.pricingMask}>
        <div className={clsx(style.pricingMaskLeft)}></div>
        <div className={clsx(style.pricingMaskRight)}></div>
        <div className={clsx(style.pricingMaskPhone)}></div>
      </div>
    </>
  )
}