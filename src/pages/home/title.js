import { useTranslation } from 'next-i18next'
import { forwardRef, useMemo } from 'react'

export const Title = forwardRef(({ buttonColorChange = false, showButton = true }, ref) => {
  const { t } = useTranslation('home')

  const [selfButtonColor, cloudButtonColor] = useMemo(() => {
    return buttonColorChange
      ? [
          { bg: 'rgba(255, 255, 255, 0.12)', text: '#ffffff' },
          { bg: '#ffffff', text: '#654aec' },
        ]
      : [
          { bg: '#e5e6eb', text: '#1d2129' },
          { bg: '#654aec', text: '#ffffff' },
        ]
  }, [buttonColorChange])

  return (
    <div
      ref={ref}
      className="text-[80px]  text-[#0b0c0f] pt-[200px]  flex flex-col justify-center items-center font-bold"
    >
      <span>{t('slogan-1')}</span>
      <span> {t('slogan-2')}</span>
      <span className="font-normal text-[16px] mt-[40px]">
        ILLA is a low-code platform that lets developers build internal tools
      </span>
      <span className="font-normal text-[16px]">
        in minutes, spend less time on website design and integrations.
      </span>
      {showButton && (
        <div className="text-[20px] font-normal flex  mt-[64px]  box-border">
          <div
            style={{ backgroundColor: selfButtonColor.bg, color: selfButtonColor.text }}
            className=" px-12   leading-[64px] box-border mr-4 bg-amber-100  rounded-full "
          >
            {t('self-Hosted')}
          </div>
          <span
            style={{ backgroundColor: cloudButtonColor.bg, color: cloudButtonColor.text }}
            className="px-12 leading-[64px] box-border  rounded-full"
          >
            {t('illa-Cloud')}
          </span>
        </div>
      )}
    </div>
  )
})
