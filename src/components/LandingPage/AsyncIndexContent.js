import { Fragment } from 'react';
import { useTranslation } from 'next-i18next'
import style from '@/components/LandingPage/index.module.css'
import { sendTagEvent } from '@/utils/gtag'
import { LearnMore } from '@/components/LandingPage/LearnMore';


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
  return contentList.sort((a, b) => a.sort - b.sort).map(({ logo, name, description }) => {
    return (
      <div className={style.item} key={name}>
        <img src={logo} alt={name} className='h-[24px] xl:h-[40px]' />
        <div className='flex flex-col items-start gap-[4px] xl:gap-[8px]'>
          <div className='xl:h-[26px] h-[20px] overflow-hidden'><span className={style.itemName}>{name}</span></div>
          <div className='h-[72px] overflow-hidden'><span className={style.itemDescription}>{description}</span></div>
          <LearnMore href={`/${pageName}/${name}`} onClick={() => onClick(name)} />
        </div>
      </div>
    )
  })
}


export const AsyncIndexContent = ({ content, pageName }) => {
  const { t } = useTranslation('landingPage')
  if (Object.keys(content).length <= 0) return null
  return (
    <div className='flex flex-col gap-[24px] pb-[60px] xl:pb-[100px]'>
      {Object.values(content).map(({ title, contentList }) => {
        return (
          <Fragment key={title}>
            <p className={style.contentTitle}>{t(title)}</p>
            <div className={style.itemsContainer}>
              {renderItems(contentList, pageName)}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
