import React from 'react'
import style from './index.module.css'
import { sendTagEvent } from '@/utils/gtag'
import { DefaultStars } from '@/constants/defaultVal'
import Link from 'next/link'
import github from '@/img/home3/github.svg'
import { useTranslation } from 'next-i18next'

const Publicize = ({ stars }) => {
  const { t } = useTranslation('home')

  return (
    <Link href="https://github.com/illacloud/illa-builder">
      <div
        className={style.publicize}
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_body_github_banner_click',
            label: 'github_banner',
          })
        }}
      >
        <span className={style.publicizeStyle} />
        <span className="flex flex-row justify-between items-center h-full gap-[16px] relative z-[1]">
          <span className="flex flex-row justify-between">
            <span className={style.publicIntru}>
              <img
                className="h-[24px] w-[24px]"
                src={github}
                alt="publicize logo"
              />
              <span>
                <span>{t('title.github')}</span>
                <span className="inline-block w-[45px] text-center">
                  {stars || DefaultStars}
                </span>
                <span>{t('title.stars')}</span>
              </span>
            </span>
          </span>
          <span className={style.publicSlogan} role="img" aria-label="star us">
            {t('title.star-us')} 👉
          </span>
        </span>
      </div>
    </Link>
  )
}

export default Publicize
