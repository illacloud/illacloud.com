import {
  GIT_LOGO,
  GIT_LOGO_WHITE,
  ILLA_ICON_MOBILE,
  ILLA_LOGO,
  ILLA_LOGO_WHITE,
  MenuIcon,
} from '@/pages/home/svg'
import { LanguageSelect } from '@/pages/home/language-select'
import { ProductSelect } from '@/pages/home/product-select'
import NextLink from 'next/link'
import { forwardRef, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { isMobile } from '@/pages/utils'

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

    return (
      <div className="h-[64px] sm:h-[88px] relative sm:fixed w-full z-50 ">
        {isMobile() ? (
          <div className="h-full sm:h-0 overflow-hidden justify-between px-[20px] flex items-end">
            <ILLA_LOGO />
            <MenuIcon />
          </div>
        ) : (
          <div className="sm:h-full  z-50 top-0 inline-flex w-full justify-start items-end flex-row px-[40px]">
            <div
              style={{ color: navColor.text }}
              className=" sm:w-1/3  inline-flex  flex-row z-50 h-[48px] items-center"
            >
              {buttonColorChange ? <ILLA_LOGO_WHITE /> : <ILLA_LOGO />}
              {buttonColorChange ? <GIT_LOGO_WHITE /> : <GIT_LOGO />}
              <LanguageSelect buttonColorChange={buttonColorChange} />
            </div>
            <div className="grow flex justify-center">
              <div
                style={{ backgroundColor: navColor.bg, color: navColor.text }}
                className="inline-flex flex-row items-center text-base font-medium gap-2 h-12 px-10 rounded-full justify-center"
              >
                <ProductSelect buttonColorChange={buttonColorChange} />
                <NextLink href="/docs/installation">
                  <a href="/" className="px-4">
                    doc
                  </a>
                </NextLink>
                <span className="px-4">blog</span>
              </div>
            </div>
            <div
              style={{ visibility: buttonColorChange ? 'visible' : 'hidden' }}
              className="w-1/3  text-[20px] font-normal gap-[16px] flex justify-end  "
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
        )}
      </div>
    )
  }
)
