import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import { DriveContent } from '@/constants/driveContent'
import FAQ from '@/components/common/Faq'
import CommBottom from '@/components/common/CommBottom'
import ProductContentTitle from '@/components/common/ProductContentTitle'
import Benefits from '@/components/common/Benefits'
import { DriveFeature } from '@/components/drive/driveFeature'
import { Advantage } from '@/components/drive/advantage'

export const MainContent = ({ uri }) => {
  const { t } = useTranslation('drive')
  const { feature, advantage, benefits } = DriveContent
  return (
    <div className="w-full bg-black relative z-[1] overflow-x-hidden">
      <div className={style.mainContentContainer}>
        <DriveFeature feature={feature} />
        <Advantage advantage={advantage} />
        <div className={style.mainContent}>
          <ProductContentTitle title={t(benefits.title)} />
          <Benefits items={benefits.items} translationName="drive" />
        </div>
      </div>
      <div className="mt-[50px] xl:mt-[100px] flex items-center text-white-01 w-full px-[20px] xl:px-0">
        <FAQ translationSpace={'drive'} />
      </div>
      <CommBottom scrollStart={0.866} scrollEnd={1} uri={uri} />
    </div>
  )
}
