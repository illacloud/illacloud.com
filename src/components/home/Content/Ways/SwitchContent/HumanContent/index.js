import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import jsIcon from '@/img/home3/jsIcon.svg'
import ContentItem from '../ContentItem'

const HUMAN_CONTENT = [
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

const HumanContent = ({ activeIndex }) => {
  const { t } = useTranslation()
  return (
    <div className={style.borderContainerStyle}>
      <div className={style.humanContentContainerStyle}>
        <span className={style.titleStyle}>{t('Human work')}</span>
        <div className={style.contentItemContainerStyle}>
          {HUMAN_CONTENT.map(({ icon, text }, i) => (
            <ContentItem
              key={text}
              iconSrc={icon}
              text={text}
              isLast={i === HUMAN_CONTENT.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default HumanContent
