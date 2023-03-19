import React, { useState, useMemo, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { monthlyContent, annuallyContent } from '@/constants/content'
import pricing_ from '@/img/home/pricing_.svg'
import { CardList } from './CardList'



const Tooltip = ({ content, styles, isBound }) => {

  const ref = useRef()
  const iconWidth = 8, gap = 5, width = 200
  const { top, left, visibility } = styles
  const offsetHeight = ref.current?.offsetHeight
  const currentVisibility = visibility ? 'visible' : 'hidden'
  const currentStyle = {
    top: isBound ? `${top + 24 + gap}px` : `${top - offsetHeight / 2 + iconWidth * 2}px`,
    left: isBound ? `${left - width / 2 + iconWidth}px` : `${left + iconWidth * 2 + gap * 2}px`,
  }
  return (
    <div className={clsx(isBound ? style.bottomTip : style.rightTip, style.tooltip)} ref={ref} style={{ visibility: currentVisibility, ...currentStyle }}>
      <p className={style.tipContent}>{content}</p>
    </div>
  )
}

export const PricingContent = ({ onChangeShow }) => {
  const { t } = useTranslation('pricing')
  const [activeBtn, setActiveBtn] = useState(0)
  const [isBound, setIsBound] = useState(false)

  const activeList = useMemo(() => {
    return !activeBtn ? monthlyContent : annuallyContent
  }, [activeBtn])

  const [visibility, setVisibility] = useState(false)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [tipContent, setTipContent] = useState('')
  const onMouseLeave = () => {
    setVisibility(false)
  }

  const onMouseOver = (e, value, index) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setVisibility(true)
    setTop(top)
    setLeft(left)
    setTipContent(value)
    setIsBound(index === activeList.length - 1)
  }
  const resolveMobile = (e) => {
    if(!visibility) return
    e.target?.nodeName !== 'IMG' && onMouseLeave()
  }


  return (
    <div className={style.pricingContent} onTouchMove={resolveMobile}>
      <div className='w-full flex flex-row justify-center items-end'>
        <div className='relative'>
          <span className={style.pricingContentTitle}>{t('title')} </span>
          <span className={style.pricingContentTitleTag}>{t('sub-title')}</span>
        </div>
      </div>
      <div className='px-[24px] font-[400] text-[14px] leading-[17px] xl:text-[16px] xl:leading-[19px] text-center lg:w-[1040px] w-full'>{t('page-desc')}</div>
      <div className={style.contentContainer} >
        <span onClick={() => setActiveBtn(0)} className={clsx(style.pricingContentBtn, !activeBtn ? (style.pricingContentBtnActive) : '')}>{t('monthly')}</span>
        <span onClick={() => setActiveBtn(1)} className={clsx(style.pricingContentBtn, activeBtn ? (style.pricingContentBtnActive) : '')}>{t('yearly')}</span>
      </div>
      <div className={style.cardContainer}>
        {
          activeList.map(({ title, btnColor, titleColor, price, userMonth, startAt, href, btnContent, members, list, decimal }, index) => (
            <div className={clsx(style.card, index === 1 ? style.lightCard : '')} key={`${title}${index}`}>
              <span className={style.cardTitle} style={{ color: titleColor }}>
                {t(title)}
              </span>
              <div className='flex flex-col items-center gap-[16px]'>
                <span className='font-[700] text-[40px] leading-[48px]'>
                  {t(price)}
                  <span className='text-[24px] leading-[30px]'>{decimal}</span>
                </span>
                <span className='h-[48px] font-[400] text-[14px] leading-[22px] flex flex-col items-center'>
                  <span>{t(userMonth)}</span>
                  {startAt && <span>{t(startAt)}</span>}
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
                <p className={clsx(style.blockListContent, style.cardListContent)}>
                  <img className='h-[16px] w-[16px]' src={pricing_} alt='pricing' />
                  <span>{t(members)}</span>
                </p>
                {
                  list.map(({ name, values }) => {
                    return (
                      <CardList
                        key={name}
                        name={name}
                        index={index}
                        values={values}
                        mouseLeave={onMouseLeave}
                        mouseOver={onMouseOver}
                      />
                    )
                  })
                }
              </div>
            </div>
          ))
        }
      </div>
      <Tooltip content={tipContent} styles={{ visibility, left, top }} isBound={isBound} />
    </div>
  )
}