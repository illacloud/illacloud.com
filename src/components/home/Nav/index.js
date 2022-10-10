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

export const Nav = (props) => {
  const { githubStarts, onSubscribe } = props
  const { t } = useTranslation('home')

  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0.033, 0.054], [0, 1])

  return (
    <>
      <div className="fixed hidden xl:flex top-0 z-50 w-full bg-[rgba(0,0,0,0.75)] px-[40px] py-[16px] flex items-center backdrop-blur-[50px]">
        <div className="flex absolute left-[40px] items-center">
          <NextLink href="/" locale={false}>
            <span className="cursor-pointer">
              <IllaLogoWhiteIcon />
            </span>
          </NextLink>
          <div className="flex items-center gap-[4px] ml-[24px]">
            <LanguageSelect />
            <motion.div
              className="flex items-center gap-[4px] ml-[24px]"
              style={{ opacity: opacity }}
            >
              <SocialButton
                icon={<GithubIcon />}
                text={`${githubStarts} ${t('stars')}`}
                href="https://github.com/illa-family"
              />
              <SocialButton
                icon={<DiscordIcon />}
                text="discord"
                href="https://discord.gg/zKf3WKCufR"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex items-center w-full justify-center">
          <div className="flex items-center text-white">
            <ProductSelect />
            <NextLink href="/docs/overview">
              <span className="px-[16px] text-center cursor-pointer">
                {t('nav.doc')}
              </span>
            </NextLink>
            <NextLink href="/hire">
              <span className="px-[16px] text-center cursor-pointer">
                {t('nav.career')}
              </span>
            </NextLink>
            <FlowUsSelect />
          </div>
        </div>
        <motion.div
          className={clsx(
            'flex items-center content-between gap-[16px] absolute right-[40px]',
          )}
          style={{ opacity: opacity }}
        >
          <NextLink href="/docs/illa-cli">
            <button className="h-[40px]  bg-blackAlpha-05 border-[1px] border-white-01 rounded-[8px] px-[24px] py-[8px] text-white-01">
              {t('self-Hosted')}
            </button>
          </NextLink>
          <button
            onClick={() => {
              onSubscribe(true)
            }}
            className="h-[40px] bg-tech-purple-01 rounded-[8px] px-[24px] py-[8px] text-white-01 hover:bg-tech-purple-02 active:bg-purple-n-01"
          >
            {t('illa-Cloud')}
          </button>
        </motion.div>
      </div>
    </>
  )
}
