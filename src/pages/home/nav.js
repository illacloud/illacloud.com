import { GIT_LOGO, GIT_LOGO_WHITE, ILLA_LOGO, ILLA_LOGO_WHITE } from '@/pages/home/svg'
import { LanguageSelect } from '@/pages/home/language-select'
import { ProductSelect } from '@/pages/home/product-select'
import NextLink from 'next/link'
import { forwardRef, useMemo } from 'react'
import { useTranslation } from 'next-i18next'

export const Nav = forwardRef(({ buttonColorChange }, ref) => {
  const { t } = useTranslation('home')

  const [navColor] = useMemo(() => {
    return buttonColorChange
      ? [{ bg: 'rgba(255, 255, 255, 0.12)', text: '#ffffff' }]
      : [{ bg: '#ffffff', text: '#1d2129' }]
  }, [buttonColorChange])

  return (
    <div className="fixed z-50  top-0 inline-flex w-full h-[88px] justify-start items-end flex-row px-[40px]">
      <div
        style={{ color: navColor.text }}
        className="w-1/3 inline-flex  flex-row z-50 h-[48px] items-center"
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
        <span className="w-[160px] text-center bg-[#ffffff] text-[#654aec] leading-[48px] box-border  rounded-full">
          {t('illa-Cloud')}
        </span>
      </div>
    </div>
  )
})
