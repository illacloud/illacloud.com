import React, { useState, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { monthlyContent, annuallyContent } from '@/constants/content'
import pricing_ from '@/img/home/pricing_.svg'
import doubt from '@/img/home/doubt.svg'


export const PricingContent = ({onChangeShow}) => {
  const { t } = useTranslation('pricing')
  const [activeBtn, setActiveBtn] = useState(0)
  const [currentTip, setCurrentTip] = useState('')

  const activeList = useMemo(() => {
    return !activeBtn ? monthlyContent : annuallyContent
  }, [activeBtn])

  const closeTip = (e) => {
    if(!currentTip || e.target?.nodeName === 'IMG') return
    setCurrentTip('')
  }

  return (
    <div className={style.pricingContent} onClick={closeTip}>
      <div className='w-full flex flex-row justify-start items-end'>
        <span className={style.pricingContentTitle}>{t('title')} </span>
        <span className={style.pricingContentTitleTag}>{t('sub-title')}</span>
      </div>
      <div className='font-[400] text-[14px] leading-[17px] xl:text-[16px] xl:leading-[19px] text-center'>{t('page-desc')}</div>
      <div className={style.contentContainer} >
        <span onClick={() => setActiveBtn(0)} className={clsx(style.pricingContentBtn, !activeBtn ? (style.pricingContentBtnActive) : '')}>{t('monthly')}</span>
        <span onClick={() => setActiveBtn(1)} className={clsx(style.pricingContentBtn, activeBtn ? (style.pricingContentBtnActive) : '')}>{t('yearly')}</span>
      </div>
      <div className={style.cardContainer}>
        {
          activeList.map(({ title, btnColor, titleColor, price, userMonth, startAt, href, btnContent, members, apps, security }, index) => (
            <div className={clsx(style.card, index === 1 ? style.lightCard : '')} key={title}>
              <span className={style.cardTitle} style={{ color: titleColor }}>{t(title)}</span>
              <div className='flex flex-col items-center gap-[16px]'>
                <span className='font-[700] text-[40px] leading-[48px]'>{t(price)}</span>
                <span className='h-[48px] font-[400] text-[14px] leading-[22px] flex flex-col items-center'>
                  <span>{t(userMonth)}</span>
                  {startAt && <span>{ t(startAt)}</span>}
                </span>
              </div>
              {href && (
                <a
                  className={style.cardBtn}
                  style={{ background: btnColor }}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >{t(btnContent)}</a>
              )}
              {!href && (
                <span
                  className={style.cardBtn}
                  style={{ background: btnColor }}
                  onClick={onChangeShow}
                >{t(btnContent)}</span>
              )}
              <div className='flex flex-col item-start w-[320px] h-[536px]'>
                <p className={style.cardListTitle}>{t('members')}</p>
                <p className={style.cardListContent}>
                  <img className='h-[16px] w-[16px]' src={pricing_} alt='pricing' />
                  <span>{t(members)}</span>
                </p>
                <p className={style.cardListTitle}>{t('app')}</p>
                {
                  apps.map(({ text, tip }) => {
                    return (
                      <p className={clsx(!text ? 'h-[32px]' : '', style.cardListContent)} key={`app${{text}}`}>
                        {text && <img className='h-[16px] w-[16px]' src={pricing_} alt='pricing' />}
                        <span>{t(text)}</span>
                        {tip && (
                          <>
                          <img onClick={() => {setCurrentTip(`${title}${tip}`)}} className={clsx('h-[16px] w-[16px]', style.doubt)} src={doubt} alt='pricing' />
                          <span className={clsx(style.tips, 'relative flex items-center', (currentTip === `${title}${tip}` ? 'block' : 'hidden'))}>
                            <img src={require('@/img/home/tip.svg').default} alt='tips'/>
                            <span>{t(tip)}</span>
                          </span>
                          </>
                        )}
                      </p>
                    )
                  })
                }
                <p className={style.cardListTitle}>{t('security-support')}</p>
                {
                  security.map(({ text, tip }) => {
                    return (
                      <p className={style.cardListContent} key={`security${text}`}>
                        {title && <img className='h-[16px] w-[16px]' src={pricing_} alt='pricing' />}
                        <span>{t(text)}</span>
                        {tip && (
                          <>
                          <img onClick={() => {setCurrentTip(`${title}${tip}`)}} className={clsx('h-[16px] w-[16px]', style.doubt)} src={doubt} alt='pricing' />
                          <span className={clsx(style.tips, 'relative flex items-center', (currentTip === `${title}${tip}` ? 'block' : 'hidden'))}>
                            <img  src={require('@/img/home/tip.svg').default} alt='tips'/>
                            <span >{t(tip)}</span>
                          </span>
                          </>
                        )}
                      </p>
                    )
                  })
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}