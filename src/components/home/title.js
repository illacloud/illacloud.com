import { useTranslation } from 'next-i18next'
import { forwardRef, useMemo } from 'react'
import clsx from 'clsx'

export const Title = forwardRef(({ buttonColorChange = false, showButton = true }, ref) => {
  const { t } = useTranslation('home')
  console.log('Title', buttonColorChange)

  return (
    <div className="text-title z-30 sm:grow   grow-0 text-[40px]  sm:text-[80px] pt-[48px] sm:pt-0  text-[#0b0c0f] sm:px-[40px]  text-center flex flex-col justify-center items-center font-bold">
      <span className="leading-[48px] sm:leading-[96px] whitespace-pre-line">{t('slogan-1')}</span>
      <span className="font-normal text-[16px] mt-[40px] px-[20px] sm:w-[520px]  sm:px-0">
        {t('description')}
      </span>
      <div
        ref={ref}
        className="text-[16px] sm:text-[20px] font-normal flex  mt-[40px] sm:mt-[64px]  box-border"
      >
        <div
          className={clsx(
            'px-12  leading-[64px] box-border mr-2 sm:mr-4 rounded-full bg-[#e5e6eb] text-[#1d2129]',
            buttonColorChange
              ? 'sm:bg-[#ffffff]/[.12] sm:text-[#ffffff]'
              : 'sm:bg-[#e5e6eb] sm:text-[#1d2129]'
          )}
        >
          {t('self-Hosted')}
        </div>
        <span
          className={clsx(
            'px-12  leading-[64px] box-border mr-2 sm:mr-4 rounded-full bg-[#654aec] text-[#ffffff]',
            buttonColorChange
              ? 'sm:bg-[#e5e6eb] sm:text-[#1d2129]'
              : 'sm:bg-[#654aec] text-[#ffffff]'
          )}
        >
          {t('illa-Cloud')}
        </span>
      </div>
    </div>
  )
})
