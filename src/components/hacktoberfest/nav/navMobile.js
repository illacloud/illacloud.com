import Link from 'next/link'
import style from './index.module.css'
import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import { MobileNavItem } from './mobileNavItem'

export const NavMobile = ({
  tabsList,
  leftButtonGroup,
  activeKey,
  setActiveKey,
}) => {
  const handleTabClick = (href) => {
    setActiveKey(href)
  }

  return (
    <div className={style.mobileNavContainer}>
      <div className={style.navTop}>
        <Link href={'/'}>
          <a className="w-[42px] h-[20px] flex items-center">
            <IllaLogoWhiteIcon />
          </a>
        </Link>
        <div className={style.buttonList}>
          {leftButtonGroup.map((content) => (
            <Link key={content.href}  href={content.href}>
              <span className={style.mobileIconContainer}>{content.icon}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={style.tabsContainer}>
        {tabsList.map(({ title, href = '' }) => (
          <MobileNavItem
            key={title}
            href={href}
            isSelect={activeKey === href}
            title={title}
            handleTabClick={handleTabClick}
          />
        ))}
      </div>
    </div>
  )
}
