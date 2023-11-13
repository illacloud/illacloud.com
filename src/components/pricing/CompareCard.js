import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { monthlyContent, annuallyContent } from '@/constants/pricingContent'
import { CardList } from './CardList'
import Link from 'next/link'
import { SwitchPricing } from './SwitchPricing'
import increase from '@/img/pricing/increase.svg'
import { CONTACT_US_URL } from '@/constants/navContents'

const Tooltip = ({ content, styles, isBound }) => {
  const ref = useRef()
  const [currentVisibility, setCurrentVisibility] = useState('hidden')
  const iconWidth = 8,
    gap = 5,
    width = 200
  const { top, left, visibility } = styles
  const offsetHeight = ref.current?.offsetHeight
  const currentStyle = {
    top: isBound
      ? `${top + 24 + gap}px`
      : `${top - offsetHeight / 2 + iconWidth * 2 - gap}px`,
    left: isBound
      ? `${left - width / 1.5 + iconWidth}px`
      : `${left + iconWidth * 2 + gap * 2}px`,
  }
  // Get the size of the element for the first time but not display it, then update the position of the element and display it
  useEffect(() => {
    setCurrentVisibility(visibility ? 'visible' : 'hidden')
  }, [visibility])
  return (
    <div
      className={clsx(
        isBound ? style.bottomTip : style.rightTip,
        style.tooltip,
      )}
      ref={ref}
      style={{ visibility: currentVisibility, ...currentStyle }}
    >
      <p className={style.tipContent}>{content}</p>
    </div>
  )
}

export const CompareCard = () => {
  const { t } = useTranslation('pricing')
  const [activeBtn, setActiveBtn] = useState(false)
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
    const { left, top } = e.currentTarget.getBoundingClientRect()
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
    <div
      className={clsx(style.pricingContent, style.compareContainerStyle)}
      onTouchMove={resolveMobile}
    >
      <h1 className={style.compareTitle}>{t('compare.title')}</h1>
      <div className={style.compareContentContainerStyle}>
        <div className={style.buttonGroupContainer}>
          <span
            onClick={() => setActiveBtn(false)}
            className={clsx(
              style.pricingContentBtn,
              !activeBtn ? style.pricingContentBtnActive : '',
            )}
          >
            {t('monthly')}
          </span>
          <span
            onClick={() => setActiveBtn(true)}
            className={clsx(
              style.pricingContentBtn,
              activeBtn ? style.pricingContentBtnActive : '',
            )}
          >
            {t('yearly')}
          </span>
        </div>

        <div className={style.cardContainer}>
          {activeList.map(
            (
              {
                title,
                desc,
                editor,
                viewer,
                hasSwitch,
                earlyBird,
                titleColor,
                href,
                btnContent,
                list,
              },
              index,
            ) => (
              <div
                className={clsx(
                  style.card,
                  index === 1 ? style.lightCard : style.darkCard,
                )}
                key={`${title}${index}`}
              >
                <div
                  onClick={() => setActiveBtn(!activeBtn)}
                  className="cursor-pointer"
                >
                  <span
                    className={clsx(
                      style.cardTitle,
                      titleColor ?? 'text-white',
                    )}
                  >
                    {t(title)}
                    {earlyBird && (
                      <span className={style.priceExtra}>{t(earlyBird)}</span>
                    )}
                  </span>
                  <span className={style.cardDescContainer}>
                    {hasSwitch && <SwitchPricing state={activeBtn} />}
                    <span className={style.cardDesc}>{t(desc)}</span>
                  </span>
                </div>
                {
                  <div className="flex flex-row gap-[16px] items-center">
                    <div className={style.cardPriceContent}>
                      <span className={style.cardPrice}>
                        {t(editor.price)}
                        <span className={style.priceExtra}>
                          {t('cycle-month')}
                        </span>
                      </span>
                      <span className={style.priceExtra}>
                        {t(editor.content)}
                      </span>
                    </div>
                    {viewer && (
                      <>
                        <img src={increase} width="12" alt="" />
                        <div className={style.cardPriceContent}>
                          <span className={style.cardPrice}>
                            {t(viewer.price)}
                            <span className={style.priceExtra}>
                              {t('cycle-month')}
                            </span>
                          </span>
                          <span className={style.priceExtra}>
                            {t(viewer.content)}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                }
                {href && (
                  <Link href={href} key={title} legacyBehavior>
                    <span
                      className={clsx(
                        style.cardBtn,
                        titleColor ? `${style.lightCardBtn} ${titleColor}` : '',
                      )}
                    >
                      {t(btnContent)}
                    </span>
                  </Link>
                )}
                {!href && (
                  <Link href={CONTACT_US_URL}>
                    <span className={clsx(style.cardBtn)}>{t(btnContent)}</span>
                  </Link>
                )}
                <div className="flex flex-col item-start w-full">
                  {list.map(({ name, values }) => {
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
                  })}
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <Tooltip
        content={tipContent}
        styles={{ visibility, left, top }}
        isBound={isBound}
      />
    </div>
  )
}
