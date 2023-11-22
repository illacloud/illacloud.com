import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import LearnMore from '../../LearnMore'
import clsx from 'clsx'

const CardContentItem = ({
  imageSrc,
  stepNum,
  title,
  desc,
  moreTitle,
  moreHref,
  reverse,
}) => {
  const { t } = useTranslation('home')
  return (
    <div className={style.borderStyle}>
      <div
        className={clsx(
          style.cardIContentItemContainerStyle,
          reverse ? 'xl:flex-row-reverse' : '',
        )}
      >
        <img src={imageSrc} className={style.imgStyle} alt="" />
        <div className={style.textContainerStyle}>
          <h2 className={style.textTitleStye}>
            <span className={style.textTitleNumStye}>{stepNum}.</span>
            <br />
            <span>{t(title)}</span>
          </h2>
          <span className={style.textDescStyle}>{t(desc)}</span>
          <LearnMore title={t(moreTitle)} href={moreHref ?? ''} />
        </div>
      </div>
    </div>
  )
}
export default CardContentItem
