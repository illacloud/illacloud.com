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
        <span className="h-[32px] w-[32px] xl:h-[40px] xl:w-[40px]">
          <CloudIcon />
        </span>
      ),
      title: t('deployment.illa-cloud.title'),
      des: t('deployment.illa-cloud.des'),
      href: '/',
    },
    {
      icon: (
        <span className="h-[32px] w-[32px] xl:h-[40px] xl:w-[40px]">
          <CLIIcon />
        </span>
      ),
      title: t('deployment.illa-CLI.title'),
      des: t('deployment.illa-CLI.des'),
      href: '/',
    },
    {
      icon: (
        <span className="h-[32px] w-[32px] xl:h-[40px] xl:w-[40px]">
          <KubernetesIcon />
        </span>
      ),
      title: t('deployment.kubernetes.title'),
      des: t('deployment.kubernetes.des'),
      href: '/',
    },
    {
      icon: (
        <span className="h-[32px] w-[32px] xl:h-[40px] xl:w-[40px]">
          <WaysIcon />
        </span>
      ),
      title: t('deployment.docker.title'),
      des: t('deployment.docker.des'),
      href: '/',
    },
  ]
  return (
    <div className="w-full bg-black rounded-b-[40px]">
      {/*page 01*/}
      <ContentItem
        img={require('@/img/home/1.svg').default}
        contentNode={
          <>
            <div className="leading-[29px] xl:leading-[58px] flex flex-wrap gap-[8px] xl:gap-[16px] ">
              <span>{t('content.for-developer.title-1')}</span>
              <span className="text-[#000000] bg-[#fdf1c0] px-[8px] xl:px-[16px] rounded-full ">
                {t('content.for-developer.title-2')}
              </span>
            </div>
            <div className="text-[14px] xl:text-[16px] opacity-90 w-full  font-normal pt-[8px] xl:pt-[16px]">
              {t('content.for-developer.introduction')}
            </div>
            <NextLink href="/docs/overview">
              <div className="text-[14px] xl:text-[16px] text-[#bca6f7] opacity-90   font-normal cursor-pointer mt-[12px] xl:mt-[16px]">
                {t('content.for-developer.goto')} 😋 →
              </div>
            </NextLink>
          </>
        }
      />

      {/*page 02*/}
      <ContentItem
        maskColor={'#251F21'}
        img={require('@/img/home/2.png').default}
        contentNode={
          <>
            {t('content.date-integrate.title-1')}
            {t('content.date-integrate.title-2') && (
              <span className="text-[#000000] bg-[#fbded5] px-[8px] xl:px-[16px] xl:ml-[16px] ml-[8px] rounded-full ">
                {t('content.date-integrate.title-2')}
              </span>
            )}
            <div className="leading-[29px] xl:leading-[58px]">
              {t('content.date-integrate.title-3') && (
                <span className="text-[#000000] bg-[#fbded5] px-[8px] xl:px-[16px] xl:mr-[16px] mr-[8px] rounded-full ">
                  {t('content.date-integrate.title-3')}
                </span>
              )}
              <span className="leading-[29px] xl:leading-[58px] ">
                {t('content.date-integrate.title-4')}
              </span>
            </div>
            <div className="text-[14px] xl:text-[16px]  xl:text-[16px] opacity-90 w-full font-normal pt-[16px]">
              {t('content.date-integrate.introduction')}
            </div>
            <NextLink href="/docs/overview">
              <div className="text-[14px] xl:text-[16px] text-[#bca6f7] opacity-90  font-normal cursor-pointer  mt-[12px] xl:mt-[16px]">
                {t('content.date-integrate.goto')} 😀 →
              </div>
            </NextLink>
          </>
        }
      />
      {/*page 03*/}
      <ContentItem
        maskColor={'#252525'}
        img={require('@/img/home/3.png').default}
        contentNode={
          <>
            {t('content.collaborative-develop.title-1')}
            {t('content.collaborative-develop.title-2') && (
              <span className="text-[#000000] bg-[#fbded5] px-[8px] xl:px-[16px] ml-[16px] rounded-full">
                {t('content.collaborative-develop.title-2')}
              </span>
            )}
            <div className="leading-[29px] xl:leading-[58px]">
              {t('content.collaborative-develop.title-3') && (
                <span className="text-[#000000] bg-[#d4fcca] px-[8px] xl:px-[16px] xl:mr-[16px] mr-[8px] rounded-full">
                  {t('content.collaborative-develop.title-3')}
                </span>
              )}
              <span className="leading-[29px] xl:leading-[58px]">
                {t('content.collaborative-develop.title-4')}
              </span>
            </div>
            <div className="text-[14px] xl:text-[16px]  opacity-90 w-full font-normal pt-[8px] xl:pt-[16px]">
              {t('content.collaborative-develop.introduction')}
            </div>
            <NextLink href="/docs/overview">
              <div className="text-[16px] text-[#bca6f7] opacity-90 cursor-pointer  font-normal mt-[12px] xl:mt-[16px]">
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
            <div className="leading-[29px] xl:leading-[58px]">
              {t('content.ui-library.title-1')}
              {t('content.ui-library.title-2') && (
                <span className="text-[#000000] bg-[#d4fcca] px-[8px] xl:px-[16px] xl:ml-[16px] ml-[8px] rounded-full ">
                  {t('content.ui-library.title-2')}
                </span>
              )}
            </div>
            {t('content.ui-library.title-3') && (
              <span className="text-[#000000] bg-[#d4fcca] px-[8px] xl:px-[16px] xl:mr-[16px] mr-[8px] rounded-full ">
                {t('content.ui-library.title-3')}
              </span>
            )}
            <span className="leading-[29px] xl:leading-[58px] ">
              {t('content.ui-library.title-4')}
            </span>
            <div className="text-[14px] xl:text-[16px]  opacity-90 w-full mt-[8px] xl:mt-[16px]  font-normal">
              {t('content.ui-library.introduction')}
            </div>
            <NextLink href="/docs/overview">
              <div className="text-[16px] text-[#bca6f7] opacity-90 cursor-pointer  font-normal mt-[12px] xl:mt-[16px]">
                {t('content.ui-library.goto')} 👍 →
              </div>
            </NextLink>
          </>
        }
      />

      {/*page 05*/}
      <div className="w-full flex justify-center bg-black rounded-b-[40px]">
        <div className="flex xl:h-screen py-[40px] flex-col w-full   xl:w-[1040px]   justify-center xl:items-center text-[28px] xl:text-[48px] font-bold text-white px-[48px] xl:px-0 rounded-b-[40px] xl:rounded-b-[80px]">
          <div className="leading-[29px] w-full xl:leading-[58px] ">
            {t('deployment.title')}
          </div>
          <div className="text-[14px] xl:text-[16px] opacity-90 w-full xl:w-full mt-[8px] xl:mt-[16px] font-normal opacity-90">
            {t('deployment.introduction')}
          </div>
          <div className="mt-[20px] xl:mt-[40px] flex flex-wrap xl:justify-between ">
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
