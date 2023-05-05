import { ILLA_LOGO } from '@/img/home/svg'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Community } from '@/constants/concat'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { IllaLogo } from '@/img/public/illa-logo'
import clsx from 'clsx'
import { sendTagEvent } from '@/utils/gtag'
import { saveAs } from 'file-saver'
import { LanguageSelect } from '@/components/home/language-select'
import Language from '@/img/home/language.svg'
import { useRouter } from 'next/router'

function renderItem (title, items) {
  return (
    <div
      key={title}
      className="w-1/2   xl:w-1/5  flex flex-col  items-start  justify-center mt-[32px] xl:mt-0 "
    >
      <div className="text-[16px] text-garyBlue-02 font-bold mb-[16px]">
        {title}
      </div>
      <div className="flex flex-col text-[14px] text-garyBlue-02 font-normal cursor-pointer ">
        {items?.map((item) => {
          if (item.downloadName) {
            return (
              <span
                key={item.title}
                className="mb-[12px]"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: item.tagCategory,
                    label: item.title,
                    value: item.href,
                  })
                  saveAs(item.href, item.downloadName)
                }}
              >
                {item.title}
              </span>
            )
          }
          return (
            <Link legacyBehavior key={item.title} href={item.href ?? '/'}>
              <a
                className="mb-[12px]"
                target={item.isBlank ? '_blank' : '_self'}
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: item.tagCategory,
                    label: item.target || item.title,
                    value: item.href,
                  })
                }}
              >
                {item.title}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function Footer ({ noHome = false }) {
  const { t } = useTranslation('home')
  const { scrollYProgress } = useViewportScroll()
  const translateY = useTransform(scrollYProgress, [0.91, 1], [-120, 0])
  const router = useRouter()
  const curLanguage = router.locale

  const waysData = [
    {
      title: t('footer.product'),
      items: [
        {
          title: t('footer.integrations'),
          href: '/integrations',
          tagCategory: 'homepage_footer_integration_click',
          target: 'Integrations'
        },
        {
          title: t('footer.components'),
          href: '/components',
          tagCategory: 'homepage_footer_component_click',
          target: 'Components'
        },
        {
          title: 'ILLA Builder',
          href: 'https://github.com/illacloud/illa-builder',
          tagCategory: 'homepage_footer_builder_click',
        },
        {
          title: 'ILLA Design',
          href: 'https://github.com/illacloud/illa-design',
          tagCategory: 'homepage_footer_design_click',
        },
        {
          title: t('footer.changelog'),
          href: 'https://github.com/illacloud/illa-builder/releases',
          tagCategory: 'homepage_footer_changelog_click',
          target: 'Changelog'
        },
        {
          title: t('footer.roadmap'),
          href: 'https://github.com/orgs/illacloud/projects/4',
          tagCategory: 'homepage_footer_roadmap_click',
          target: 'Roadmap'
        },
      ],
    },
    {
      title: t('footer.resources'),
      items: [
        {
          title: t('footer.blog'),
          href: 'https://blog.illacloud.com/',
          tagCategory: 'homepage_footer_blog_click',
          target: 'Blog'
        },
        {
          title: t('footer.documentation'),
          href: 'https://www.illacloud.com/docs/about-illa',
          tagCategory: 'homepage_footer_documentation_click',
          target: 'Documentation'
        },
      ],
    },
    {
      title: t('footer.company'),
      items: [
        {
          title: t('footer.about-us'),
          href: 'https://www.illacloud.com/docs/about-illa',
          tagCategory: 'homepage_footer_about us_click',
          target: 'About us'
        },
        {
          title: t('footer.media'),
          href: 'https://illa-cloud-storage.illacloud.com/system-assets/media-kit/illa_media_kit.20230228.zip',
          downloadName: 'ILLA Media Kit.zip',
          tagCategory: 'homepage_footer_mediakit_click',
        },
        {
          title: t('footer.privacy-policy'),
          href: `https://cloud.illacloud.com/privacy-policy?lng=${curLanguage}`,
          tagCategory: 'homepage_footer_privacy_policy_click',
          isBlank: true
        },
        {
          title: t('footer.terms-of-service'),
          href: `https://cloud.illacloud.com/terms-and-conditions?lng=${curLanguage}`,
          tagCategory: 'homepage_footer_terms_of_service_click',
          isBlank: true
        },
        {
          title: t('footer.status'),
          href: 'https://status.illacloud.com/',
          tagCategory: 'homepage_footer_status_click',
          target: 'Status'
        },
      ],
    },
  ]

  return (
    <>
      <div
        className={clsx(
          'w-full flex-col items-center  h-[440px] px-[120px] hidden xl:flex bg-white-01',
        )}
      >
        <motion.div
          className="flex w-full grow justify-center items-center flex translate-y-[-120px] z-[1] color-garyBlue-01"
          style={{
            translateY,
          }}
        >
          <div className=" w-full justify-center items-start flex ">
            <div className="mr-[20px]  w-full xl:w-1/5 flex xl:flex-col  justify-center lg:gap-[16px]">
              <div>
                <Link legacyBehavior href={'/'}>
                  <a>
                    <ILLA_LOGO />
                  </a>
                </Link>
                <span className="text-garyBlue-02 grow-1 text-[12px] mt-[16px]">
                  Create with ❤️ by ILLA
                </span>
              </div>
              <div className='hidden lg:flex w-[200px] flex flex-row gap-[8px]'>
                <img src={Language} alt='language'/>
                <LanguageSelect buttonColorChange={false} />
              </div>
            </div>
            {waysData.map((item) => renderItem(item.title, item.items))}
            <div className="w-full  xl:w-1/5 flex flex-row xl:flex-col items-start justify-center rounded-[32px]">
              <div className="text-[16px] text-garyBlue-02 font-bold mb-[16px] hidden xl:block">
                {t('footer.community')}
              </div>
              {Community?.map((item, index) => (
                <Link legacyBehavior key={item.tagCategory} href={item.href}>
                  <a
                    className="xl:mb-[12px] text-garyBlue-01 flex flex-row items-center gap-[8px]"
                    onClick={() => {
                      sendTagEvent({
                        action: 'click',
                        category: item.tagCategory,
                        label: item.label,
                        value: item.href,
                      })
                    }}
                  >
                    <span>{item.icon}</span>
                    <span className="hidden xl:block text-[14px]">{item.label}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-wrap items-center px-[20px] py-[40px] w-full xl:hidden bg-white-01">
        <div className="w-full xs:w-1/6 flex xs:flex-col items-center justify-between">
          <span className="flex  w-[34px] h-[16px] items-center">
            <IllaLogo />
          </span>
          <span className="text-garyBlue-04 grow-1 text-[12px]">
            Create with ❤️ by ILLA
          </span>
        </div>
        <div className=" w-full justify-center items-center flex text-garyBlue-01">
          <div className=" w-full flex-wrap justify-start items-start flex ">
            {waysData.map((item) => renderItem(item.title, item.items))}
          </div>
        </div>
        <div className="w-full xs:w-1/5 xs:h-[212px] flex flex-row xs:flex-col items-start justify-center rounded-[32px] mt-[32px]">
          {Community?.map((item, index) => (
            <Link legacyBehavior key={'icon' + index} href={item.href}>
              <a
                className="mx-[10px] mx-[10px] xs:mb-[12px] text-garyBlue-03"
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: item.tagCategory,
                    label: item.label,
                    value: item.href,
                  })
                }}
              >
                {item.icon}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
