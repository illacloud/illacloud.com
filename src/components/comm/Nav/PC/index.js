import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import MenuSelect from '@/components/comm/Nav/Components/MenuSelect'
import { IllaLogo } from '@/img/public/illa-logo'
import { sendTagEvent } from '@/utils/gtag'
import { selectItems, menuItems, CONTACT_US_URL } from '@/constants/navContents'
import { useUtmParams } from '@/hooks/useUtmParams'
import style from './index.module.css'

const NavPC = (props) => {
  const { whiteTheme = false, customStyle } = props
  const { t } = useTranslation('home')

  const cloudUrl = useUtmParams('https://cloud.illacloud.com')

  return (
    <div
      className={clsx(
        style.navContainerStyle,
        'backdrop-blur-[50px]',
        whiteTheme
          ? 'bg-[rgba(255,255,255,0.75)] text-garyBlue-02'
          : 'bg-[rgba(0,0,0,0.75)] text-white-01',
      )}
      style={customStyle || {}}
    >
      {/* logo */}
      <div className="flex flex-row items-center p-0 gap-[24px]">
        <Link legacyBehavior href="/">
          <a className=" w-[51px] h-[24px] flex items-center">
            {whiteTheme ? <IllaLogo /> : <IllaLogoWhiteIcon />}
          </a>
        </Link>
        <div className={style.menuContainerStyle}>
          {selectItems.map((values, index) => (
            <MenuSelect
              buttonColorChange={!whiteTheme}
              options={values}
              key={index}
            />
          ))}
          {menuItems.map(({ href, category, title }) => (
            <Link legacyBehavior href={href} key={title}>
              <a
                className="px-[16px] text-center cursor-pointer"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category,
                    label: t(title),
                  })
                }}
                role="link"
              >
                {t(title)}
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* button */}
      <div className={style.navButtonContainerStyle}>
        <div className="flex flex-row items-center">
          <Link
            href={CONTACT_US_URL}
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: 'homepage_menu_contact_click',
                label: t('nav.contact'),
              })
            }}
          >
            <span className={style.navBaseButtonStyle}>{t('nav.contact')}</span>
          </Link>
          <Link legacyBehavior href={cloudUrl}>
            <a
              className={style.navBaseButtonStyle}
              onClick={() => {
                sendTagEvent({
                  action: 'click_signin',
                })
                sendTagEvent({
                  action: 'click',
                  category: 'homepage_menu_login_click',
                  label: t('nav.login'),
                })
              }}
            >
              {t('nav.login')}
            </a>
          </Link>
        </div>
        <Link legacyBehavior href={cloudUrl}>
          <span className={style.navSignUpButtonContainerStyle}>
            <a
              className={style.navSignUpButtonStyle}
              onClick={() => {
                sendTagEvent({
                  action: 'click_signup',
                })
                sendTagEvent({
                  action: 'click',
                  category: 'homepage_menu_signup_click',
                  label: t('nav.signup'),
                })
              }}
            >
              {t('nav.signup')}
            </a>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NavPC
