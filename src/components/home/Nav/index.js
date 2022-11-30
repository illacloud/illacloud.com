import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import { GithubIcon } from '@/img/public/github'
import { LanguageSelect } from '@/components/home/language-select'
import { ProductSelect } from '@/components/home/product-select'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { SocialButton } from '@/components/home/Public/socialButton'
import clsx from 'clsx'
import { DiscordIcon } from '@/img/public/discord'
import { useTransform, useViewportScroll, motion } from 'framer-motion'
import { FlowUsSelect } from '@/components/home/Nav/flowUsSelect'
import { IllaLogo } from '@/img/public/illa-logo'
import { CloseIcon, MenuIcon, MenuWhiteIcon } from '@/img/home/svg'
import { useState } from 'react'
import { Menu } from '@/components/home/menu'
import { sendTagEvent } from '@/utils/gtag'

export const Nav = (props) => {
  const {
    githubStarts,
    onSubscribe,
    whiteTheme = false,
    hasButton = true,
  } = props
  const { t } = useTranslation('home')

  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0.01, 0.02], [0, 1])
  const [menuExpand, setMenuExpand] = useState(false)

  return (
    <>
      <div
        className={clsx(
          'fixed hidden xl:flex top-0 z-50 w-full  px-[40px] py-[16px] flex items-center backdrop-blur-[50px]',
          whiteTheme ? 'bg-[rgba(255,255,255,0.75)]' : 'bg-[rgba(0,0,0,0.75)]',
        )}
      >
        <div className="flex absolute left-[40px] items-center">
          <NextLink href="/">
            <span className="cursor-pointer w-[51px] h-[24px] flex items-center">
              {whiteTheme ? <IllaLogo /> : <IllaLogoWhiteIcon />}
            </span>
          </NextLink>
          <div className="flex items-center gap-[4px] ml-[24px]">
            <LanguageSelect buttonColorChange={!whiteTheme} />
            {hasButton && (
              <motion.div
                className="flex items-center gap-[4px] ml-[24px]"
                style={{ opacity: opacity }}
              >
                <SocialButton
                  icon={<GithubIcon />}
                  text={`${githubStarts} ${t('stars')}`}
                  href="https://github.com/illacloud/illa-builder"
                  onClick={() => {
                    sendTagEvent({
                      action: 'click',
                      category: 'homepage_slide_menu_github_click',
                      label: `${githubStarts} ${t('stars')}`,
                      value: 'https://github.com/illacloud/illa-builder',
                    })
                  }}
                />
                <SocialButton
                  icon={<DiscordIcon />}
                  text="Discord"
                  href="https://discord.gg/zKf3WKCufR"
                  onClick={() => {
                    sendTagEvent({
                      action: 'click',
                      category: 'homepage_slide_menu_discord_click',
                      label: 'Discord',
                      value: 'https://discord.gg/zKf3WKCufR',
                    })
                  }}
                />
              </motion.div>
            )}
          </div>
        </div>
        <div className="flex items-center w-full justify-center text-[16px]">
          <div
            className={clsx(
              'flex items-center',
              whiteTheme ? 'text-gray-01' : 'text-white-01',
            )}
          >
            <ProductSelect buttonColorChange={!whiteTheme} />
            <NextLink href="/docs/overview">
              <span
                className="px-[16px] text-center cursor-pointer"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_menu_doc_click',
                    label: t('nav.doc'),
                  })
                }}
              >
                {t('nav.doc')}
              </span>
            </NextLink>
            <NextLink href="/hire">
              <span
                className="px-[16px] text-center cursor-pointer"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_menu_career_click',
                    label: t('nav.career'),
                  })
                }}
              >
                {t('nav.career')}
              </span>
            </NextLink>
            <FlowUsSelect buttonColorChange={!whiteTheme} />
            <NextLink href="/blog">
              <span
                className="px-[16px] text-center cursor-pointer"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_menu_blog_click',
                    label: t('nav.blog'),
                  })
                }}
              >
                {t('nav.blog')}
              </span>
            </NextLink>
          </div>
        </div>
        {hasButton && (
          <motion.div
            className={clsx(
              'flex items-center content-between gap-[16px] absolute right-[40px]',
            )}
            style={{ opacity: opacity }}
          >
            <NextLink href="/docs/illa-cli">
              <button
                className="h-[40px]  bg-blackAlpha-05 border-[1px] border-white-01 rounded-[8px] px-[24px] py-[8px] text-white-01"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_slide_menu_self_hosted_click',
                    label: t('self-Hosted'),
                  })
                }}
              >
                {t('self-Hosted')}
              </button>
            </NextLink>
            <NextLink href="https://fast-try.illacloud.com/">
              <button
                className="h-[40px] bg-tech-purple-01 rounded-[8px] px-[24px] py-[8px] text-white-01 hover:bg-tech-purple-02 active:bg-tech-purple-n-01"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_slide_menu_live_demo_click',
                    label: t('illa-Cloud'),
                    value: 'https://fast-try.illacloud.com/',
                  })
                }}
              >
                {t('illa-Cloud')}
              </button>
            </NextLink>
          </motion.div>
        )}
      </div>
      <div className="justify-between  px-[20px] w-full h-[64px] flex items-center xl:hidden">
        <NextLink href="/">
          <span className="flex items-center w-[42.5px] h-[20px]">
            {whiteTheme ? <IllaLogo /> : <IllaLogoWhiteIcon />}
          </span>
        </NextLink>
        <span
          onClick={() => {
            setMenuExpand(() => !menuExpand)
          }}
        >
          {menuExpand ? (
            <CloseIcon />
          ) : whiteTheme ? (
            <MenuIcon />
          ) : (
            <MenuWhiteIcon />
          )}
        </span>
      </div>
      <Menu menuExpand={menuExpand} closeMenu={() => setMenuExpand(false)} />
    </>
  )
}
