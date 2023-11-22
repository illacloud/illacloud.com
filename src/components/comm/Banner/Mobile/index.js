import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Image from 'next/image'
import { sendTagEvent } from '@/utils/gtag'
import { Vector } from '@/img/public/vector'

const BannerMobile = ({ content, translationName }) => {
  const { title, desc, btn1, btn1Link, btn2, btn2Link, mobileImg, imageAlt } =
    content
  const { t } = useTranslation(translationName)

  return (
    <div className="flex  flex-col items-center gap-[32px] px-[20px] mt-[60px] w-full">
      <div className="flex flex-col items-center gap-[24px] text-white-01">
        <h1 className="font-[700] text-[40px] leading-[48px] text-center">
          {t(title)}
        </h1>
        <p className="font-[400] text-[14px] leading-[16px] text-center">
          {t(desc)}
        </p>
        <div className="flex flex-col items-center justify-center gap-[16px] w-full  text-[16px] text-center">
          <Link href={btn1Link}>
            <span
              className="w-full bg-tech-purple-01 py-[12px] px-[16px] rounded-[8px]"
              onClick={() => {
                sendTagEvent({
                  action: 'click_try',
                })
              }}
            >
              {t(btn1)}
            </span>
          </Link>
          {btn2 && (
            <Link legacyBehavior href={btn2Link}>
              <span
                className="flex flex-row items-center gap-[8px]"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_body_self_hosted_click',
                    label: t('self-Hosted'),
                  })
                }}
              >
                <span className="underline">{t(btn2)} </span>
                <Vector />
              </span>
            </Link>
          )}
        </div>
      </div>
      <div className="w-full">
        <Image src={mobileImg} width="2080" height="1294" alt={imageAlt} />
      </div>
    </div>
  )
}

export default BannerMobile
