import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import ContentItem from '../ContentItem'

const AIContent = ({ activeIndex }) => {
  const { t } = useTranslation('home')
  const aiContent = t('solutions.AIContent', {
    returnObjects: true,
  })
  if (!Array.isArray(aiContent)) return null
  return (
    <div className={style.borderContainerStyle}>
      <div className={style.aiContentContainerStyle}>
        <span className={style.titleStyle}>
          {t('solutions.illa_title.illa_ai')}
        </span>
        <div className={style.contentItemContainerStyle}>
          {Array.isArray(aiContent[activeIndex]) &&
            aiContent[activeIndex].map(({ icon, desc }, i) => (
              <ContentItem
                key={desc}
                iconSrc={icon}
                text={desc}
                isLast={i === aiContent[activeIndex].length - 1}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
export default AIContent
