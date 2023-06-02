import clsx from 'clsx'
import { CloseWhiteIcon, SelectIcon } from '@/img/home/svg'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import { sendTagEvent } from '@/utils/gtag'
import { generateLanguageOptions } from '@/constants/language'

const communityOptions = [
  {
    label: 'Github',
    value: 'https://github.com/illacloud/illa-builder',
    tagCategory: 'homepage_menu_community_github_mob_click',
  },
  {
    label: 'Twitter',
    value: 'https://twitter.com/illacloudhq',
    tagCategory: 'homepage_menu_community_twitter_mob_click',
  },
  {
    label: 'Discord',
    value: 'https://discord.com/invite/illacloud',
    tagCategory: 'homepage_menu_community_discord_mob_click',
  },
  {
    label: 'ProductHunt',
    value: 'https://www.producthunt.com/posts/illa',
    tagCategory: 'homepage_menu_community_producthunt_mob_click',
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/company/illacloud/',
    tagCategory: 'homepage_menu_community_linkedIn_mob_click',
  },
]



export const Menu = ({ menuExpand, closeMenu, onChangeShow }) => {
  const [productListExpand, setProductListExpand] = useState(false)
  const [languageListExpand, setLanguageListExpand] = useState(false)
  const [communityListExpand, setCommunityListExpand] = useState(false)
  const { t } = useTranslation('home')
  const { t: publicT } = useTranslation("common")
  const router = useRouter()

  const productOptions = [
    {
      label: 'ILLA Builder',
      value: 'https://github.com/illacloud/illa-builder',
      tagCategory: 'homepage_menu_product_builder_mob_click',
    },
    {
      label: 'ILLA Design',
      value: 'https://github.com/illacloud/illa-design',
      tagCategory: 'homepage_menu_product_design_mob_click',
    },
    {
      label: t('nav.integrations'),
      value: `/${router.locale}/integrations`,
      tagCategory: 'homepage_menu_product_integration_click',
      target: 'Integrations'
    },
    {
      label: t('nav.components'),
      value: `/${router.locale}/components`,
      tagCategory: 'homepage_menu_product_component_click',
      target: 'Components'
    },
  ]


  return (
    <div
      className={clsx(
        'h-screen w-full bg-gray-01 absolute top-0 left-0 px-[20px] z-50 font-medium text-[16px] text-white-01',
        'overflow-x-hidden',
        menuExpand ? 'block' : 'hidden',
      )}
    >
      <div className="justify-between  w-full h-[64px] flex items-center ">
        <Link legacyBehavior href="/">
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

      <span
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_product_mob_click',
            label: t('nav.product'),
          })
          setProductListExpand(() => !productListExpand)
        }}
        className="w-full cursor-pointer flex flex-row flex-nowrap items-center h-[40px] gap-[8px]  mt-[40px]"
      >
        {t('nav.product')} <SelectIcon />
      </span>
      <div
        style={{ height: productListExpand ? 160 : 0, overflowY: 'hidden' }}
        className="transition-height duration-200"
      >
        {productOptions.map(({ label, value, tagCategory, target }) => (
          <Link legacyBehavior href={value.replace('/en-US', '')} key={label}>
            <a
              className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]  pl-[32px]"
              onClick={() => {
                closeMenu && closeMenu()
                sendTagEvent({
                  action: 'click',
                  category: tagCategory,
                  label: target || label,
                })
              }}
            >
              {label}
            </a>
          </Link>
        ))}
      </div>
      <Link legacyBehavior href="/docs/about-illa">
        <a
          className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]"
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_menu_doc_mob_click',
              label: t('nav.doc'),
            })
          }}
        >
          {t('nav.doc')}
        </a>
      </Link>
      <Link legacyBehavior href="/pricing">
        <a
          className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]"
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_menu_doc_click',
              label: t('nav.pricing'),
            })
          }}
        >
          {t('nav.pricing')}
        </a>
      </Link>
      <span
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_community_mob_click',
            label: t('nav.community'),
          })
          setCommunityListExpand(() => !communityListExpand)
        }}
        className="w-full cursor-pointer flex flex-row flex-nowrap items-center h-[40px] gap-[8px]"
      >
        {t('nav.community')} <SelectIcon />
      </span>
      <div
        style={{ height: communityListExpand ? 192 : 0, overflowY: 'hidden' }}
        className="transition-height duration-200"
      >
        {communityOptions.map((option, index) => {
          return (
            <a
              href={option.value}
              target="_blank"
              className="w-full"
              key={option.label}
            >
              <div
                className="w-full flex flex-row flex-nowrap items-center cursor-pointer h-[40px] gap-[8px]  pl-[32px]"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: option.tagCategory,
                    label: option.label,
                    value: option.value,
                  })
                }}
              >
                {option.label}
              </div>
            </a>
          )
        })}
      </div>
      <Link legacyBehavior href="https://blog.illacloud.com/">
        <a
          className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]"
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_menu_blog_mob_click',
              label: t('nav.blog'),
            })
          }}
        >
          {t('nav.blog')}
        </a>
      </Link>
      <span
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_partner_apply_click',
            label: t('nav.bookDemo'),
          })
          closeMenu && closeMenu()
          onChangeShow()
        }}
        className="w-full cursor-pointer flex flex-row flex-nowrap items-center h-[40px] gap-[8px]"
      >
        {t('nav.bookDemo')}
      </span>

      <span
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_language_mob_click',
            label: publicT(`language.${router.locale || "en-US"}`),
          })
          setLanguageListExpand(() => !languageListExpand)
        }}
        className="w-full flex flex-row cursor-pointer flex-nowrap items-center h-[40px] gap-[8px]  "
      >
        {publicT(`language.${router.locale || "en-US"}`)} <SelectIcon />
      </span>
      <div className='max-h-[180px] overflow-y-auto'>
        {generateLanguageOptions(publicT).map(({ value, label, tagCategory }) => (
          <Link
            legacyBehavior
            href={router.asPath}
            locale={value}
            key={value}
          >
            <a
              style={{ height: languageListExpand ? 40 : 0, overflowY: 'hidden' }}
              className={clsx('transition-height duration-200 w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]  pl-[32px] ', { 'hidden': router.locale === value })}
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
        ))}
      </div>
    </div>
  )
}
