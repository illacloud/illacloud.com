import { useTranslation } from 'next-i18next'
import { forwardRef, useMemo } from 'react'
import clsx from 'clsx'
import NextLink from 'next/link'

export const Title = forwardRef(({ buttonColorChange = false, showButton = true }, ref) => {
  const { t } = useTranslation('home')

  return (
    <div className="text-title z-30 sm:grow   grow-0 text-[40px]  sm:text-[80px] pt-[48px] sm:pt-0  text-[#0b0c0f] sm:px-[40px]  text-center flex flex-col justify-center items-center font-bold">
      <span className="leading-[48px] px-[20px] sm:px-0 sm:leading-[96px] sm:whitespace-pre-line">
        {t('slogan-1')}
      </span>
      <span className="font-normal text-[16px] mt-[40px] px-[20px] sm:w-[520px]  sm:px-0  text-[#1d2129]">
        {t('description')}
      </span>
      <div
        ref={ref}
        className="text-[16px] sm:text-[20px] font-normal flex mt-[20px] sm:mt-[64px]  box-border"
      >
        <NextLink href="https://github.com/illa-family/illa-builder">
          <div
            className={clsx(
              'leading-[48px] sm:leading-[64px]  w-[163.5px] sm:w-[200px] cursor-pointer  box-border mr-2 sm:mr-4 rounded-full bg-[#e5e6eb] text-[#1d2129] ',
              buttonColorChange
                ? 'sm:bg-[#ffffff]/[.12] sm:text-[#ffffff]'
                : 'sm:bg-[#f2f3f5] sm:text-[#1d2129] sm:hover:bg-[#ebebeb] sm:active:bg-[#c9cdd4]'
            )}
          >
            {t('self-Hosted')}
          </div>
        </NextLink>
        <span
          className={clsx(
            ' w-[163.5px] sm:w-[200px] cursor-pointer  sm:leading-[64px]  leading-[48px]  box-border mr-2 sm:mr-4 rounded-full bg-[#654aec] text-[#ffffff]',
            buttonColorChange
              ? 'sm:bg-[#ffffff] sm:text-[#654aec]'
              : 'sm:bg-[#654aec] sm:text-[#ffffff] sm:hover:bg-[#775ff2] sm:active:bg-[#5343d0]'
          )}
        >
          {t('illa-Cloud')}
        </span>
      </div>
    </div>
  )
})
