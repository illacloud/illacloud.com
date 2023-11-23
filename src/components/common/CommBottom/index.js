import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'
import { Github } from '@/img/public/whiteGithub'
import { GitHubIconGray } from '@/img/home/svg'
import { useElementFirstShow } from '@/hooks/useElementFirstShow'
import { useUtmParams } from '@/hooks/useUtmParams'
import { useRef, useCallback } from 'react'
import { sendTagEvent } from '@/utils/gtag'

const CommBottom = ({
  scrollStart,
  scrollEnd,
  uri = '',
  whiteTheme = false,
}) => {
  const { t } = useTranslation('home')
  const { scrollYProgress } = useViewportScroll()
  const height = useTransform(
    scrollYProgress,
    [scrollStart, scrollEnd],
    [120, 410],
  )
  const ref = useRef(null)
  const cloudUrl = useUtmParams('https://cloud.illacloud.com')

  const reportShow = useCallback(() => {
    sendTagEvent({
      action: 'click',
      category: 'homepage_call_action_show',
    })
  }, [])
  useElementFirstShow(ref, reportShow)
  return (
    <div ref={ref} className={style.commBottomContainer}>
      <motion.div
        style={{ height }}
        className={clsx(
          style.commBottomBtnBg,
          'hidden xl:block',
          whiteTheme ? style.whiteBottomBg : style.bottomBg,
        )}
      />
      <div
        className={clsx(
          style.commBottomBtnBg,
          'block xl:hidden h-full',
          whiteTheme ? style.whiteBottomBg : style.bottomBg,
        )}
      />
      <div className="flex flex-col items-center gap-[24px] w-full xl:w-[800px] xl:h-[210px]">
        <h1
          className={clsx(
            style.commBottomTitle,
            whiteTheme ? style.whiteBottomTitle : style.bottomTitle,
          )}
        >
          {t('call-to-action.title')}
        </h1>
        <p
          className={clsx(
            style.commBottomDesc,
            whiteTheme ? 'text-[#1D2129]' : 'text-white-02',
          )}
        >
          {t('call-to-action.desc')}
        </p>
        <div className="flex flex-col xl:flex-row gap-[24px] w-full xl:w-auto">
          <Link
            legacyBehavior
            href={cloudUrl}
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: 'homepage_call_action_try_cloud_click',
              })
              sendTagEvent({
                action: 'click_try',
              })
            }}
          >
            <a
              className={clsx(
                style.commBottomBtn,
                whiteTheme
                  ? 'bg-tech-purple-01 text-white-01'
                  : 'bg-white-01 text-[#0b0c0f]',
              )}
            >
              {t('call-to-action.button-1')}
            </a>
          </Link>
          <Link
            legacyBehavior
            href={uri}
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: 'homepage_call_action_try_cloud_click',
              })
              sendTagEvent({
                action: 'click_signin',
              })
            }}
          >
            <a
              className={clsx(
                style.commBottomBtn,
                'gap-[10px]',
                whiteTheme
                  ? 'bg-white-01 text-[#0b0c0f]'
                  : 'bg-white-09 text-white-01',
              )}
            >
              {whiteTheme ? <GitHubIconGray /> : <Github />}
              <span>{t('call-to-action.button-2')}</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CommBottom
