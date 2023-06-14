import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { LearnMore } from './learnMore'
import { cardContent } from '@/constants/newContent'

export const CardContent = () => {
  const { t } = useTranslation('home')

  return (
    <div className={style.cardContainer}>
      {
        cardContent.map(({ title, desc, moreTitle, moreLink, cardImage, imageAlt }) => (
          <div className={style.cardContent} key={title}>
            <div className={style.cardTextContent}>
              <h1 className={style.cardTitle}>{t(title)}</h1>
              <p className={style.cardDesc}>{t(desc)}</p>
              <LearnMore title={moreTitle} href={moreLink} />
            </div>
            <div className={style.cardBg}>
              <img src={cardImage} className='w-full' alt={t(imageAlt)} />
            </div>
          </div>
        ))
      }
    </div>
  )
}