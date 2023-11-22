import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import ProductContentTitle from '@/components/comm/ProductContentTitle'
import { usePlatform } from '@/hooks/usePlatform'

export const CloudFeature = ({ feature }) => {
  const { t } = useTranslation('cloud')
  const isInMobile = usePlatform()
  return (
    <div className={style.mainContent}>
      <ProductContentTitle title={t(feature.title)} />
      <div className="flex flex-col items-center w-full gap-[40px] xl:gap-[72px]">
        <div
          className={clsx(
            style.mainTextContainer,
            'w-full xl:w-[580px] text-center',
          )}
        >
          <h2 className={style.mainLabel}>{t(feature.label)}</h2>
          <p className={style.mainDesc}>{t(feature.desc)}</p>
        </div>
        <div className="flex flex-col gap-[40px] xl:grid grid-cols-2 gap-x-[40px] xl:gap-y-[72px] w-full">
          {feature.items.map(({ label, image, imageAlt, mobileImg }) => (
            <div
              className="flex flex-col items-center gap-[20px] xl:gap-[32px] w-full"
              key={label}
            >
              <h2 className={style.mainLabel}>{t(label)}</h2>
              <img
                src={isInMobile ? mobileImg : image}
                alt={imageAlt}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
