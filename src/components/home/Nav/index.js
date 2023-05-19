import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import { GithubIcon } from '@/img/public/github'
import { ProductSelect } from '@/components/home/product-select'
import Link from 'next/link'
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
import { BlackDisCordIcon } from '@/img/public/blackDisCord'
import { BlackGithubIcon } from '@/img/public/blackGitHub'

export const Nav = (props) => {
  const {
    githubStarts,
    whiteTheme = false,
    hasButton = true,
    onChangeShow,
    customStyle,
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
        style={customStyle || {}}
      >
        <div className="flex absolute left-[40px] items-center">
          <Link legacyBehavior href="/">
            <a className=" w-[51px] h-[24px] flex items-center">
              {whiteTheme ? <IllaLogo /> : <IllaLogoWhiteIcon />}
            </a>
          </Link>
          <div className="flex items-center gap-[4px] ml-[24px]">
            {/* <LanguageSelect buttonColorChange={!whiteTheme} /> */}
            {hasButton && (
              <motion.div
                className="flex items-center gap-[4px] ml-[24px]"
                style={{ opacity: opacity }}
              >
                <SocialButton
                  icon={whiteTheme ? <BlackGithubIcon /> : <GithubIcon />}
                  whiteTheme={whiteTheme}
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
                  icon={whiteTheme ?<BlackDisCordIcon /> :<DiscordIcon />}
                  whiteTheme={whiteTheme}
                  text="Discord"
                  href="https://discord.com/invite/illacloud"
                  onClick={() => {
                    sendTagEvent({
                      action: 'click',
                      category: 'homepage_slide_menu_discord_click',
                      label: 'Discord',
                      value: 'https://discord.com/invite/illacloud',
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
              whiteTheme ? 'text-garyBlue-02' : 'text-white-01',
            )}
          >
            <ProductSelect buttonColorChange={!whiteTheme} />
            <Link legacyBehavior href="/pricing">
              <a
                className="px-[16px] text-center"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_menu_doc_click',
                    label: t('nav.pricing'),
                  })
                }}
              >
                {t('nav.pricing')}
              </a>
            </Link>
            <Link legacyBehavior href="/docs/about-illa">
              <a
                className="px-[16px] text-center"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_menu_doc_click',
                    label: t('nav.doc'),
                  })
                }}
              >
                {t('nav.doc')}
              </a>
            </Link>
            <FlowUsSelect buttonColorChange={!whiteTheme} />
            <Link legacyBehavior href="https://blog.illacloud.com/">
              <a
                className="px-[16px] text-center"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_menu_blog_click',
                    label: t('nav.blog'),
                  })
                }}
              >
                {t('nav.blog')}
              </a>
            </Link>
          </div>
        </div>
        {hasButton && (
          <motion.div
            className={clsx(
              'flex items-center content-between gap-[16px] absolute right-[40px]',
            )}
            style={{ opacity: opacity }}
          >
            <span
              className={clsx(
                'h-[40px] border-[1px] rounded-[8px] px-[24px] py-[8px] cursor-pointer',
                whiteTheme ? 'bg-garyBlue-09 border-garyBlue-09  text-garyBlue-02' : 'bg-blackAlpha-05 border-white-01 text-white-01',
              )}
              onClick={() => {
                sendTagEvent({
                  action: 'click',
                  category: 'homepage_partner_apply_click',
                  label: t('nav.bookDemo'),
                })
                onChangeShow()
              }}
            >
              {t('nav.bookDemo')}
            </span>
            <Link legacyBehavior href="https://cloud.illacloud.com/">
              <a
                className="h-[40px] bg-tech-purple-01 rounded-[8px] px-[24px] py-[8px] text-white-01 hover:bg-tech-purple-02 active:bg-tech-purple-n-01"
                onClick={() => {
                  // eslint-disable-next-line no-undef
                  gtagReportConversion && gtagReportConversion()
                  sendTagEvent({
                    action: 'click',
                    category: 'homepage_slide_menu_live_demo_click',
                    label: t('illa-Cloud'),
                    value: 'https://cloud.illacloud.com/',
                  })
                }}
              >
                {t('illa-Cloud')}
              </a>
            </Link>
          </motion.div>
        )}
      </div>
      <div className="justify-between  px-[20px] w-full h-[64px] flex items-center xl:hidden">
        <Link legacyBehavior href="/">
          <a className="flex items-center w-[42.5px] h-[20px]">
            {whiteTheme ? <IllaLogo /> : <IllaLogoWhiteIcon />}
          </a>
        </Link>
        <span
          onClick={() => {
            sendTagEvent({
              action: 'click',
              category: 'homepage_menu_unfold_mob_click',
              value: 'unfold',
            })
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
      <Menu
        menuExpand={menuExpand}
        onChangeShow={onChangeShow}
        closeMenu={() => {
          sendTagEvent({
            action: 'click',
            category: 'homepage_menu_fold_mob_click',
            value: 'fold',
          })
          setMenuExpand(false)
        }}
      />
    </>
  )
}
