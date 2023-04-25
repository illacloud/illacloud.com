import React from 'react'
import { useTranslation } from 'next-i18next'
import backIcon from '@/img/landingPage/backIcon.svg';
import clsx from 'clsx'
import style from './index.module.css'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'

export const LpHeader = ({ content }) => {
  const { t } = useTranslation('landingPage')
  const { title, description, btnText, isShowBack, leftImage, isIntegration, name } = content
  return (
    <div className={style.lpHeader}>
      <div className={clsx(style.lpHeaderLeft, isShowBack ? 'w-full ' : 'xl:pt-[48px] xl:w-[570px] w-full ')}>
        {isShowBack && (
          <Link href= { `/landingPage/${isIntegration ? 'integrations': 'components'}`} legacyBehavior>
            <span className={style.back} onClick={() => {
               sendTagEvent({
                action: 'click',
                category: 'landing_page_back',
                label: isIntegration ? 'Back to integrations' : 'Back to components',
              })
            }}>
              <img src={backIcon} alt='backIcon' />
              <span>{isIntegration ? t('integrations.back'): t('components.back')}</span>
            </span>
          </Link>
        )}
        <span className={style.headerTitle}>{isShowBack ? title : t(title)}</span>
        <span className={style.headerDesc}>{isShowBack ? description: t(description)}</span>
        <Link legacyBehavior href="https://cloud.illacloud.com/">
          <a
            className={style.headerGo}
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: isShowBack ? 'landing_page_build_with' : 'landing_page_try_for_free',
                label: isShowBack ? 'Build with' : 'Try for free',
                value: name,
              })
            }}
          >
            {t(btnText)}
          </a>
        </Link>
      </div>
      {!isShowBack &&  <img src={leftImage} alt='' className='w-full xl:w-[550px]' />}
    </div>
  )
}
