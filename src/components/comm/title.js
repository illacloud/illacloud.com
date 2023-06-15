import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import style from './index.module.css'
import { sendTagEvent } from '@/utils/gtag'
import { useUtmParams } from '@/hooks/useUtmParams'
import { isCloudUrl } from '@/utils/addParams'


export const Title = ({ translationName = 'home', content }) => {
  const { t } = useTranslation(translationName)
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.03], [1, 0])
  const titlePositionY = useTransform(scrollYProgress, [0, 0.03], [0, -24])
  const width = useTransform(scrollYProgress, [0, 0.03], [1040, 1200])
  const imgPositionY = useTransform(
    scrollYProgress,
    [0, 0.035],
    ['0vh', '-60vh'],
  )
  const cloudUrl = useUtmParams('https://cloud.illacloud.com')

  const { title, desc, btn1, btn1Link = '', btn1Category, btn2, btn2Link = '', image, imageAlt, btn2Category } = content

  return (
    <>
      <div
        className={style.titleContainer}
      >
        {/* pc */}
        <motion.div
          style={{ opacity: opacity, translateY: titlePositionY }}
          className={'absolute left-0 top-[10vh] w-full flex justify-center'}
        >
          <div className="h-full flex flex-col items-center animate-title-visible w-[1040px] gap-[40px] gap-[48px]">
            <div className="flex flex-col items-center gap-[24px] z-[-1]">
              <h1 className=" px-[20px] sm:px-0  sm:whitespace-pre-line text-center text-[64px] leading-[72px]">
                {t(title)}
              </h1>
              <span className="font-normal text-[20px] px-[20px] sm:px-0 text-center">
                {t(desc)}
              </span>
              <div className="flex items-center flex-col content-between gap-[24px] text-[16px] leading-[28px] font-[500]">
                <Link legacyBehavior href={isCloudUrl(btn1Link) ? cloudUrl : btn1Link}>
                  <a
                    className={style.titlePurpleBtn}
                    onClick={() => {
                      sendTagEvent({
                        action: 'click',
                        category: btn1Category,
                        label: t(btn1),
                      })
                    }}
                  >
                    {t(btn1)}
                  </a>
                </Link>
                {
                  btn2 && (
                    <Link legacyBehavior href={isCloudUrl(btn2Link) ? cloudUrl : btn2Link}>
                      <a
                        className="h-[19px] bg-blackAlpha-05 text-center leading-[19px]"
                        onClick={() => {
                          sendTagEvent({
                            action: 'click',
                            category: btn2Category,
                            label: t(btn2),
                          })
                        }}
                      >
                        <span className='underline'>{t(btn2)} </span>
                        <span>→</span>
                      </a>
                    </Link>
                  )
                }
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full flex items-center justify-center absolute top-[70vh] "
          style={{
            translateY: imgPositionY,
          }}
        >
          <motion.img
            src={image}
            className="flex items-center justify-center"
            alt={imageAlt}
            style={{
              width: width,
            }}
          />
        </motion.div>
      </div>
      {/* mobile */}
      <div className='flex xl:hidden flex-col items-center gap-[32px] px-[20px] mt-[60px] w-full'>
        <div className='flex flex-col items-center gap-[24px] text-white-01'>
          <h1 className='font-[700] text-[40px] leading-[48px] text-center'>{t(title)}</h1>
          <p className='font-[400] text-[14px] leading-[16px] text-center'>{t(desc)}</p>
          <div className='flex flex-col items-center justify-center gap-[16px] w-full  text-[16px] text-center'>
            <Link href={isCloudUrl(btn1Link) ? cloudUrl : btn1Link}>
              <span
                className='w-full bg-tech-purple-01 py-[12px] px-[16px] rounded-[8px]'
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_body_self_hosted_click',
                    label: t('self-Hosted'),
                  })
                }}>{t(btn1)}</span>
            </Link>
            <Link legacyBehavior href={isCloudUrl(btn2Link) ? cloudUrl : btn2Link}>
              <span
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_body_self_hosted_click',
                    label: t('self-Hosted'),
                  })
                }}
              >
                <span className='underline'>{t(btn2)} </span>
                <span>→</span>
              </span>
            </Link>
          </div>
        </div>
        <div className='w-full'>
          <Image src={image} width="2080" height="1294" alt={imageAlt} />
        </div>
      </div>
    </>
  )
}
