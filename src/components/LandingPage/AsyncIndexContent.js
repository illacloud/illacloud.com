import React from 'react'
import { useTranslation } from 'next-i18next'
import style from '@/components/LandingPage/index.module.css'
import { sendTagEvent } from '@/utils/gtag'
import {LearnMore} from '@/components/LandingPage/LearnMore';

import temp2 from '@/img/landingPage/tempContent2.svg';

const renderItems = (contentList, pageName) => {
  const onClick = (name) => {
    sendTagEvent({
      action: 'click',
      category: 'landing_page_learn_more',
      label: 'Learn more',
      value: name,
    })
  }
  if (!contentList) return null
  return contentList.map(({ logo, name, description }) => {
    return (
      <div className={style.item}>
        <img src={temp2} alt={name} className='h-[40px]' />
        <div className='flex flex-col items-start gap-[4px] xl:gap-[8px]'>
          <span className={style.itemName}>{name}</span>
          <div className='h-[72px] overflow-hidden'><span className={style.itemDescription}>{description}</span></div>
          <LearnMore href={`/landingPage/detail/${name}?pageName=${pageName}`} onClick={() => onClick(name)}/>
        </div>
      </div>
    )
  })
}


export const AsyncIndexContent = ({ content, pageName }) => {
  const { t } = useTranslation('landingPage')
  if (!content.length) return null
  return (
    <div className='flex flex-col gap-[24px] pb-[60px] xl:pb-[100px]'>
      {content.map(({ title, contentList }) => {
        return (
          <>
            <p className={style.contentTitle}>{t(title)}</p>
            <div className={style.itemsContainer}>
              {renderItems(contentList, pageName)}
            </div>
          </>
        )
      })}
    </div>
  )
}
