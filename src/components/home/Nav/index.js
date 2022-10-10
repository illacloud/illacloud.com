import { IllaLogoWhiteIcon } from '@/img/public/illa-logo-white'
import { GithubIcon } from '@/img/public/github'
import { LanguageSelect } from '@/components/home/language-select'
import { ProductSelect } from '@/components/home/product-select'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { SocialButton } from '@/components/home/Public/socialButton'
import clsx from 'clsx'
import { DiscordIcon } from '@/img/public/discord'

export const Nav = (props) => {
  const { hasCoverButton = false } = props
  const { t } = useTranslation('home')

  return (
    <div className="fixed w-full top-0 bg-gray-01 px-[40px] py-[16px] z-10">
      <div className="flex items-center w-full">
        <NextLink href="/">
          <IllaLogoWhiteIcon />
        </NextLink>
        <div className="flex items-center justify-between ml-[24px] w-full">
          <div className="flex items-center gap-[4px]">
            {hasCoverButton && (
              <>
                <SocialButton icon={<GithubIcon />} text="4000000 stars" />
                <SocialButton icon={<DiscordIcon />} text="discord" />
              </>
            )}
            <LanguageSelect />
          </div>
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
          </div>
          <div
            className={clsx(
              'flex items-center content-between gap-[16px]',
              hasCoverButton ? 'visible' : 'invisible',
            )}
          >
            <NextLink href="/docs/illa-cli">
              <button className="h-[40px]  bg-blackAlpha-05 border-[1px] border-white-01 rounded-[8px] px-[24px] py-[8px] text-white-01">
                {t('self-Hosted')}
              </button>
            </NextLink>
            <button className="h-[40px] bg-tech-purple-01 rounded-[8px] px-[24px] py-[8px] text-white-01 hover:bg-tech-purple-02 active:bg-purple-n-01">
              {t('illa-Cloud')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
