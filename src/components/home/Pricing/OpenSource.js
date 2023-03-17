import React from 'react'
import { useTranslation } from 'next-i18next'
import { openSourceContent } from '@/constants/content'
import clsx from 'clsx'
import style from '@/components/home/NewContent/index.module.css'
import styles from './index.module.css'
import Link from 'next/link'

export const OpenSource = () => {
  const { t } = useTranslation('pricing')
  const { items, desc, tittle } = openSourceContent
  return (
    <div className={clsx(style.deployment, styles.openSource)}>
      <div className="flex flex-col xl:gap-[16px] gap-[12px] my-0 mx-auto">
        <div className='font-[700] text-[24px] leading-[29px] xl:text-[48px] xl:leading-[56px] text-center'>{t(tittle)}</div>
        <div className={clsx(style.deploymentDesc, 'text-center lg:w-[800px] w-[335px]')}>{t(desc)}</div>
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
                    'cursor-pointer',
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
                  {showArrow && <div className={clsx(style.deploymentLink, 'cursor-pointer')}>→</div>}
                </div>
              </Link>
            ),
          )}
      </div>
    </div>
  )
}
