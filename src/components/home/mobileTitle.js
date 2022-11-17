import { useTranslation } from 'next-i18next'
import { CloseIcon, MenuWhiteIcon, MobileTitleBgIcon } from '@/img/home/svg'
import NextLink from 'next/link'
import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import { Menu } from '@/components/home/menu'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import playVideoCover from '@/img/home/playVideoCover.png'
import * as ReactDOM from 'react-dom'
import { Player } from '@/components/home/player'
import { GithubIcon } from '@/img/public/github'
import { DiscordIcon } from '@/img/public/discord'

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
  const { setPlayMaskShow, githubStarts, onSubscribe } = props

  useEffect(() => {
    document.body.style.overflow = menuExpand ? 'hidden' : 'auto'
  }, [menuExpand])
  return (
    <div className="w-full xl:hidden	">
      <div className="px-[20px] h-full flex flex-col items-center justify-center w-full">
        <div className="text-white-01 text-[40px] text-center font-bold pt-[20px] leading-[48px]">
          {t('slogan-1')}
        </div>
        <div className="mt-[32px] text-white-01 text-[14px] text-center">
          {t('description')}
        </div>
        <div className="mt-[32px] w-full flex gap-[16px]">
          <NextLink href="/docs/illa-cli">
            <button className="w-full border-white border-[1px] py-[12px] px-[16px] rounded-[8px] text-white-01 text-[16px]">
              {t('self-Hosted')}
            </button>
          </NextLink>
          <NextLink href="https://fast-try.illacloud.com/">
            <button className="w-full bg-tech-purple-01 py-[12px] px-[16px] rounded-[8px] text-white-01 text-[16px]">
              {t('illa-Cloud')}
            </button>
          </NextLink>
        </div>
        <div className="flex items-center mt-[32px] gap-[40px]">
          <div
            className="flex items-center gap-[8px]"
            onClick={() => {
              window.open(
                'https://github.com/illacloud/illa-builder',
                '__blank',
              )
            }}
          >
            <GithubIcon />
            <span className="text-white-01 text-[13px]">
              {githubStarts} {t('stars')}
            </span>
          </div>
          <div
            className="flex items-center gap-[8px]"
            onClick={() => {
              window.open('https://discord.gg/zKf3WKCufR', '__blank')
            }}
          >
            <DiscordIcon />
            <span className="text-white-01 text-[13px]">
              {t('join-community')}
            </span>
          </div>
        </div>
        <div
          className="mt-[32px] relative"
          onClick={() => {
            setPlayMaskShow(true)
          }}
        >
          <Image
            src={playVideoCover}
            width="2080"
            height="1294"
            alt="play video"
          />
        </div>
      </div>
    </div>
  )
}
