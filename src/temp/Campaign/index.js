import React from 'react'
import style from './index.module.css'
import { sendTagEvent } from '@/utils/gtag'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const Campaign = () => {
  const { t } = useTranslation('home')
  const icon =
      'https://cdn.illacloud.com/official-website/img/home/hacktoberfeatIcon.svg',
    mobile =
      'https://cdn.illacloud.com/official-website/img/hacktoberFest/h10.svg'

  return (
    <Link href="/hacktoberfest2023">
      <div
        className={style.campaignContainer}
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_bottom_hacktober_click',
          })
        }}
      >
        <div className="flex flex-row items-center gap-[8px] xl:gap-[16px]">
          <img className="hidden xl:block h-[40px]" src={icon} alt="" />
          <img className="block xl:hidden h-[40px]" src={mobile} alt="" />
          <span>
            <span className="inline-block xl:hidden">
              {t('bottom.banner.title.mobile')}
            </span>
            <span className="hidden xl:inline-block">
              {t('bottom.banner.title.pc')}
            </span>
          </span>
        </div>
        <span>
          <span className="hidden xl:inline-block">
            {t('bottom.banner.button')}
          </span>
          <span role="img" aria-label="go">
            &nbsp;{t('bottom.banner.emoji')}
          </span>
        </span>
      </div>
    </Link>
  )
}

export default Campaign
