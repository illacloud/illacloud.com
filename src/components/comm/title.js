import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import style from './index.module.css'
import { sendTagEvent } from '@/utils/gtag'
import { MobileTitle } from '@/components/comm/mobileTitle'


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
                <Link legacyBehavior href={btn1Link}>
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
                    <Link legacyBehavior href={btn2Link}>
                      <a
                        className="h-[19px] bg-blackAlpha-05 text-center leading-[19px] flex flex-row gap-[8px]"
                        onClick={() => {
                          sendTagEvent({
                            action: 'click',
                            category: btn2Category,
                            label: t(btn2),
                          })
                        }}
                      >
                        <span className='underline'>{t(btn2)} </span>
                        <img src='/img/vector/white.svg' className='w-[11px]' alt='vector'/>
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
      <MobileTitle content={content} translationName={translationName} />
    </>
  )
}
