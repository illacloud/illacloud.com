import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ContributeHeaderCard } from './card'
import docIcon from '@/img/hacktoberfest/doc.svg'
import playIcon from '@/img/hacktoberfest/play.svg'
import { ContributeStepCard } from '@/constants/hacktober'

export const ContributeHeader = ({ setPlayMaskShow, title }) => {
  const { t } = useTranslation('hacktober')
  const router = useRouter()

  return (
    <div className={style.contributeInfoContainer}>
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
      <div className={style.buttonGroupStyle}>
        <Link href="https://github.com/illacloud/illa-builder/blob/main/Hacktoberfest%202023/README.md">
          <span className={style.contributeButton}>
            <img src={docIcon} alt="" />
            <span className={style.contributeButtonItem}>
              {t('contribute-method.steps.doc')}
            </span>
          </span>
        </Link>
        <div className={style.separateStyle} />
        <span className={style.contributeButton} onClick={setPlayMaskShow}>
          <img src={playIcon} alt="" />
          <span className={style.contributeButtonItem}>
            {t('contribute-method.steps.video')}
          </span>
        </span>
      </div>
    </div>
  )
}
