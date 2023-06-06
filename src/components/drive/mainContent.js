import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import style from './index.module.css'
import clsx from 'clsx'
import { DriveContent } from '@/constants/driveContent'
import { faqList } from '@/constants/content'
import { FAQ } from '@/components/comm/Faq'
import { CommBottom } from '@/components/comm/commBottom'



export const MainContent = () => {
  const { t } = useTranslation('drive')
  const { feature, advantage, benefits } = DriveContent
  return (
    <div className='w-full bg-black relative z-[1] overflow-x-hidden'>
      <div className={style.mainContentContainer}>
        {/* feature */}
        <div className={style.mainContent}>
          <h1 className={style.mainContentTitle}>{t(feature.title)}</h1>
          <div className='flex flex-col items-start gap-[72px]'>
            <div className='flex flex-col item-center gap-[32px]'>
              <div className={style.mainTextContainer}>
                <h2 className={clsx(style.mainLabel, 'xl:text-center')}>{t(feature.item1.label)}</h2>
                <p className={clsx(style.mainDesc, 'xl:text-center')}>{t(feature.item1.desc)}</p>
              </div>
              <div className={style.mainLargeBg}>
                <Image src={feature.item1.image} alt={feature.item1.imageAlt} width='1200' height='480' />
              </div>
            </div>
            <div className={style.featureBottom}>
              <div className={clsx(style.featureBottomText, 'row-start-1 col-start-1')}>
                <h2 className={style.mainLabel}>{t(feature.item2.label)}</h2>
                <p className={style.mainDesc}>{t(feature.item2.desc)}</p>
              </div>
              <div className={clsx(style.featureBottomImg, 'row-start-2 col-start-1')}>
                <Image src={feature.item2.image} alt={feature.item1.imageAlt} width='580' height='360' />
              </div>
              <div className={clsx(style.featureBottomText, 'mt-[20px] xl:mt-0 row-start-1 col-start-2')}>
                <h2 className={style.mainLabel}>{t(feature.item3.label)}</h2>
                <p className={style.mainDesc}>{t(feature.item3.desc)}</p>
              </div>
              <div className={clsx(style.featureBottomImg, 'row-start-2 col-start-2')}>
                <Image src={feature.item3.image} alt={feature.item3.imageAlt} width='580' height='360' />
              </div>
            </div>
          </div>
        </div>


        {/* advantage */}
        <div className={style.mainContent}>
          <h1 className={style.mainContentTitle}>{t(advantage.title)}</h1>
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
          <h1 className={style.mainContentTitle}>{t(benefits.title)}</h1>
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
      <div className='mt-[50px] xl:mt-[100px] flex h-[500px] items-center text-white-01 w-full px-[20px] xl:px-0'>
        <FAQ faqList={faqList} translationSpace={'home'} />
      </div>
      <CommBottom scrollStart={0.694} scrollEnd={0.720}/>
    </div>
  )
}