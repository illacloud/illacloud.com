import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import LearnMore from '../../components/home/Content/LearnMore'
import { cardContent } from '@/constants/newContent'
import { useElementFirstShow } from '@/hooks/useElementFirstShow'
import { useRef, useCallback } from 'react'
import { sendTagEvent } from '@/utils/gtag'
import { usePlatform } from '@/hooks/usePlatform'

const CardContent = () => {
  const { t } = useTranslation('home')
  const ref = useRef(null)
  const isInMobile = usePlatform()
  const reportShow = useCallback(() => {
    sendTagEvent({
      action: 'click',
      category: 'homepage_body_collaboration_show',
    })
  }, [])
  useElementFirstShow(ref, reportShow)

  return (
    <div ref={ref} className={style.cardContainer}>
      {cardContent.map(
        ({
          title,
          desc,
          moreTitle,
          moreLink,
          cardImage,
          imageAlt,
          category,
          mobileImg,
        }) => (
          <div className={style.cardContent} key={title}>
            <div className={style.cardTextContent}>
              <h1 className={style.cardTitle}>{t(title)}</h1>
              <p className={style.cardDesc}>{t(desc)}</p>
              <LearnMore
                title={moreTitle}
                href={moreLink}
                category={category}
              />
            </div>
            <div className={style.cardBg}>
              <img
                src={isInMobile ? mobileImg : cardImage}
                className="w-full"
                alt={t(imageAlt)}
              />
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export default CardContent
