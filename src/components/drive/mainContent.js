import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import style from './index.module.css'
import clsx from 'clsx'
import { DriveContent } from '@/constants/driveContent'
import { faqList } from '@/constants/content'
import { FAQ } from '@/components/comm/Faq'
import { CommBottom } from '@/components/comm/commBottom'
import { ProductContentTitle } from '@/components/comm/productContentTitle'
import { Fragment } from 'react'



export const MainContent = ({ uri }) => {
  const { t } = useTranslation('drive')
  const { feature, advantage, benefits } = DriveContent
  return (
    <div className='w-full bg-black relative z-[1] overflow-x-hidden'>
      <div className={style.mainContentContainer}>
        {/* feature */}
        <div className={style.mainContent}>
          <ProductContentTitle title={t(feature.title)} />
          <div className='flex flex-col items-start gap-[72px]'>
            <div className='flex flex-col item-center gap-[32px]'>
              <div className={style.mainTextContainer}>
                <h2 className={clsx(style.mainLabel, 'xl:text-center')}>{t(feature.items[0].label)}</h2>
                <p className={clsx(style.mainDesc, 'xl:text-center')}>{t(feature.items[0].desc)}</p>
              </div>
              <div className={style.mainLargeBg}>
                <Image src={feature.items[0].image} alt={feature.items[0].imageAlt} width='1200' height='480' />
              </div>
            </div>
            <div className={style.featureBottom}>
              {
                feature.items.slice(1).map(({ label, desc, image, imageAlt }, index) => (
                  <Fragment key={label}>
                    <div className={clsx(style.featureBottomText, index === 0 ? 'row-start-1 col-start-1' : 'mt-[20px] xl:mt-0 row-start-1 col-start-2')}>
                      <h2 className={style.mainLabel}>{t(label)}</h2>
                      <p className={style.mainDesc}>{t(desc)}</p>
                    </div>
                    <div className={clsx(style.featureBottomImg, index === 0 ? 'row-start-2 col-start-1' : 'row-start-2 col-start-2')}>
                      <img src={image} alt={imageAlt} className='w-full' />
                    </div>
                  </Fragment>
                ))
              }
            </div>
          </div>
        </div>


        {/* advantage */}
        <div className={style.mainContent}>
          <ProductContentTitle title={t(advantage.title)} />
          <div className='flex flex-col gap-[16px] items-start xl:gap-[40px] xl:flex-row'>
            {
              advantage.items.length > 1 && advantage.items.map(({ label, desc, image, imageAlt }) => (
                <div className={style.mainSmallBg} key={label}>
                  <div className='w-[60px] py-[16px] xl:py-[32px] xl:w-[120px]'>
                    <Image src={image} alt={imageAlt} width='120' height='120' />
                  </div>
                  <div className={style.mainTextContainer}>
                    <h2 className={clsx(style.mainLabel, 'text-center')}>{t(label)}</h2>
                    <p className={clsx(style.mainDesc, 'text-center')}>{t(desc)}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Benefits */}
        <div className={style.mainContent}>
          <ProductContentTitle title={t(benefits.title)} />
          <div className='flex flex-col xl:flex-row items-start gap-[20px] xl:gap-[40px]'>
            {
              benefits.items.length > 1 && benefits.items.map(({ label, desc }) => (
                <div className={style.benefitsContent} key={label}>
                  <div className='flex flex-col gap-[8px] xl:gap-[16px]'>
                    <h2 className={clsx(style.mainLabel)}>{t(label)}</h2>
                    <p className={clsx(style.mainDesc)}>{t(desc)}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='mt-[50px] xl:mt-[100px] flex items-center text-white-01 w-full px-[20px] xl:px-0'>
        <FAQ faqList={faqList} translationSpace={'drive'} />
      </div>
      <CommBottom scrollStart={0.835} scrollEnd={0.866} uri={uri} />
    </div>
  )
}