import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import style from './index.module.css'
import clsx from 'clsx'
import ProductContentTitle from '@/components/comm/ProductContentTitle'
import { Fragment } from 'react'
import { usePlatform } from '@/hooks/usePlatform'

export const DriveFeature = ({ feature }) => {
  const { t } = useTranslation('drive')
  const isInMobile = usePlatform()
  return (
    <div className={style.mainContent}>
      <ProductContentTitle title={t(feature.title)} />
      <div className="flex flex-col items-start gap-[72px]">
        <div className="flex flex-col item-center gap-[32px]">
          <div className={style.mainTextContainer}>
            <h2 className={clsx(style.mainLabel, 'xl:text-center')}>
              {t(feature.items[0].label)}
            </h2>
            <p className={clsx(style.mainDesc, 'xl:text-center')}>
              {t(feature.items[0].desc)}
            </p>
          </div>
          <div className={style.mainLargeBg}>
            <Image
              src={feature.items[0].image}
              alt={feature.items[0].imageAlt}
              width="1200"
              height="480"
            />
          </div>
        </div>
        <div className={style.featureBottom}>
          {feature.items
            .slice(1)
            .map(({ label, desc, image, imageAlt, mobileImg }, index) => (
              <Fragment key={label}>
                <div
                  className={clsx(
                    style.featureBottomText,
                    index === 0
                      ? 'row-start-1 col-start-1'
                      : 'mt-[20px] xl:mt-0 row-start-1 col-start-2',
                  )}
                >
                  <h2 className={style.mainLabel}>{t(label)}</h2>
                  <p className={style.mainDesc}>{t(desc)}</p>
                </div>
                <div
                  className={clsx(
                    style.featureBottomImg,
                    index === 0
                      ? 'row-start-2 col-start-1'
                      : 'row-start-2 col-start-2',
                  )}
                >
                  <img
                    src={isInMobile ? mobileImg : image}
                    alt={imageAlt}
                    className="w-full"
                  />
                </div>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  )
}
