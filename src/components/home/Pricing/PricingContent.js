import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { monthlyContent, annuallyContent } from '@/constants/content'
import { CardList } from './CardList'
import Link from 'next/link'


const Tooltip = ({ content, styles, isBound }) => {

  const ref = useRef()
  const [currentVisibility, setCurrentVisibility] = useState('hidden')
  const iconWidth = 8, gap = 5, width = 200
  const { top, left, visibility } = styles
  const offsetHeight = ref.current?.offsetHeight
  const currentStyle = {
    top: isBound ? `${top + 24 + gap}px` : `${top - offsetHeight / 2 + iconWidth * 2 - gap}px`,
    left: isBound ? `${left - width / 1.5 + iconWidth}px` : `${left + iconWidth * 2 + gap * 2}px`,
  }
  // Get the size of the element for the first time but not display it, then update the position of the element and display it
  useEffect(() => {
    setCurrentVisibility(visibility ? 'visible' : 'hidden')
  }, [visibility])
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
    if (!visibility) return
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
              <span className={clsx(style.cardTitle, titleColor)} >
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
                <Link href={href} key={title} legacyBehavior >
                  <span
                    className={clsx(style.cardBtn, btnColor)}
                  >{t(btnContent)}</span>
                </Link>
              )}
              {!href && (
                <span
                  className={clsx(style.cardBtn, btnColor)}
                  onClick={onChangeShow}
                >{t(btnContent)}</span>
              )}
              <div className='flex flex-col item-start w-[320px]'>
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
