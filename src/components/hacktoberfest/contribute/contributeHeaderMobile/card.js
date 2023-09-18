import style from './index.module.css'
import { useTranslation } from 'next-i18next'

export const ContributeHeaderCard = (props) => {
  const { content, index, isShowLine } = props
  const { t } = useTranslation('hacktober')
  return (
    <div className={style.cardContainer}>
      <div className={style.labelStyle}>
        <span className={style.labelNumStyle}>{index}</span>
        {isShowLine && <span className={style.labelLineStyle} />}
      </div>
      <div className={style.labelContentContainerStyle}>
        <span className={style.labelContentStyle}>{t(content.label)}</span>
        <span className={style.labelDescStyle}>{t(content.desc)}</span>
      </div>
    </div>
  )
}
