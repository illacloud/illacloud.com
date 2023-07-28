import React from 'react'
import { useTranslation } from 'next-i18next'
import { openSourceContent } from '@/constants/pricingContent'
import clsx from 'clsx'
import styles from './index.module.css'
import Link from 'next/link'

export const OpenSource = () => {
  const { t } = useTranslation('pricing')
  const { items, desc, tittle } = openSourceContent
  return (
    <div className={styles.deployment}>
      <div className="flex flex-col xl:gap-[16px] gap-[12px] my-0 mx-auto ">
        <div className='font-[700] text-[24px] leading-[29px] xl:text-[48px] xl:leading-[56px] text-center'>{t(tittle)}</div>
        <div className={clsx(styles.deploymentDesc, 'text-center lg:w-[800px] w-[335px]')}>{t(desc)}</div>
      </div>
      <div className="w-full flex xl:flex-row flex-wrap justify-between gap-[12px] xl:gap-0 xl:gap-[16px] ">
        {items &&
          items.map(
            (
              { icon, title, des, linkUrl, extraLinkContent, showArrow },
              index,
            ) => (
              <Link href={linkUrl ?? ''} key={`${title}${index}`}legacyBehavior>
                <div
                  className={clsx(
                    styles.deploymentItem,
                    !index ? 'w-full' : 'xl:w-1/2 xl:flex-1 w-full ',
                    showArrow ? "items-center" : "items-start",
                  )}
                >
                  <div className="flex flex-col">
                    <span className="xl:w-[40px] w-[28px]">{icon}</span>
                    <span className={styles.deploymentItemTitle}>
                      {t(title)}
                      {extraLinkContent}
                    </span>
                    <span className={styles.deploymentItemDesc}>{t(des)}</span>
                  </div>
                  {showArrow && <div className={clsx(styles.deploymentLink)}>→</div>}
                </div>
              </Link>
            ),
          )}
      </div>
    </div>
  )
}
