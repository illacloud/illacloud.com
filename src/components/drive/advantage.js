import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import style from './index.module.css'
import clsx from 'clsx'
import ProductContentTitle from '@/components/comm/ProductContentTitle'

export const Advantage = ({ advantage }) => {
  const { t } = useTranslation('drive')
  return (
    <div className={style.mainContent}>
      <ProductContentTitle title={t(advantage.title)} />
      <div className="flex flex-col gap-[16px] items-start xl:gap-[40px] xl:flex-row">
        {advantage.items.length > 1 &&
          advantage.items.map(({ label, desc, image, imageAlt }) => (
            <div className={style.mainSmallBg} key={label}>
              <div className="w-[60px] py-[16px] xl:py-[32px] xl:w-[120px]">
                <Image src={image} alt={imageAlt} width="120" height="120" />
              </div>
              <div className={style.mainTextContainer}>
                <h2 className={clsx(style.mainLabel, 'text-center')}>
                  {t(label)}
                </h2>
                <p className={clsx(style.mainDesc, 'text-center')}>{t(desc)}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
