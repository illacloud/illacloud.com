import { Fragment } from 'react'
import { useTranslation } from 'next-i18next'
import style from '@/components/LandingPage/index.module.css'
import { sendTagEvent } from '@/utils/gtag'
import { LearnMore } from '@/components/LandingPage/LearnMore'
import clsx from 'clsx'

const ContentItems = ({ contentList, pageName }) => {
  const { t } = useTranslation('landingPageIndex')

  const onClick = (name) => {
    sendTagEvent({
      action: 'click',
      category: 'landing_page_learn_more',
      label: 'Learn more',
      value: name,
    })
  }
  if (!contentList) return null
  return contentList
    .sort((a, b) => a.sort - b.sort)
    .map(({ logo, name, description }) => {
      return (
        <div
          className={clsx(
            style.item,
            pageName === 'integrations' ? style.itemBg : '',
          )}
          key={name}
        >
          {pageName === 'integrations' && (
            <img src={logo} alt={name} className="h-[24px] xl:h-[40px]" />
          )}
          {pageName === 'components' && (
            <div className={style.itemImage}>
              <img src={logo} alt={name} className="w-full" />
            </div>
          )}
          <div className="flex flex-col items-start gap-[8px]">
            <h3 className="xl:h-[26px] h-[20px] overflow-hidden">
              <span
                className={clsx(
                  style.itemNameCommon,
                  pageName === 'integrations'
                    ? style.itemNameIntegrations
                    : style.itemNameComponents,
                )}
              >
                {name}
              </span>
            </h3>
            <div className="h-[72px] overflow-hidden">
              <span className={style.itemDescription}>{description}</span>
            </div>
            <LearnMore
              href={`/${pageName}/${name}`}
              onClick={() => onClick(name)}
              btnText={t('learn_more')}
            />
          </div>
        </div>
      )
    })
}

export const AsyncIndexContent = ({ content, pageName }) => {
  if (Object.keys(content).length <= 0) return null
  return (
    <div className="flex flex-col gap-[24px] pb-[60px] xl:pb-[100px]">
      {Object.values(content).map(({ title, contentList }) => {
        return (
          <Fragment key={title}>
            <h2 className={style.contentTitle}>{title}</h2>
            <div className={style.itemsContainer}>
              <ContentItems contentList={contentList} pageName={pageName} />
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
