import {
  CloseIcon,
  GIT_LOGO,
  GIT_LOGO_WHITE,
  ILLA_LOGO,
  ILLA_LOGO_WHITE,
  MenuIcon,
} from '@/img/home/svg'
import { LanguageSelect } from '@/components/home/language-select'
import { ProductSelect } from '@/components/home/product-select'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Menu } from '@/components/home/menu'
import clsx from 'clsx'

export const Nav = ({
  navColorChange = false,
  cloudButtonColorChange,
  onSubscribe,
}) => {
  const { t } = useTranslation('home')

  const [menuExpand, setMenuExpand] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuExpand ? 'hidden' : 'auto'
  }, [menuExpand])

  return (
    <>
      <div className="justify-between  px-[20px] w-full h-[64px] flex items-end lg:hidden">
        <NextLink href="/">
          <a>
            <ILLA_LOGO />
          </a>
        </NextLink>
        <span
          onClick={() => {
            setMenuExpand(() => !menuExpand)
          }}
        >
          {menuExpand ? <CloseIcon /> : <MenuIcon />}
        </span>
      </div>
      <Menu menuExpand={menuExpand} closeMenu={() => setMenuExpand(false)} />
      <div className="h-[88px]  w-full flex justify-between items-end fixed z-40  hidden lg:inline-flex">
        <div
          className={clsx(
            'w-1/3 h-[48px] items-center flex  h-full items-end flex-row z-50 pl-[40px]',
            navColorChange ? 'text-[#ffffff]' : 'text-[#1d2129]',
          )}
        >
          <NextLink href="/">
            <a className="cursor-pointer">
              {navColorChange ? <ILLA_LOGO_WHITE /> : <ILLA_LOGO />}
            </a>
          </NextLink>
          <NextLink href="https://github.com/illacloud/illa-builder">
            <a>
              <span className="cursor-pointer">
                {navColorChange ? <GIT_LOGO_WHITE /> : <GIT_LOGO />}
              </span>
            </a>
          </NextLink>
          <LanguageSelect buttonColorChange={navColorChange} />
        </div>
        <div className="w-1/3 flex justify-center font-medium text-[#1d2129] text-[16px]">
          <div
            className={clsx(
              'flex justify-center rounded-full px-[24px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.02)] transition-background',
              navColorChange
                ? 'bg-[#ffffff]/[.12] text-[#ffffff] supports-backdrop-blur:bg-white/[.12] backdrop-blur '
                : 'bg-[#ffffff] text-[#1d2129]',
            )}
          >
            <ProductSelect buttonColorChange={navColorChange} />
            <NextLink href="/docs/overview">
              <a className="px-[16px] text-center leading-[48px] cursor-pointer">
                {t('nav.doc')}
              </a>
            </NextLink>
            <NextLink href="/hire">
              <a className="px-[16px] text-center leading-[48px] cursor-pointer">
                {t('nav.career')}
              </a>
            </NextLink>
          </div>
        </div>
        <div
          className={clsx(
            'w-1/3 text-[16px] font-normal gap-[16px] flex justify-end  pr-[40px]',
          )}
        >
          <NextLink href="/docs/illa-cli">
            <a
              className={clsx(
                'w-[160px] text-center bg-[#ffffff]/[.12] text-[#ffffff] cursor-pointer supports-backdrop-blur:bg-white/[.12] backdrop-blur  leading-[48px] box-border rounded-full ',
                navColorChange ? 'visible' : 'hidden',
              )}
            >
              {t('self-Hosted')}
            </a>
          </NextLink>
          <NextLink href="https://fast-try.illacloud.com/">
            <a
              className={clsx(
                'w-[160px] text-center leading-[48px] box-border cursor-pointer rounded-full',
                navColorChange ? 'visible' : 'hidden',
                cloudButtonColorChange
                  ? 'bg-[#654aec] text-[#ffffff]'
                  : 'bg-[#ffffff] text-[#654aec]',
              )}
            >
              {t('illa-Cloud')}
            </a>
          </NextLink>
        </div>
      </div>
    </>
  )
}
