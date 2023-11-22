import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import ContentItem from '../ContentItem'

const HumanContent = ({ activeIndex }) => {
  const { t } = useTranslation('home')
  const humanContent = t('solutions.humanContent', {
    returnObjects: true,
  })
  if (!Array.isArray(humanContent)) return null
  return (
    <div className={style.borderContainerStyle}>
      <div className={style.humanContentContainerStyle}>
        <span className={style.titleStyle}>
          {t('solutions.human_title.human_work')}
        </span>
        <div className={style.contentItemContainerStyle}>
          {Array.isArray(humanContent[activeIndex]) &&
            humanContent[activeIndex].map(({ icon, desc }, i) => (
              <ContentItem
                key={desc}
                iconSrc={icon}
                text={desc}
                isLast={i === humanContent[activeIndex].length - 1}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
export default HumanContent
