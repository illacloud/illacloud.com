import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { bannerContent } from '@/constants/hacktober'

export const Banner = () => {
  const { t } = useTranslation('hacktober')
  const { title, desc1, desc2 } = bannerContent

  return (
    <div className={style.bannerContainer}>
      <img
        src="https://cdn.illacloud.com/official-website/img/hacktoberFest/banner.svg"
        className={style.bannerImg}
        alt=""
      />
      <h1 className={style.bannerTitle}>{t(title)}</h1>
      <div className={style.bannerDescription}>
        <p>{t(desc1)}</p>
        <p>{t(desc2)}</p>
      </div>
    </div>
  )
}
