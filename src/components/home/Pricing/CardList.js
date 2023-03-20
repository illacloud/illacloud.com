import React from 'react'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import style from './index.module.css'
import pricing_ from '@/img/home/pricing_.svg'
import doubt from '@/img/home/doubt.svg'

export const CardList = ({ name, values, mouseLeave, mouseOver, index }) => {
  const { t } = useTranslation('pricing')
  return (
    <>
      <p className={style.cardListTitle}>{t(name)}</p>
      {
        values.map(({ text, tip }, i) => {
          return (
            <p className={clsx(!text ? style.hiddenListContent : style.blockListContent, style.cardListContent)} key={`${text}${i}`}>
              {text && <img className='h-[16px] w-[16px]' src={pricing_} alt='pricing' />}
              <span>{t(text)}</span>
              {tip && (
                <span className={clsx('w-[16px] h-[16px] flex items-center', style.doubt)}  onMouseOver={(e) => {mouseOver(e, t(tip), index)}} onMouseLeave={mouseLeave}>
                  <img className='h-[16px] w-[16px]' src={doubt} alt='pricing' />
                </span>
              )}
            </p>
          )
        })
      }
    </>

  )
}
