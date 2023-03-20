import React, { useState, Fragment } from 'react'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import style from './index.module.css'
import arrow from '@/img/home/arrow.svg'
import { faqList } from '@/constants/content'

export const FAQ = ({ }) => {
  const { t } = useTranslation('pricing')
  const [showIndex, setShowIndex] = useState(-1)
  const listStyle = {
    start: 'transform rotate-0',
    end: 'transform -rotate-180',
    activeBg: 'bg-white/[0.08]'
  }
  const showDesc = (i) => {
    if (showIndex === i) {
      setShowIndex(-1)
    }
    else {
      setShowIndex(i)
    }
  }
  return (
    <div className={style.faqContainer}>
      <div className={style.faqTitle}>FAQ</div>
      <div className={style.faqListContainer}>
        {
          faqList.map(({ question, answer }, index) => (
            <Fragment key={question}>
              <div onClick={() => { showDesc(index) }} className={clsx(style.faqListQuestion, showIndex === index ? `${listStyle['activeBg']}` : ``)}>
                <span className='font-[500] text-[14px] leading-[22px] text-center lg:text-[16px]'>{t(question)}</span>
                <img src={arrow} alt='arrow' className={clsx(showIndex === index ? `${listStyle['end']}` : `${listStyle['start']}`, style.direction)} />
              </div>
              {showIndex === index && (
                <div className={style.faqListAnswer}>
                  <span dangerouslySetInnerHTML={{ __html: t(answer) }}></span>
                </div>

              )}
            </Fragment>
          ))
        }
      </div>
    </div>

  )
}
