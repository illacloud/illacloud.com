import { CLIIcon, CloudIcon, KubernetesIcon, WaysIcon } from '@/img/home/svg'
import { ContentItem } from '@/components/home/content-item'
import { useTranslation } from 'next-i18next'
import React from 'react'
import NextLink from 'next/link'
import { Card } from '@/components/home/card'

export function Content() {
  const { t } = useTranslation('home')
  const waysData = [
    {
      icon: (
        <span className="h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]">
          <CloudIcon />
        </span>
      ),
      title: t('deployment.illa-cloud.title'),
      des: t('deployment.illa-cloud.des'),
      href: '/',
    },
    {
      icon: (
        <span className="h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]">
          <CLIIcon />
        </span>
      ),
      title: t('deployment.illa-CLI.title'),
      des: t('deployment.illa-CLI.des'),
      href: '/',
    },
    {
      icon: (
        <span className="h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]">
          <KubernetesIcon />
        </span>
      ),
      title: t('deployment.kubernetes.title'),
      des: t('deployment.kubernetes.des'),
      href: '/',
    },
    {
      icon: (
        <span className="h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]">
          <WaysIcon />
        </span>
      ),
      title: t('deployment.docker.title'),
      des: t('deployment.docker.des'),
      href: '/',
    },
  ]
  return (
    <div className="w-full bg-black ">
      {/*page 01*/}
      <ContentItem
        img={require('@/img/home/1.svg').default}
        contentNode={
          <>
            <div className="leading-[29px] sm:leading-[58px] flex flex-wrap gap-[8px] sm:gap-[16px]">
              {t('content.for-developer.title-1')}
              <span className="text-[#000000] bg-[#fdf1c0] px-[8px] sm:px-[16px] rounded-full ">
                {t('content.for-developer.title-2')}
              </span>
            </div>
            <div className="text-[14px] sm:text-[16px] opacity-90 w-full sm:w-[520px] ] font-normal pt-[8px] sm:pt-[16px]">
              {t('content.for-developer.introduction')}
            </div>
            <NextLink href="/docs/installation">
              <div className="text-[14px] sm:text-[16px] text-[#bca6f7] opacity-90   font-normal cursor-pointer mt-[12px] sm:mt-[16px]">
                {t('content.for-developer.goto')} 😋 →
              </div>
            </NextLink>
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
              <span className="text-[#000000] bg-[#fbded5] px-[8px] sm:px-[16px] sm:ml-[16px] ml-[8px] rounded-full ">
                {t('content.date-integrate.title-2')}
              </span>
            )}
            <div className="leading-[29px] sm:leading-[58px]">
              {t('content.date-integrate.title-3') && (
                <span className="text-[#000000] bg-[#fbded5] px-[8px] sm:px-[16px] sm:mr-[16px] mr-[8px] rounded-full ">
                  {t('content.date-integrate.title-3')}
                </span>
              )}
              <span className="leading-[29px] sm:leading-[58px] ">
                {t('content.date-integrate.title-4')}
              </span>
            </div>
            <div className="text-[14px] sm:text-[16px]  sm:text-[16px] opacity-90 w-full sm:w-[520px]  font-normal pt-[16px]">
              {t('content.date-integrate.introduction')}
            </div>
            <NextLink href="/docs/installation">
              <div className="text-[14px] sm:text-[16px] text-[#bca6f7] opacity-90  font-normal cursor-pointer  mt-[12px] sm:mt-[16px]">
                {t('content.date-integrate.goto')} 😀 →
              </div>
            </NextLink>
          </>
        }
      />
      {/*page 03*/}
      <ContentItem
        img={require('@/img/home/3.png').default}
        contentNode={
          <>
            {t('content.collaborative-develop.title-1')}
            {t('content.collaborative-develop.title-2') && (
              <span className="text-[#000000] bg-[#fbded5] px-[8px] sm:px-[16px] ml-[16px] rounded-full ">
                {t('content.collaborative-develop.title-2')}
              </span>
            )}
            <div className="leading-[29px] sm:leading-[58px]">
              {t('content.collaborative-develop.title-3') && (
                <span className="text-[#000000] bg-[#fbded5] px-[8px] sm:px-[16px] mr-[16px] rounded-full ">
                  {t('content.collaborative-develop.title-3')}
                </span>
              )}
              <span className="leading-[29px] sm:leading-[58px] ">
                {t('content.collaborative-develop.title-4')}
              </span>
            </div>
            <div className="text-[14px] sm:text-[16px]  opacity-90 w-full sm:w-[520px] font-normal pt-[8px] sm:pt-[16px]">
              {t('content.collaborative-develop.introduction')}
            </div>
            <NextLink href="/docs/installation">
              <div className="text-[16px] text-[#bca6f7] opacity-90 cursor-pointer  font-normal mt-[12px] sm:mt-[16px]">
                {t('content.collaborative-develop.goto')} 🤠 →
              </div>
            </NextLink>
          </>
        }
      />
      {/*page 04*/}
      <ContentItem
        img={require('@/img/home/4.svg').default}
        contentNode={
          <>
            <div className="leading-[29px] sm:leading-[58px]">
              {t('content.ui-library.title-1')}
              {t('content.ui-library.title-2') && (
                <span className="text-[#000000] bg-[#d4fcca] px-[8px] sm:px-[16px] sm:ml-[16px] ml-[8px] rounded-full ">
                  {t('content.ui-library.title-2')}
                </span>
              )}
            </div>
            {t('content.ui-library.title-3') && (
              <span className="text-[#000000] bg-[#d4fcca] px-[8px] sm:px-[16px] sm:mr-[16px] mr-[8px] rounded-full ">
                {t('content.ui-library.title-3')}
              </span>
            )}
            <span className="leading-[29px] sm:leading-[58px] ">
              {t('content.ui-library.title-4')}
            </span>
            <div className="text-[14px] sm:text-[16px]  opacity-90 w-full sm:w-[520px] mt-[8px] sm:mt-[16px]  font-normal">
              {t('content.ui-library.introduction')}
            </div>
            <NextLink href="/docs/installation">
              <div className="text-[16px] text-[#bca6f7] opacity-90 mt-[8px]  cursor-pointer  font-normal mt-[12px] sm:mt-[16px]">
                {t('content.ui-library.goto')} 👍 →
              </div>
            </NextLink>
          </>
        }
      />

      {/*page 05*/}
      <div className="w-full flex justify-center bg-black rounded-b-[40px] sm:rounded-b-[80px]">
        <div className="flex sm:h-screen py-[40px] flex-col w-full   sm:w-[1040px]   justify-center sm:items-center text-[28px] sm:text-[48px] font-bold text-white px-[48px] sm:px-0 rounded-b-[40px] sm:rounded-b-[80px]">
          <div className="leading-[29px] w-full sm:leading-[58px] "> {t('deployment.title')}</div>
          <div className="text-[14px] sm:text-[16px] opacity-90 w-full sm:w-full mt-[8px] sm:mt-[16px] font-normal opacity-90">
            {t('deployment.introduction')}
          </div>
          <div className="mt-[20px] sm:mt-[40px] flex flex-wrap sm:justify-between ">
            {waysData.map((item, index) => (
              <Card
                key={item.title + index}
                title={item.title}
                icon={item.icon}
                des={item.des}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
