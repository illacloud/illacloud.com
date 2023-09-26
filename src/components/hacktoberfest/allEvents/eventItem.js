import style from './index.module.css'
import clsx from 'clsx'
import Link from 'next/link'

export const EventItem = ({ content, isTop }) => {
  const { avatar, logo, partner, company } = content
  return (
    <div
      className={clsx(
        style.baseItemContainer,
        isTop ? 'flex-col xl:flex-col' : 'flex-col xl:flex-col-reverse',
      )}
    >
      <Link href={content['partner-link'] || ''}>
        <img src={avatar} alt="" className={style.itemAvatar} />
      </Link>
      <span className={style.eventLogoStyle}>
        <img src={logo} alt="" width="20" />
      </span>

      <div className={style.itemInfo}>
        <span className={style.itemCompany}>{company}</span>
        <span className={style.itemPartner}>{partner}</span>
      </div>
    </div>
  )
}
