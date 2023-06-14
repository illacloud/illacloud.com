import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'
import { Github } from '@/img/public/whiteGithub'
import { GitHubIconGray } from '@/img/home/svg'

export const CommBottom = ({ scrollStart, scrollEnd, uri = '', whiteTheme = false }) => {
  const { t } = useTranslation('home')
  const { scrollYProgress } = useViewportScroll()
  const height = useTransform(scrollYProgress, [scrollStart, scrollEnd], [200, 410])
  return (
    <div className={style.commBottomContainer}>
      <motion.div style={{ height }} className={clsx(style.commBottomBtnBg, 'hidden xl:block', whiteTheme ? style.whiteBottomBg : style.bottomBg)} />
      <div className={clsx(style.commBottomBtnBg, 'block xl:hidden h-full', whiteTheme ? style.whiteBottomBg : style.bottomBg)} />
      <div className='flex flex-col items-center gap-[24px] w-full xl:w-[800px] xl:h-[210px]'>
        <h1 className={clsx(style.commBottomTitle, whiteTheme ? style.whiteBottomTitle : style.bottomTitle)}>{t('call-to-action.title')}</h1>
        <p className={clsx(style.commBottomDesc, whiteTheme ? 'text-[#1D2129]' : 'text-white-02')}>{t('call-to-action.desc')}</p>
        <div className='flex flex-col xl:flex-row gap-[24px] w-full xl:w-auto'>
          <Link href={'https://cloud.illacloud.com'}>
            <span className={clsx(style.commBottomBtn, whiteTheme ? 'bg-tech-purple-01 text-white-01' : 'bg-white-01 text-[#0b0c0f]')}>{t('call-to-action.button-1')}</span>
          </Link>
          <Link href={uri}>
            <span className={clsx(style.commBottomBtn, 'gap-[10px]', whiteTheme ? 'bg-white-01 text-[#0b0c0f]' : 'bg-white-09 text-white-01')}>
              {
                whiteTheme ? <GitHubIconGray /> : <Github />
              }
              <span >{t('call-to-action.button-2')}</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}