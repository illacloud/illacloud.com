import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import { SelfHostContent } from '@/constants/selfHostContent'
import FAQ from '@/components/comm/Faq'
import CommBottom from '@/components/comm/CommBottom'
import ProductContentTitle from '@/components/comm/ProductContentTitle'
import Template from '@/components/comm/Template'
import Compare from '@/components/comm/Compare'
import { MainTitle } from '@/components/selfHost/mainTitle'
import { Deploy } from '@/components/selfHost/deploy'

export const MainContent = ({ uri }) => {
  const { t } = useTranslation('selfHost')
  const { titleContent, deploy, features, compare } = SelfHostContent

  return (
    <div className="w-full xl:bg-black relative z-[1]">
      <div className={style.mainContentContainer}>
        <MainTitle titleContent={titleContent} />
        <Deploy deploy={deploy} />
        <div className={style.mainContent}>
          <ProductContentTitle title={t(features.title)} />
          <div className="w-full flex flex-col gap-[32px] xl:grid grid-cols-2 gap-x-[40px] xl:gap-y-[64px]">
            {features.items.map(({ label, desc }) => (
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
        <div className={style.mainContent}>
          <ProductContentTitle title={t(compare.title)} />
          <Compare compare={compare} />
        </div>
        {/* template */}
        <Template />
      </div>
      <div className="mt-[50px] xl:mt-[100px] flex items-center text-white-01 w-full px-[20px] xl:px-0">
        <FAQ translationSpace={'selfHost'} />
      </div>
      <CommBottom scrollStart={0.924} scrollEnd={1} uri={uri} />
    </div>
  )
}
