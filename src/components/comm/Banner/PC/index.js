import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import style from './index.module.css'
import { sendTagEvent } from '@/utils/gtag'
import { Vector } from '@/img/public/vector'
import Image from 'next/image'

const BannerPC = ({ translationName = 'home', content }) => {
  const { t } = useTranslation(translationName)
  const {
    title,
    desc,
    btn1,
    btn1Link = '',
    btn1Category,
    btn2,
    btn2Link = '',
    image,
    imageAlt,
    btn2Category,
  } = content

  return (
    <>
      <div className={style.titleContainer}>
        {/* pc */}
        <div className={'w-full flex justify-center'}>
          <div className="h-full flex flex-col items-center w-[1200px] gap-[40px] gap-[48px]">
            <div className="flex flex-col items-center gap-[24px]">
              <h1 className=" px-[20px] sm:px-0  sm:whitespace-pre-line text-center text-[64px] leading-[72px]">
                {t(title)}
              </h1>
              <span className="font-normal text-[20px] px-[20px] sm:px-0 text-center">
                {t(desc)}
              </span>
              <div className="flex items-center flex-col content-between gap-[24px] text-[16px] leading-[28px] font-[500]">
                <Link legacyBehavior href={btn1Link}>
                  <a
                    className={style.titlePurpleBtn}
                    onClick={() => {
                      sendTagEvent({
                        action: 'click',
                        category: btn1Category,
                        label: t(btn1),
                      })
                      sendTagEvent({
                        action: 'click_try',
                      })
                    }}
                  >
                    {t(btn1)}
                  </a>
                </Link>
                {btn2 && (
                  <Link legacyBehavior href={btn2Link}>
                    <a
                      className="h-[19px] bg-blackAlpha-05 text-center leading-[19px] flex flex-row gap-[8px] flex flex-row items-center"
                      onClick={() => {
                        sendTagEvent({
                          action: 'click',
                          category: btn2Category,
                          label: t(btn2),
                        })
                      }}
                    >
                      <span className="underline">{t(btn2)} </span>
                      <Vector />
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={style.titleImage}>
          <Image
            src={image}
            className="flex items-center justify-center"
            alt={imageAlt}
            width={1040}
            height={584}
          />
        </div>
      </div>
    </>
  )
}

export default BannerPC
