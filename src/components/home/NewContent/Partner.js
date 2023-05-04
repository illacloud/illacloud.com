import React from 'react'
import { useTranslation } from 'next-i18next'
import { ContentTitle } from './ContentTitle'
import { partnerContent } from '@/constants/content'
import { sendTagEvent } from '@/utils/gtag'
import clsx from 'clsx'
import style from './index.module.css'

export const Partner = ({ onChangeShow }) => {
  const { t } = useTranslation('home')
  const { partners, tittleList, color } = partnerContent
  return (
    <div
      className={clsx(
        'w-full xl:w-[1200px] xl:gap-[40px] overflow-hidden gap-[20px] text-white pt-[40px] xl:pt-[200px] my-0 mx-auto',
        style.colCenter,
      )}
    >
      <div>
        <ContentTitle
          tittleList={tittleList}
          color={color}
        />
      </div>
      <div className={style.partner}>
        {partners.map(({ logo, name, desc, tag, href, tagCategory }) => (
          <a
            href={href}
            key={name}
            className={clsx(style.partnerCard)}
            rel="noreferrer"
            target="_blank"
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: tagCategory,
                value: href,
              })
            }}
          >
            <span
              className={clsx(
                'lg:gap-[40px] gap-[16px] text-center',
                style.colCenter,
              )}
            >
              <img
                src={logo}
                alt={name}
                className="xl:w-[64px] xl:h-[64px] w-[32px] h-[32px]"
              />
              <span className="flex flex-col item-center xl:gap-[16px] gap-[8px]">
                <span className={clsx(style.partnerName)}>{name}</span>
                <div className='h-[75px] xl:h-[100px] overflow-hidden'><span className={clsx(style.partnerDesc)}>{t(desc)}</span></div>
              </span>
            </span>
            <span className={clsx(style.partnerTag, style.rowCenter)}>
              <span>{tag}</span>
            </span>
          </a>
        ))}
      </div>
      <div
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_partner_apply_click',
          })
          onChangeShow()
        }}
        className={clsx(style.rowCenter, style.becomePartner)}
      >
        <span>
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1327 3.01405L3.69001 8.14274C3.6273 8.16364 3.57443 8.20668 3.54 8.26324C3.50199 8.32622 3.49048 8.40169 3.508 8.47313C3.52551 8.54458 3.57062 8.60617 3.63345 8.64442L9.02405 11.9152C9.10521 11.9644 9.20603 11.9693 9.29088 11.9262L11.7304 10.7335L10.5389 13.1718C10.4971 13.2579 10.5008 13.3575 10.5512 13.4374L13.8257 18.8366C13.8601 18.8932 13.913 18.9362 13.9745 18.9559C14.1195 19.0051 14.2769 18.9264 14.3273 18.7801L19.4856 3.36694C19.5052 3.31038 19.504 3.24767 19.4868 3.19111C19.4364 3.04479 19.279 2.96609 19.1327 3.01405ZM13.806 16.3922L11.8964 13.2456L14.2806 8.37022C14.2991 8.3321 14.3003 8.28661 14.2806 8.24726C14.2462 8.1784 14.1638 8.15012 14.0937 8.18332L9.21956 10.5688L6.08529 8.66655L17.6793 4.81665L13.806 16.3922Z"
              fill="white"
            />
          </svg>
        </span>
        <span className="lg:leading-[24px] leading-[20px] font-[500px] text-[16px]">
          {t('becomePartner')}
        </span>
      </div>
    </div>
  )
}
