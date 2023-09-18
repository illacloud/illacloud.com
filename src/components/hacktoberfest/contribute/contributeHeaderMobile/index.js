import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { ContributeHeaderCard } from './card'
import { HackButton } from '@/components/hacktoberfest/hackButton'
import { ContributeStepCard } from '@/constants/hacktober'

export const ContributeHeaderMobile = ({ title }) => {
  const { t } = useTranslation('hacktober')
  const router = useRouter()

  return (
    <div className={style.contributeInfoContainer}>
      <div className={style.contributeHeaderContainer}>
        <h1
          className={clsx(
            style.contributeTitle,
            router.locale === 'zh-CN' ? style.zhTitle : style.otherTitle,
          )}
        >
          {t(title)}
        </h1>
        <div className={style.cardsContainer}>
          {ContributeStepCard.map((card, index) => (
            <ContributeHeaderCard
              key={index}
              content={card}
              index={index + 1}
              isShowLine={index !== ContributeStepCard.length - 1}
            />
          ))}
        </div>
      </div>

      <div className={style.buttonGroupStyle}>
        <HackButton
          text={t('contribute-method.steps.doc')}
          href="https://github.com/illacloud/illa-builder/blob/main/Hacktoberfest%202023/README.md"
        />
        <HackButton
          text={t('contribute-method.steps.video')}
          pureButton
          onClick={() => {}}
        />
      </div>
    </div>
  )
}
