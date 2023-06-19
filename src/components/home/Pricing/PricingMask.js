import React from 'react'
import style from './index.module.css'
import clsx from 'clsx'

export const PricingMask = ({rect}) => {
  const { height } = rect
  return (
    <>
      <div className={style.pricingMask} style={{height: `${height}px`}}>
        <div className={clsx(style.pricingMaskLeft)}></div>
        <div className={clsx(style.pricingMaskRight)}></div>
        <div className={clsx(style.pricingMaskPhone)}></div>
      </div>
    </>
  )
}