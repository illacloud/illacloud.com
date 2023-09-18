import style from './index.module.css'
import { useTranslation } from 'next-i18next'

export const ContributeHeaderCard = (props) => {
  const { content, index, isShowLine } = props
  const { t } = useTranslation('hacktober')
  return (
    <div className={style.cardContainer}>
      <span className={style.labelNumStyle}>{index}</span>
      <div className={style.labelStyle}>
        <span className={style.labelContentStyle}>{t(content.label)}</span>
        <span className={style.labelDescStyle}>{t(content.desc)}</span>
      </div>
      {isShowLine && (
        <div className={style.labelLineContainerStyle}>
          <span className={style.labelLineStyle} />
        </div>
      )}
    </div>
  )
}
