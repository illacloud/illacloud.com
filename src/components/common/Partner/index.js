import style from './index.module.css'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { sendTagEvent } from '@/utils/gtag'
import PartnerLine from './PartnerLine'
import { useViewportScroll, useTransform } from 'framer-motion'
import { Vector } from '@/img/public/vector'

const Partner = ({ onChangeShow }) => {
  const { t } = useTranslation('home')
  const { scrollYProgress } = useViewportScroll()
  const width = useTransform(scrollYProgress, [0.836, 0.865], [-75, 0])
  const content = t('partner-new.partnerList', {
    returnObjects: true,
  })
  if (Array.isArray(content)) {
    content.sort(({ sort: a }, { sort: b }) => a - b)
  }

  return (
    <div className="mt-[60px] xl:mt-[100px] w-full flex flex-col items-center gap-[40px] text-white-01 font-[700] text-center overflow-x-hidden">
      <h1 className="text-[24px] leading-[24px] xl:text-[40px] xl:leading-[48px] ">
        {t('partner-new.title')}
      </h1>
      {Array.isArray(content) && content.length > 0 && (
        <div className={style.partnerList}>
          {content.map(({ name, logo, link = '', tagCategory }) => (
            <Link key={name} href={link}>
              <div
                className={style.partnerItemContainer}
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: tagCategory,
                    value: link,
                  })
                }}
              >
                <div className={style.partnerItem}>
                  <div className="w-[32px] h-[32px] xl:w-[64px] xl:h-[64px]">
                    <img src={logo} alt={name} width="64" height="64" />
                  </div>
                  <span className="text-[12px] leading-[17px] xl:text-[28px] xl:leading-[34px] overflow-ellipsis line-clamp-1">
                    {name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="flex flex-col items-center gap-[4px] xl:gap-[8px] mt-[-10px]">
        <span
          className="flex flex-row items-center gap-[4px] xl:gap-[8px] font-[500] text-[12px] leading-[12px] xl:text-[16px] xl:leading-[24px] cursor-pointer"
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_partner_apply_click',
            })
            onChangeShow && onChangeShow()
          }}
        >
          <span>{t('becomePartner')}</span>
          <Vector />
        </span>
        <div className="hidden xl:block">
          <PartnerLine width={width} />
        </div>
        <div className="block xl:hidden">
          <PartnerLine />
        </div>
      </div>
    </div>
  )
}

export default Partner
