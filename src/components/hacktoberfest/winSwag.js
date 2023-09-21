import style from './index.module.css'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { useActiveTab } from './hooks/useActiveTab'
import { useRouter } from 'next/router'
import { swagContent } from '@/constants/hacktober'

export const WinSwag = ({ setActiveKey }) => {
  const router = useRouter()
  const ref = useActiveTab('#swag', setActiveKey)
  const { t } = useTranslation('hacktober')
  return (
    <div id="swag" className={style.swagContainer} ref={ref}>
      <h1
        className={clsx(
          style.contentTitle,
          router.locale === 'zh-CN' ? style.zhTitle : style.otherTitle,
        )}
      >
        {t('swag.title')}
      </h1>
      <div className={style.swagCardContainer}>
        {swagContent.map(({ icon, title, desc, titleColor }) => (
          <div key={title} className={style.swagCard}>
            <div className={clsx(style.optionInfo)}>
              <h2 style={titleColor} className={style.optionTitle}>
                {t(title)}
              </h2>
              <p className={style.optionDesc}>{t(desc)}</p>
            </div>
            <img src={icon} className={clsx(style.swagCardImg)} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
