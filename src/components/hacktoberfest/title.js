import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { useRef } from 'react'
import { usePaintBg } from './hooks/usePaintBg'
import titleBtnBg from '@/img/hacktoberfest/titleBtnBg.svg'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'

export const Title = () => {
  const { t } = useTranslation('hacktober')
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  usePaintBg(canvasRef, containerRef)

  const onClick = () => {
    sendTagEvent({
      action: 'click',
      category: 'hacktober_contribute_1_click',
    })
  }

  return (
    <div className={style.titleContainer} ref={containerRef}>
      <div className="w-screen h-screen overflow-hidden absolute">
        <canvas ref={canvasRef} />
      </div>
      <div className={style.titleContentContainer}>
        <div className={style.titleInfo}>
          <h1 className={style.titleInfoTitle}>
            <span>HacktoberFest2023</span>
            <span className="hidden xl:block text-[32px] w-[32px]">|</span>
            <span>ILLA Cloud</span>
          </h1>
          <span className={style.titleInfoDesc}>{t('meta.description')}</span>
        </div>
        <img src="https://cdn.illacloud.com/official-website/img/hacktoberFest/h10.svg" width="90" alt="" />
        <Link href="#contribute" onClick={onClick}>
          <div className={style.titleBtn}>
            <img className={style.titleBtnBg} src={titleBtnBg} alt="" />
            <span className={style.titleBtnContent}>
              {t('hacktober-introduction.button')}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
