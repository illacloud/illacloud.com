import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import * as ReactDOM from 'react-dom'
import { Player } from '@/components/home/player'
import Publicize from '@/components/home/NewContent/Publicize'
import { StarIcon } from '@/img/public/star'
import { GoIcon } from '@/img/public/go'
import { LinearGithubIcon } from '@/img/public/linearGithub'
import { LinearDiscordIcon } from '@/img/public/linearDiscord'
import { sendTagEvent } from '@/utils/gtag'

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full z-50">
      <Player menuExpand closeMenu={onClose} />
    </div>,
    document.body,
  )
}

export const MobileTitle = (props) => {
  const { t } = useTranslation('home')
  const [menuExpand, setMenuExpand] = useState(false)
  const { setPlayMaskShow, githubStarts } = props

  useEffect(() => {
    document.body.style.overflow = menuExpand ? 'hidden' : 'auto'
  }, [menuExpand])
  return (
    <div className="w-full xl:hidden	">
      <Publicize />
      <div className="px-[20px] h-full flex flex-col items-center justify-center w-full gap-[32px]">
        <div className="flex flex-col items-center gap-[12px]">
          <h1 className="text-white-01 text-[40px] text-center font-bold leading-[48px] mt-[60px]">
            {t('slogan-1')}
          </h1>
        </div>
        <div className="text-white-01 text-[14px] text-center">
          {t('description')}
        </div>
        <div className="w-full flex gap-[16px]">
          <Link legacyBehavior href="/docs/illa-cli">
            <a
              className="w-full border-white border-[1px] py-[12px] px-[16px] rounded-[8px] text-white-01 text-[16px] font-normal text-center"
              onClick={() => {
                sendTagEvent({
                  action: 'click',
                  category: 'homepage_body_self_hosted_click',
                  label: t('self-Hosted'),
                })
              }}
            >
              {t('self-Hosted')}
            </a>
          </Link>
          <Link legacyBehavior href="https://cloud.illacloud.com/">
            <a
              className="w-full bg-tech-purple-01 py-[12px] px-[16px] rounded-[8px] text-white-01 text-[16px] font-normal text-center"
              onClick={() => {
                // eslint-disable-next-line no-undef
                gtagReportConversion && gtagReportConversion()
                sendTagEvent({
                  action: 'click',
                  category: 'homepage_body_live_demo_click',
                  label: t('illa-Cloud'),
                  value: 'https://cloud.illacloud.com/',
                })
              }}
            >
              {t('illa-Cloud')}
            </a>
          </Link>
        </div>
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
                <StarIcon />
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
                <GoIcon />
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
            setPlayMaskShow(true)
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
    </div>
  )
}
