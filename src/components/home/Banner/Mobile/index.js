import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { LinearGithubIcon } from '@/img/public/linearGithub'
import { LinearDiscordIcon } from '@/img/public/linearDiscord'
import { sendTagEvent } from '@/utils/gtag'
import { useUtmParams } from '@/hooks/useUtmParams'
import style from './index.module.css'
import bannerBg from '@/img/home3/bannerBg.svg'

const BannerMobile = (props) => {
  const { t } = useTranslation('home')
  const [menuExpand] = useState(false)
  const { setPlayMaskShow, githubStarts } = props
  const cloudUrl = useUtmParams('https://cloud.illacloud.com')
  useEffect(() => {
    document.body.style.overflow = menuExpand ? 'hidden' : 'auto'
  }, [menuExpand])

  return (
    <div className={style.bannerContainer}>
      <img src={bannerBg} alt="" className={style.bgStyle} />
      <h1 className={style.sloganStyle}>{t('slogan-1')}</h1>
      <span className={style.descStyle}>{t('description')}</span>
      <Link legacyBehavior href={cloudUrl}>
        <a
          className={style.tryBtnStyle}
          onClick={() => {
            sendTagEvent({
              action: 'click_try',
            })
            sendTagEvent({
              action: 'click',
              category: 'homepage_body_try_cloud_free_click',
              label: t('illa-Cloud'),
              value: 'https://cloud.illacloud.com/',
            })
          }}
        >
          {t('illa-Cloud')}
        </a>
      </Link>
      <div className="flex items-center gap-[40px]">
        <Link legacyBehavior href="https://github.com/illacloud/illa-builder">
          <a
            target="__blank"
            className="flex flex-col items-center gap-[8px] inline-block"
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: 'homepage_body_github_mob_click',
                label: `${githubStarts} ${t('stars')}`,
                value: 'https://github.com/illacloud/illa-builder',
              })
            }}
          >
            <LinearGithubIcon />
            <div className="text-white-01 text-[13px] flex items-center font-medium">
              <span className="ml-[5px]">
                {`${(githubStarts / 1000).toFixed(1)}k`} {t('stars')}
              </span>
            </div>
          </a>
        </Link>
        <Link legacyBehavior href="https://discord.com/invite/illacloud">
          <a
            target="__blank"
            className="flex flex-col items-center gap-[8px] inline-block"
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: 'homepage_body_discord_mob_click',
                label: t('join-community'),
                value: 'https://discord.com/invite/illacloud',
              })
            }}
          >
            <LinearDiscordIcon />
            <div className="text-white-01 text-[13px] flex items-center font-medium items-center">
              <span className="ml-[5px] align-middle">
                {t('join-community')}
              </span>
            </div>
          </a>
        </Link>
      </div>
      <div
        className="mt-[32px] relative"
        onClick={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_body_video_click',
          })
          setPlayMaskShow && setPlayMaskShow(true)
        }}
      >
        <Image
          src="https://cdn.illacloud.com/official-website/img/home/playVideoCover.png"
          width="2080"
          height="1294"
          alt="Screenshot of ILLA Cloud app editor"
        />
      </div>
    </div>
  )
}

export default BannerMobile
