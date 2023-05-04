import React from 'react'
import { useTranslation } from 'next-i18next'
import { ContentTitle } from './ContentTitle'
import { deploymentContent } from '@/constants/content'
import clsx from 'clsx'
import style from './index.module.css'
import Link from 'next/link'

export const Deployment = () => {
  const { t } = useTranslation('home')
  const { items, desc, tittleList,color } = deploymentContent
  return (
    <div className={style.deployment}>
      <div className="flex flex-col xl:gap-[16px] gap-[12px]">
        <ContentTitle
          tittleList={tittleList}
          color={color}
        />
        <div className={style.deploymentDesc}>{t(desc)}</div>
      </div>
      <div className="flex xl:flex-row flex-wrap justify-between gap-[12px] xl:gap-0 xl:gap-y-[16px] ">
        {items &&
          items.map(
            (
              { icon, title, des, linkUrl, extraLinkContent, showArrow },
              index,
            ) => (
              <Link href={linkUrl ?? ''} key={title} legacyBehavior>
                <div
                  key={title}
                  className={clsx(
                    style.deploymentItem,
                    !index ? 'w-full' : 'xl:w-[388px] w-full',
                    showArrow ? "items-center" : "items-start",
                  )}
                >
                  <div className="flex flex-col">
                    <span className="xl:w-[40px] w-[28px]">{icon}</span>
                    <span className={style.deploymentItemTitle}>
                      {t(title)}
                      {extraLinkContent}
                    </span>
                    <span className={style.deploymentItemDesc}>{t(des)}</span>
                  </div>
                  {showArrow && <div className={style.deploymentLink}>→</div>}
                </div>
              </Link>
            ),
          )}
      </div>
    </div>
  )
}
