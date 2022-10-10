import clsx from 'clsx'
import { CloseWhiteIcon, SelectIcon } from '@/img/home/svg'
import { useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'

export const Menu = ({ menuExpand, closeMenu }) => {
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
        <NextLink href="/">
          <span>
            <IllaLogoWhiteIcon />
          </span>
        </NextLink>
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
        <NextLink href="https://github.com/illa-family/illa-builder">
          <span className="w-full flex flex-row flex-nowrap cursor-pointer items-center h-[40px] gap-[8px]  pl-[32px]">
            ILLA Builder
          </span>
        </NextLink>
        <NextLink href="https://github.com/illa-family/illa-design">
          <span className="w-full flex flex-row flex-nowrap items-center cursor-pointer h-[40px] gap-[8px]  pl-[32px]">
            ILLA Design
          </span>
        </NextLink>
      </div>
      <NextLink href="/docs/overview">
        <span className="w-full flex flex-row cursor-pointer flex-nowrap items-center h-[40px] gap-[8px] ">
          {t('nav.doc')}
        </span>
      </NextLink>
      <NextLink href="/hire">
        <span className="w-full flex cursor-pointer flex-row flex-nowrap items-center h-[40px] gap-[8px] ">
          {t('nav.career')}
        </span>
      </NextLink>
      <span
        onClick={() => {
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
        <NextLink href="https://github.com/illa-family/illa-builder">
          <span className="w-full flex flex-row flex-nowrap cursor-pointer items-center h-[40px] gap-[8px]  pl-[32px]">
            Github
          </span>
        </NextLink>
        <NextLink href="https://twitter.com/illafamily">
          <span className="w-full flex flex-row flex-nowrap items-center cursor-pointer h-[40px] gap-[8px]  pl-[32px]">
            Twitter
          </span>
        </NextLink>
        <NextLink href="https://discord.gg/zKf3WKCufR">
          <span className="w-full flex flex-row flex-nowrap items-center cursor-pointer h-[40px] gap-[8px]  pl-[32px]">
            Discord
          </span>
        </NextLink>
        <NextLink href="https://www.producthunt.com/posts/illa">
          <span className="w-full flex flex-row flex-nowrap items-center cursor-pointer h-[40px] gap-[8px]  pl-[32px]">
            ProductHunt
          </span>
        </NextLink>
      </div>

      <span
        onClick={() => {
          setLanguageListExpand(() => !languageListExpand)
        }}
        className="w-full flex flex-row cursor-pointer flex-nowrap items-center h-[40px] gap-[8px]  "
      >
        {router.locale === 'en-US' ? 'English' : '简体中文'} <SelectIcon />
      </span>
      <div>
        <NextLink
          href={router.pathname}
          locale={router.locale === 'en-US' ? 'zh-CN' : 'en-US'}
        >
          <span
            style={{ height: languageListExpand ? 40 : 0, overflowY: 'hidden' }}
            className="transition-height cursor-pointer duration-200 w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px]  pl-[32px]"
            onClick={() => {}}
          >
            {router.locale === 'en-US' ? '简体中文' : 'English'}
          </span>
        </NextLink>
      </div>
    </div>
  )
}
