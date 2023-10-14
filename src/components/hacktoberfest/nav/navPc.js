import Link from 'next/link'
import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import { HeaderButton } from './headerButton'

export const NavPC = ({ tabsList, leftButtonGroup }) => {
  const { t } = useTranslation('hacktober')

  return (
    <div className={style.navContainer}>
      <div className={style.navLeft}>
        <Link href={'/'}>
          <a className="w-[51px] h-[24px] flex items-center">
            <IllaLogoWhiteIcon />
          </a>
        </Link>
        <div className={style.tabsList}>
          {tabsList.map(({ title, href = '' }) => (
            <Link key={href} href={href}>
              <span className={style.tabsItems}>{t(title)}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={style.navRight}>
        {leftButtonGroup.map((content) => (
          <HeaderButton key={content.href} content={content} />
        ))}
      </div>
    </div>
  )
}
