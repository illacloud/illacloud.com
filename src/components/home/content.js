import NextLink from 'next/link'
import { WaysIcon } from '@/img/home/svg'
import { ContentItem } from '@/components/home/content-item'
import { useTranslation } from 'next-i18next'

function renderItem(icon, title, des, href) {
  return (
    <a className="sm:w-1/2 " href="/">
      <NextLink href={href ?? '/'}>
        <div className="bg-white/[0.12] w-full sm:w-auto flex flex-col items-start justify-center p-[16px] sm:p-[32px] mt-[16px] mr-4  rounded-[32px]">
          {icon}
          <div className="text-[16px] mt-[12px] mb-[8px]">{title}</div>
          <div className="text-[12px]">{des}</div>
        </div>
      </NextLink>
    </a>
  )
}

export function Content() {
  const { t } = useTranslation('home')
  const waysData = [
    {
      icon: <WaysIcon />,
      title: t('deployment.illa-cloud.title'),
      des: t('deployment.illa-cloud.des'),
      href: '/',
    },
    {
      icon: <WaysIcon />,
      title: t('deployment.illa-CLI.title'),
      des: t('deployment.illa-CLI.des'),
      href: '/',
    },
    {
      icon: <WaysIcon />,
      title: t('deployment.kubernetes.title'),
      des: t('deployment.kubernetes.des'),
      href: '/',
    },
    {
      icon: <WaysIcon />,
      title: t('deployment.docker.title'),
      des: t('deployment.docker.des'),
      href: '/',
    },
  ]
  return (
    <div className="w-full ">
      {/*page 01*/}
      <ContentItem
        img={require('@/img/home/4.png').default}
        contentNode={
          <>
            <div className="leading-[29px] sm:leading-[58px]">
              {t('content.ui-library.title-1')}
              {t('content.ui-library.title-2') && (
                <span className="text-[#000000] bg-[#d4fcca] px-[16px] ml-[16px] rounded-full ">
                  {t('content.ui-library.title-2')}
                </span>
              )}
            </div>
            {t('content.ui-library.title-3') && (
              <span className="text-[#000000] bg-[#d4fcca] px-[16px] mr-[16px] rounded-full ">
                {t('content.ui-library.title-3')}
              </span>
            )}
            <span className="leading-[29px] sm:leading-[58px] ">
              {t('content.ui-library.title-4')}
            </span>
            <div className="text-[16px] opacity-90 w-full sm:w-[520px] mt-[8px] font-normal">
              {t('content.ui-library.introduction')}
            </div>
            <div className="text-[16px] text-[#bca6f7] opacity-90 mt-[8px]  font-normal">
              {t('content.ui-library.goto')} 👍 →
            </div>
          </>
        }
      />
      {/*page 02*/}
      <ContentItem
        img={require('@/img/home/2.png').default}
        contentNode={
          <>
            {t('content.date-integrate.title-1')}
            {t('content.date-integrate.title-2') && (
              <span className="text-[#000000] bg-[#fbded5] px-[16px] ml-[16px] rounded-full ">
                {t('content.date-integrate.title-2')}
              </span>
            )}
            <div className="leading-[29px] sm:leading-[58px]">
              {t('content.date-integrate.title-3') && (
                <span className="text-[#000000] bg-[#fbded5] px-[16px] mr-[16px] rounded-full ">
                  {t('content.date-integrate.title-3')}
                </span>
              )}
              <span className="leading-[29px] sm:leading-[58px] ">
                {t('content.date-integrate.title-4')}
              </span>
            </div>
            <div className="text-[16px] opacity-90 w-full sm:w-[520px]  font-normal pt-[16px]">
              {t('content.date-integrate.introduction')}
            </div>
            <div className="text-[16px] text-[#bca6f7] opacity-90  font-normal">
              {t('content.date-integrate.goto')} 😀 →
            </div>
          </>
        }
      />
      {/*page 03*/}
      <ContentItem
        img={require('@/img/home/1.png').default}
        contentNode={
          <>
            <div className="leading-[29px] sm:leading-[58px]">
              {t('content.for-developer.title-1')}
              <span className="text-[#000000] bg-[#fdf1c0] px-[16px] ml-[16px] rounded-full ">
                {t('content.for-developer.title-2')}
              </span>
            </div>
            <div className="text-[16px] opacity-90 w-full sm:w-[520px] ] font-normal pt-[16px]">
              {t('content.for-developer.introduction')}
            </div>
            <div className="text-[16px] text-[#bca6f7] opacity-90  font-normal">
              {t('content.for-developer.goto')} 😋 →
            </div>
          </>
        }
      />
      {/*page 04*/}
      <ContentItem
        img={require('@/img/home/3.png').default}
        contentNode={
          <>
            {t('content.collaborative-develop.title-1')}
            {t('content.collaborative-develop.title-2') && (
              <span className="text-[#000000] bg-[#fbded5] px-[16px] ml-[16px] rounded-full ">
                {t('content.collaborative-develop.title-2')}
              </span>
            )}
            <div className="leading-[29px] sm:leading-[58px]">
              {t('content.collaborative-develop.title-3') && (
                <span className="text-[#000000] bg-[#fbded5] px-[16px] mr-[16px] rounded-full ">
                  {t('content.collaborative-develop.title-3')}
                </span>
              )}
              <span className="leading-[29px] sm:leading-[58px] ">
                {t('content.collaborative-develop.title-4')}
              </span>
            </div>
            <div className="text-[16px] opacity-90 w-full sm:w-[520px] font-normal">
              {t('content.collaborative-develop.introduction')}
            </div>
            <div className="text-[16px] text-[#bca6f7] opacity-90  font-normal">
              {t('content.collaborative-develop.goto')} 🤠 →
            </div>
          </>
        }
      />
      {/*page 05*/}
      <div className="w-full flex justify-center bg-black rounded-b-[80px]">
        <div className="flex sm:h-screen py-[40px] flex-col w-full   sm:w-[1040px]  sm:w-3/5  justify-center sm:items-center text-[28px] sm:text-[48px] font-bold text-white px-[48px] sm:px-0 rounded-b-[40px] sm:rounded-b-[80px]">
          <div className="leading-[29px] w-full sm:leading-[58px] "> {t('deployment.title')}</div>
          <div className="text-[16px] opacity-90 w-full sm:w-full mt-[8px] font-normal opacity-90">
            {t('deployment.introduction')}
          </div>
          <div className="mt-[16px] flex flex-wrap sm:justify-between ">
            {waysData.map((item) => renderItem(item.icon, item.title, item.des, item.href))}
          </div>
        </div>
      </div>
    </div>
  )
}
