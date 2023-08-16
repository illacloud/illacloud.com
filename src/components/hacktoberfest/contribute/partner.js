import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import partnerBg from '@/img/hacktoberfest/partnerBg.svg'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'

export const Partner = ({ partner }) => {
  const { t } = useTranslation('hacktober')
  const partnerList = partner['partner-list']
  partnerList.sort((a, b) => parseInt(a.sort) - parseInt(b.sort))

  const onClick = (label) => {
    sendTagEvent({
      action: 'click',
      category: 'hacktober_build_partner_click',
      label
    })
  }

  return (
    <div className={style.partnerContainer}>
      <div className={style.partnerIcons}>
        {partnerList.map(({ logo, link = '' }) => (
          <Link href={link} key={logo} onClick={() => onClick(link)}>
            <div className={style.partnerIconContent}>
              <img src={partnerBg} className={style.partnerBg} alt="" />
              <img
                src={logo}
                alt=""
                className="w-full h-full relative z-[2] object-center object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <span className={clsx(style.partnerTitle, style.interFont)}>{t(partner.partner)}</span>
    </div>
  )
}
