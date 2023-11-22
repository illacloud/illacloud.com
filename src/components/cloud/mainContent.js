import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import { CloudContent } from '@/constants/cloudContent'
import Benefits from '@/components/comm/Benefits'
import FAQ from '@/components/comm/Faq'
import CommBottom from '@/components/comm/CommBottom'
import ProductContentTitle from '@/components/comm/ProductContentTitle'
import Template from '@/components/comm/Template'
import { CloudFeature } from '@/components/cloud/cloudFeature'

export const MainContent = ({ uri }) => {
  const { t } = useTranslation('cloud')

  const { feature, chooseIlla, benefits } = CloudContent

  return (
    <div className="w-full bg-black relative z-[1] overflow-x-hidden">
      <div className={style.mainContentContainer}>
        <CloudFeature feature={feature} />
        <div className={style.mainContent}>
          <ProductContentTitle title={t(chooseIlla.title)} />
          <div className="w-full flex flex-col gap-[32px] xl:grid grid-cols-2 gap-x-[40px] xl:gap-y-[64px]">
            {chooseIlla.items.map(({ label, desc }) => (
              <div
                className="flex flex-col items-start gap-[8px] xl:gap-[16px]"
                key={label}
              >
                <h2 className={style.mainLabel}>{t(label)}</h2>
                <p className={style.mainDesc}>{t(desc)}</p>
              </div>
            ))}
          </div>
        </div>
        {/* benefits */}
        <div className={style.mainContent}>
          <ProductContentTitle title={t(benefits.title)} />
          <Benefits items={benefits.items} translationName="cloud" />
        </div>

        {/* template */}
        <Template />
      </div>
      <div className="mt-[50px] xl:mt-[100px] flex items-center text-white-01 w-full px-[20px] xl:px-0">
        <FAQ translationSpace={'cloud'} />
      </div>
      <CommBottom scrollStart={0.866} scrollEnd={1} uri={uri} />
    </div>
  )
}
