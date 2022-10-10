import { ILLA_LOGO } from '@/img/home/svg'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { Community } from '@/constants/concat'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

function renderItem(title, items) {
  return (
    <div
      key={title}
      className="w-1/2   sm:w-1/5  flex flex-col  items-start  justify-center mt-[32px] sm:mt-0 "
    >
      <div className="text-[16px] text-[#1d2129] font-bold mb-[16px]">
        {title}
      </div>
      <div className="flex flex-col text-[14px]  font-normal cursor-pointer ">
        {items?.map((item) => (
          <NextLink key={item.title} href={item.href ?? '/'}>
            <a className="mb-[12px]">{item.title}</a>
          </NextLink>
        ))}
      </div>
    </div>
  )
}

export function Footer({ noHome = false }) {
  const { t } = useTranslation('home')
  const { scrollYProgress } = useViewportScroll()
  const translateY = useTransform(scrollYProgress, [0.91, 1], [-140, 0])

  const waysData = [
    {
      title: t('footer.product'),
      items: [
        {
          title: 'ILLA Builder',
          href: 'https://github.com/illa-family/illa-builder',
        },
        // { title: 'ILLA Cloud', href: 'https://github.com/illa-family/illa' },
        {
          title: 'ILLA Design',
          href: 'https://github.com/illa-family/illa-design',
        },
      ],
    },
    {
      title: t('footer.resources'),
      items: [
        { title: 'MySQL', href: 'https://www.mysql.com/' },
        // { title: 'Postgres', href: 'https://www.postgresql.org/' },
        // { title: 'Redis', href: 'https://redis.io/' },
        { title: 'Rest API', href: 'https://restfulapi.net/' },
      ],
    },
    {
      title: t('footer.company'),
      items: [
        // { title: t('footer.blog'), href: 'https://www.illa.cloud/blog' },
        { title: t('footer.career'), href: '/hire' },
      ],
    },
  ]

  return (
    <>
      <div className="w-full flex flex-col items-center bg-[#fafafa] h-[440px] px-[120px]">
        <motion.div
          className="flex w-full grow justify-center items-center flex translate-y-[-140px] z-[1]"
          style={{
            translateY,
          }}
        >
          <div className=" w-full justify-center items-start flex ">
            <div className="mr-[20px]  w-full sm:w-1/5 flex sm:flex-col  justify-center">
              <NextLink href={'/'}>
                <a className="cursor-pointer">
                  <ILLA_LOGO />
                </a>
              </NextLink>
              <span className="text-[#1d2129] grow-1 text-[12px] mt-[16px]">
                Create with ❤️ by ILLA
              </span>
            </div>
            {waysData.map((item) => renderItem(item.title, item.items))}
            <div className="w-full  sm:w-1/5 flex flex-row sm:flex-col items-start justify-center rounded-[32px]">
              <div className="text-[16px] text-[#1d2129] font-bold mb-[16px] hidden sm:block">
                {t('footer.community')}
              </div>
              {Community?.map((item, index) => (
                <NextLink key={item.href} href={item.href}>
                  <a className="cursor-pointer sm:mb-[12px] text-[#787E85]">
                    {item.icon}
                  </a>
                </NextLink>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-wrap items-center px-[20px] py-[40px] w-full sm:hidden">
        <div className="mr-[20px] w-full sm:w-1/6 flex sm:flex-col items-baseline justify-between">
          <ILLA_LOGO />
          <span className="text-[#a9aeb8] grow-1 text-[12px]">
            Create with ❤️ by ILLA
          </span>
        </div>
        <div className=" w-full justify-center items-center flex ">
          <div className=" w-full flex-wrap justify-start items-start flex ">
            {waysData.map((item) => renderItem(item.title, item.items))}
          </div>
        </div>
        <div className="w-full sm:w-1/5 sm:h-[212px] flex flex-row sm:flex-col items-start justify-center rounded-[32px] mt-[32px]">
          {Community?.map((item, index) => (
            <NextLink key={'icon' + index} href={item.href}>
              <a className="mx-[10px] mx-[10px] sm:mb-[12px] text-[#787E85]">
                {item.icon}
              </a>
            </NextLink>
          ))}
        </div>
        {/*{router.locale === 'zh-CN' ? (*/}
        {/*  <span className="text-[#a9aeb8] w-full text-center mt-[32px] text-[12px]">*/}
        {/*    <a className="block mb-[8px]" href="https://beian.miit.gov.cn/" target="_blank">*/}
        {/*      京ICP备2022010464号-2*/}
        {/*    </a>*/}
        {/*    <a href="https://beian.miit.gov.cn/" target="_blank">*/}
        {/*      版权所有&copy;  北京艾拉云科科技有限公司*/}
        {/*    </a>*/}
        {/*  </span>*/}
        {/*) : null}*/}
        {/*{router.locale === 'zh-CN' ? (*/}
        {/*  <div className="text-[#a9aeb8] w-full text-center mt-[20px] h-[48px]  text-[12px] mb-[40px]  hidden sm:block">*/}
        {/*    <a className="mr-[24px]" href="https://beian.miit.gov.cn/" target="_blank">*/}
        {/*      京ICP备2022010464号-2*/}
        {/*    </a>*/}
        {/*    <a href="https://beian.miit.gov.cn/" target="_blank">*/}
        {/*      版权所有&copy; 北京艾拉云科科技有限公司*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*) : null}*/}
      </div>
    </>
  )
}
