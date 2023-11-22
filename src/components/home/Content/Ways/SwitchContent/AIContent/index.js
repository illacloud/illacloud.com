import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import jsIcon from '@/img/home3/jsIcon.svg'
import ContentItem from '../ContentItem'

const AI_CONTENT = [
  {
    icon: jsIcon,
    text: 'Filter out job resumes in the mail.1',
  },
  {
    icon: jsIcon,
    text: 'Filter out job resumes in the mail.2',
  },
  {
    icon: jsIcon,
    text: 'Filter out job resumes in the mail.3',
  },
  {
    icon: jsIcon,
    text: 'Filter out job resumes in the mail.4',
  },
]

const AIContent = ({ activeIndex }) => {
  const { t } = useTranslation()
  return (
    <div className={style.borderContainerStyle}>
      <div className={style.aiContentContainerStyle}>
        <span className={style.titleStyle}>{t('ILLA.AI')}</span>
        <div className={style.contentItemContainerStyle}>
          {AI_CONTENT.map(({ icon, text }, i) => (
            <ContentItem
              key={text}
              iconSrc={icon}
              text={text}
              isLast={i === AI_CONTENT.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default AIContent
