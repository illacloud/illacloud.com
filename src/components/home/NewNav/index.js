import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import { MenuSelect } from '@/components/home/NewNav/menuSelect'
import { IllaLogo } from '@/img/public/illa-logo'
import { CloseIcon, MenuIcon, MenuWhiteIcon } from '@/img/home/svg'
import { useState } from 'react'
import { Menu } from '@/components/home/NewNav/mobileMenu'
import { sendTagEvent } from '@/utils/gtag'
import { selectItems, menuItems, CONTACT_US_URL } from '@/constants/navContents'
import { useUtmParams } from '@/hooks/useUtmParams'

export const Nav = (props) => {
  const { whiteTheme = false, customStyle } = props
  const { t } = useTranslation('home')

  const [menuExpand, setMenuExpand] = useState(false)
  const cloudUrl = useUtmParams('https://cloud.illacloud.com')

  return (
    <>
      <div
        className={clsx(
          'fixed hidden xl:flex top-0 z-50 w-full  px-[40px] py-[16px] flex items-center justify-between backdrop-blur-[50px] text-[16px] leading-[24px] font-[500]',
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
          <div
            className={clsx(
              'flex items-center w-full justify-center gap-[8px] rounded-[24px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.2)] ',
            )}
          >
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
        <div
          className={clsx(
            'flex items-center gap-[16px] rounded-[24px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.2)]',
          )}
        >
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
              <span
                className={clsx(
                  'h-[40px] border-0 rounded-[8px] backdrop-blur-[25px] px-[16px] py-[12px] cursor-pointer flex items-center justify-center',
                )}
              >
                {t('nav.contact')}
              </span>
            </Link>
            <Link legacyBehavior href={cloudUrl}>
              <a
                className={clsx(
                  'h-[40px] border-0 rounded-[8px] backdrop-blur-[25px] px-[16px] py-[12px] cursor-pointer flex items-center justify-center',
                )}
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
            <a
              className="h-[40px] bg-tech-purple-01 rounded-[8px] px-[24px] py-[12px] hover:bg-tech-purple-02 active:bg-tech-purple-n-01 cursor-pointer flex items-center justify-center text-white-01"
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
          </Link>
        </div>
      </div>

      {/* mobile */}
      <div className="justify-between  px-[20px] w-full h-[64px] flex items-center xl:hidden">
        <Link legacyBehavior href="/">
          <a className="flex items-center w-[42.5px] h-[20px]">
            {whiteTheme ? <IllaLogo /> : <IllaLogoWhiteIcon />}
          </a>
        </Link>
        <span
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_menu_unfold_mob_click',
              value: 'unfold',
            })
            setMenuExpand(() => !menuExpand)
          }}
        >
          {menuExpand ? (
            <CloseIcon />
          ) : whiteTheme ? (
            <MenuIcon />
          ) : (
            <MenuWhiteIcon />
          )}
        </span>
      </div>
      {/* mobile menu */}
      <Menu
        menuExpand={menuExpand}
        closeMenu={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_fold_mob_click',
            value: 'fold',
          })
          setMenuExpand(false)
        }}
      />
    </>
  )
}
