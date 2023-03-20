import { ILLA_LOGO } from '@/img/home/svg'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Community } from '@/constants/concat'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { IllaLogo } from '@/img/public/illa-logo'
import clsx from 'clsx'
import { sendTagEvent } from '@/utils/gtag'
import { saveAs } from 'file-saver'

function renderItem (title, items) {
  return (
    <div
      key={title}
      className="w-1/2   xs:w-1/5  flex flex-col  items-start  justify-center mt-[32px] xs:mt-0 "
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
                onClick={() => {
                  sendTagEvent({
                    action: 'click',
                    category: item.tagCategory,
                    label: item.title,
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
  const translateY = useTransform(scrollYProgress, [0.91, 1], [-140, 0])

  const waysData = [
    {
      title: t('footer.product'),
      items: [
        {
          title: 'ILLA Builder',
          href: 'https://github.com/illacloud/illa-builder',
          tagCategory: 'homepage_footer_builder_click',
        },
        // { title: 'ILLA Cloud', href: 'https://github.com/illacloud/illa' },
        {
          title: 'ILLA Design',
          href: 'https://github.com/illacloud/illa-design',
          tagCategory: 'homepage_footer_design_click',
        },
      ],
    },
    {
      title: t('footer.resources'),
      items: [
        {
          title: 'MySQL',
          href: 'https://www.mysql.com/',
          tagCategory: 'homepage_footer_mysql_click',
        },
        // { title: 'Postgres', href: 'https://www.postgresql.org/' },
        // { title: 'Redis', href: 'https://redis.io/' },
        {
          title: 'Rest API',
          href: 'https://restfulapi.net/',
          tagCategory: 'homepage_footer_restapi_click',
        },
      ],
    },
    {
      title: t('footer.company'),
      items: [
        {
          title: t('footer.media'),
          href: 'https://illa-cloud-storage.illacloud.com/system-assets/media-kit/illa_media_kit.20230228.zip',
          downloadName: 'ILLA Media Kit.zip',
          tagCategory: 'homepage_footer_mediakit_click',
        },
        {
          title: 'Status',
          href: 'https://status.illacloud.com/',
          tagCategory: 'homepage_footer_status_click',
        },
      ],
    },
  ]

  return (
    <>
      <div
        className={clsx(
          'w-full flex-col items-center  h-[440px] px-[120px] hidden xs:flex',
          noHome ? 'bg-[#fafafa]' : 'bg-white-01',
        )}
      >
        <motion.div
          className="flex w-full grow justify-center items-center flex translate-y-[-140px] z-[1] color-garyBlue-01"
          style={{
            translateY,
          }}
        >
          <div className=" w-full justify-center items-start flex ">
            <div className="mr-[20px]  w-full xs:w-1/5 flex xs:flex-col  justify-center">
              <Link legacyBehavior href={'/'}>
                <a>
                  <ILLA_LOGO />
                </a>
              </Link>
              <span className="text-garyBlue-02 grow-1 text-[12px] mt-[16px]">
                Create with ❤️ by ILLA
              </span>
            </div>
            {waysData.map((item) => renderItem(item.title, item.items))}
            <div className="w-full  xs:w-1/5 flex flex-row xs:flex-col items-start justify-center rounded-[32px]">
              <div className="text-[16px] text-garyBlue-02 font-bold mb-[16px] hidden xs:block">
                {t('footer.community')}
              </div>
              {Community?.map((item, index) => (
                <Link legacyBehavior key={item.tagCategory} href={item.href}>
                  <a
                    className="xs:mb-[12px] text-garyBlue-01 flex flex-row items-center gap-[8px]"
                    onClick={() => {
                      sendTagEvent({
                        action: 'click',
                        category: item.tagCategory,
                        value: item.href,
                      })
                    }}
                  >
                    <span>{item.icon}</span>
                    <span className="hidden xl:block">{item.label}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-wrap items-center px-[20px] py-[40px] w-full xs:hidden bg-[#fafafa]">
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
