import React, { useState, Fragment } from 'react'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import style from './index.module.css'
import arrow from '@/img/home/arrow.svg'

const FAQ = ({ translationSpace = 'home' }) => {
  const { t } = useTranslation(translationSpace)
  const [showIndex, setShowIndex] = useState(-1)
  const content = t('faq.content', {
    returnObjects: true,
  })
  if (Array.isArray(content)) {
    content.sort(({ order: a }, { order: b }) => a - b)
  }
  const listStyle = {
    start: 'transform rotate-0',
    end: 'transform -rotate-180',
    activeBg: 'bg-white/[0.08]',
  }
  const showDesc = (i) => {
    if (showIndex === i) {
      setShowIndex(-1)
    } else {
      setShowIndex(i)
    }
  }
  return (
    <div className={style.faqContainer}>
      <div className={style.faqTitle}>{t('faq.title')}</div>
      <div className={style.faqListContainer}>
        {Array.isArray(content) &&
          content.length > 0 &&
          content.map(({ question, answer }, index) => (
            <Fragment key={question}>
              <div
                onClick={() => {
                  showDesc(index)
                }}
                className={clsx(
                  style.faqListQuestion,
                  showIndex === index ? `${listStyle['activeBg']}` : ``,
                )}
              >
                <span className="font-[500] text-[14px] leading-[22px] lg:text-[16px]">
                  {question}
                </span>
                <img
                  src={arrow}
                  alt="arrow"
                  className={clsx(
                    showIndex === index
                      ? `${listStyle['end']}`
                      : `${listStyle['start']}`,
                    style.direction,
                  )}
                />
              </div>
              {showIndex === index && (
                <div className={style.faqListAnswer}>
                  <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                </div>
              )}
            </Fragment>
          ))}
      </div>
    </div>
  )
}

export default FAQ
