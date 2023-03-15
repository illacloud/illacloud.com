import React from 'react'
import { useTranslation } from 'next-i18next'
import { ContentTitle } from './ContentTitle'
import { deploymentContent } from '@/constants/content'
import clsx from 'clsx'
import style from './index.module.css'

export const Deployment = () => {
  const { t } = useTranslation('home')
  const { items, desc, tittleList, colorationTitle, color } = deploymentContent
  return (
    <div className={style.deployment}>
      <div className="flex flex-col xl:gap-[16px] gap-[12px]">
        <ContentTitle
          tittleList={tittleList}
          colorationTitle={colorationTitle}
          color={color}
        />
        <div className={style.deploymentDesc}>{t(desc)}</div>
      </div>
      <div className="flex xl:flex-row flex-wrap justify-between">
        {items &&
          items.map(
            ({ icon, title, des, linkUrl, extraLinkContent }, index) => (
              <div
                key={title}
                className={clsx(
                  style.deploymentItem,
                  !index ? 'w-full' : 'xl:w-[388px] w-full',
                )}
              >
                <div className="flex flex-col xl:gap-[24px] gap-[12px]">
                  <span className="xl:w-[40px] w-[28px]">{icon}</span>
                  <span className={style.deploymentItemTitle}>
                    {t(title)}
                    {extraLinkContent}
                  </span>
                  <span className={style.deploymentItemDesc}>{t(des)}</span>
                </div>
                {linkUrl && <div className={style.deploymentLink}>→</div>}
              </div>
            ),
          )}
      </div>
    </div>
  )
}
