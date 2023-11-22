import clsx from 'clsx'
import { CloseWhiteIcon, SelectIcon } from '@/img/home/svg'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import { sendTagEvent } from '@/utils/gtag'
import { generateLanguageOptions } from '@/constants/language'
import { selectItems, menuItems, CONTACT_US_URL } from '@/constants/navContents'
import MenuSelect from '@/components/comm/Nav/Components/MenuSelect'

const Menu = ({ menuExpand, closeMenu, onChangeShow }) => {
  const [languageListExpand, setLanguageListExpand] = useState(false)
  const { t } = useTranslation('home')
  const { t: publicT } = useTranslation('common')
  const router = useRouter()

  useEffect(() => {
    if (menuExpand) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [menuExpand])

  return (
    <div
      className={clsx(
        'h-screen w-full bg-gray-01 absolute top-0 left-0 px-[20px] z-[55] font-medium text-[16px] text-white-01',
        'overflow-x-hidden',
        menuExpand ? 'block' : 'hidden',
      )}
    >
      <div className="justify-between  w-full h-[64px] flex items-center mb-[40px]">
        <Link legacyBehavior href="/" passHref>
          <a className="flex items-center w-[42.5px] h-[20px]">
            <IllaLogoWhiteIcon />
          </a>
        </Link>
        <span
          onClick={() => {
            closeMenu && closeMenu()
          }}
        >
          <CloseWhiteIcon />
        </span>
      </div>
      {selectItems.map((options, index) => (
        <MenuSelect options={options} key={index} />
      ))}
      {menuItems.map(({ href, category, title }) => (
        <Link legacyBehavior href={href} key={title}>
          <a
            className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]"
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category,
                label: t(title),
              })
            }}
          >
            {t(title)}
          </a>
        </Link>
      ))}
      <Link
        href={CONTACT_US_URL}
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_contact_click',
            label: t('nav.contact'),
          })
          closeMenu && closeMenu()
          onChangeShow()
        }}
        className="w-full cursor-pointer flex flex-row flex-nowrap items-center h-[40px] gap-[8px]"
      >
        <span>{t('nav.contact')}</span>
      </Link>

      <span
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_language_mob_click',
            label: publicT(`language.${router.locale || 'en-US'}`),
          })
          setLanguageListExpand(() => !languageListExpand)
        }}
        className="w-full flex flex-row cursor-pointer flex-nowrap items-center h-[40px] gap-[8px]  "
      >
        {publicT(`language.${router.locale || 'en-US'}`)} <SelectIcon />
      </span>
      <div className="max-h-[180px] overflow-y-auto">
        {generateLanguageOptions(publicT).map(
          ({ value, label, tagCategory }) => (
            <Link
              legacyBehavior
              href={router.asPath}
              locale={value}
              key={value}
            >
              <a
                style={{
                  height: languageListExpand ? 40 : 0,
                  overflowY: 'hidden',
                }}
                className={clsx(
                  'transition-height duration-200 w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]  pl-[32px] ',
                  { hidden: router.locale === value },
                )}
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: tagCategory,
                    label,
                  })
                }}
              >
                {publicT(`language.${value}`)}
              </a>
            </Link>
          ),
        )}
      </div>
    </div>
  )
}

export default Menu
