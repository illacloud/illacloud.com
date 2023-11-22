import { useTranslation } from 'next-i18next'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useViewportScroll } from 'framer-motion'
import Publicize from '@/components/comm/Publicize'
import Image from 'next/image'
import { useUtmParams } from '@/hooks/useUtmParams'
import clsx from 'clsx'
import { sendTagEvent } from '@/utils/gtag'
import { usePaintBg } from '../hooks/usePaintBg'
import style from './index.module.css'

const BannerPC = (props) => {
  const { setPlayMaskShow, githubStarts } = props
  const { t } = useTranslation('home')
  const [canClick, setCanClcik] = useState(true)
  const cloudUrl = useUtmParams('https://cloud.illacloud.com')
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  usePaintBg(canvasRef, containerRef)

  const { scrollYProgress } = useViewportScroll()

  useEffect(() => {
    return scrollYProgress.onChange((leatest) => {
      if (leatest >= 0.038) {
        setCanClcik(false)
      } else {
        setCanClcik(true)
      }
    })
  }, [scrollYProgress])

  return (
    <div ref={containerRef} className={style.bannerContainerStyle}>
      <div className={style.canvasContainerStyle}>
        <canvas ref={canvasRef} />
      </div>
      <div
        className={clsx(style.bannerContentContainer, {
          'pointer-events-none': !canClick,
        })}
      >
        <Publicize stars={githubStarts} />
        <div className={style.bannerTextContainerStyle}>
          <h1 className={style.sloganStyle}>{t('slogan-1')}</h1>
          <span className={style.descStyle}>{t('description')}</span>
          <div className={style.buttonContainerStyle}>
            <Link legacyBehavior href={cloudUrl}>
              <a
                className="h-[48px] w-[400px] bg-tech-purple-01 rounded-[8px] px-[32px] py-[10px] font-normal text-white-01 text-center hover:bg-tech-purple-02 active:bg-tech-purple-n-01"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_body_try_cloud_free_click',
                    label: t('illa-Cloud'),
                    value: 'https://cloud.illacloud.com/',
                  })
                  sendTagEvent({
                    action: 'click_try',
                  })
                }}
              >
                {t('illa-Cloud')}
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className={style.bannerImageStyle}>
        <Image
          src="https://cdn.illacloud.com/official-website/img/home/playVideoCover.png"
          className="flex items-center justify-center"
          alt="Screenshot of ILLA Cloud app editor"
          width={1040}
          height={648}
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_body_video_click',
            })
            setPlayMaskShow && setPlayMaskShow(true)
          }}
        />
      </div>
    </div>
  )
}
export default BannerPC
