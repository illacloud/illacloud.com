import clsx from 'clsx'
import { CloseWhiteIcon, SelectIcon } from '@/img/home/svg'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import { sendTagEvent } from '@/utils/gtag'

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
]

export const Menu = ({ menuExpand, closeMenu, onChangeShow }) => {
  const [productListExpand, setProductListExpand] = useState(false)
  const [languageListExpand, setLanguageListExpand] = useState(false)
  const [communityListExpand, setCommunityListExpand] = useState(false)
  const { t } = useTranslation('home')
  const router = useRouter()

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
        style={{ height: productListExpand ? 80 : 0, overflowY: 'hidden' }}
        className="transition-height duration-200"
      >
        <Link legacyBehavior href="https://github.com/illacloud/illa-builder">
          <a
            className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]  pl-[32px]"
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: 'homepage_menu_product_builder_mob_click',
                label: 'ILLA Builder',
              })
            }}
          >
            ILLA Builder
          </a>
        </Link>
        <Link legacyBehavior href="https://github.com/illacloud/illa-design">
          <a
            className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]  pl-[32px]"
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: 'homepage_menu_product_design_mob_click',
                label: 'ILLA Design',
              })
            }}
          >
            ILLA Design
          </a>
        </Link>
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
                className="px-[16px] text-center"
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
      {
        // todo: 补充移动端
      }
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
            label: router.locale === 'en-US' ? 'English' : '简体中文',
          })
          setLanguageListExpand(() => !languageListExpand)
        }}
        className="w-full flex flex-row cursor-pointer flex-nowrap items-center h-[40px] gap-[8px]  "
      >
        {router.locale === 'en-US' ? 'English' : '简体中文'} <SelectIcon />
      </span>
      <div>
        <Link
          legacyBehavior
          href={router.pathname}
          locale={router.locale === 'en-US' ? 'zh-CN' : 'en-US'}
        >
          <a
            style={{ height: languageListExpand ? 40 : 0, overflowY: 'hidden' }}
            className="transition-height duration-200 w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]  pl-[32px]"
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category:
                  router.locale === 'en-US'
                    ? 'homepage_menu_language_zh_mob_click'
                    : 'homepage_menu_language_en_mob_click',
                label: router.locale === 'en-US' ? '简体中文' : 'English',
              })
            }}
          >
            {router.locale === 'en-US' ? '简体中文' : 'English'}
          </a>
        </Link>
      </div>
    </div>
  )
}
