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
import { forwardRef, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Menu } from '@/components/home/menu'

export const Nav = forwardRef(
  ({ buttonColorChange = false, cloudButtonColorChange = false }, ref) => {
    const { t } = useTranslation('home')

    const [navColor] = useMemo(() => {
      return buttonColorChange
        ? [{ bg: 'rgba(255, 255, 255, 0.12)', text: '#ffffff' }]
        : [{ bg: '#ffffff', text: '#1d2129' }]
    }, [buttonColorChange])

    const cloudButtonColor = useMemo(() => {
      return cloudButtonColorChange
        ? { bg: '#654aec', text: '#ffffff' }
        : { bg: '#ffffff', text: '#654aec' }
    }, [cloudButtonColorChange])

    const [menuExpand, setMenuExpand] = useState(false)
    useEffect(() => {
      document.body.style.overflow = menuExpand ? 'hidden' : 'auto'
    }, [menuExpand])

    return (
      <>
        <div className=" justify-between  px-[20px] w-full h-[64px] flex items-end sm:hidden">
          <ILLA_LOGO />
          <span
            onClick={() => {
              setMenuExpand(() => !menuExpand)
            }}
          >
            {menuExpand ? <CloseIcon /> : <MenuIcon />}
          </span>
        </div>
        <Menu menuExpand={menuExpand} closeMenu={() => setMenuExpand(false)} />
        <div className="h-[88px] w-full flex justify-between items-end fixed z-40  hidden sm:inline-flex">
          <div
            className="w-1/3 h-[48px] items-center flex  h-full items-end  flex-row z-50 pl-[40px]"
            style={{ color: navColor.text }}
          >
            {buttonColorChange ? <ILLA_LOGO_WHITE /> : <ILLA_LOGO />}
            {buttonColorChange ? <GIT_LOGO_WHITE /> : <GIT_LOGO />}
            <LanguageSelect buttonColorChange={buttonColorChange} />
          </div>
          <div className="w-1/3  flex  justify-center font-medium text-[#1d2129]">
            <div
              className="bg-white flex  justify-center rounded-full px-[24px] "
              style={{ backgroundColor: navColor.bg, color: navColor.text }}
            >
              <ProductSelect buttonColorChange={buttonColorChange} />
              <NextLink href="/docs/installation">
                <a href="/" className="px-[16px] text-center leading-[48px] ">
                  Doc
                </a>
              </NextLink>
              <NextLink href="/hire">
                <a href="/" className="px-[16px] text-center leading-[48px] ">
                  Careers
                </a>
              </NextLink>
            </div>
          </div>
          <div
            style={{ visibility: buttonColorChange ? 'visible' : 'hidden' }}
            className=" w-1/3  text-[20px] font-normal gap-[16px] flex justify-end  pr-[40px]"
          >
            <div className="w-[160px] text-center bg-[#ffffff]/[.12] text-[#ffffff] leading-[48px] box-border rounded-full ">
              {t('self-Hosted')}
            </div>
            <span
              style={{ backgroundColor: cloudButtonColor.bg, color: cloudButtonColor.text }}
              className="w-[160px] text-center bg-[#ffffff] text-[#654aec] leading-[48px] box-border  rounded-full"
            >
              {t('illa-Cloud')}
            </span>
          </div>
        </div>
      </>
    )
  }
)
