import style from './index.module.css'
import { useTranslation } from 'next-i18next'
const LOGO_WALL = [
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo11.svg',
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo1.svg',
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo2.svg',
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo3.svg',
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo4.svg',
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo5.svg',
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo6.svg',
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo7.svg',
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo8.svg',
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo9.svg',
  'https://cdn.illacloud.com/official-website/img/logo-wall/logo10.svg',
]

function LogoWall() {
  const { t } = useTranslation('home')
  return (
    <div className={style.wallContainerStyle}>
      <span className={style.logoTitleStyle}>{t('customer.title')}</span>
      <div className={style.logoContainerStyle}>
        {LOGO_WALL.map((item) => (
          <img key={item} src={item} alt="" className={style.logoStyle} />
        ))}
      </div>
    </div>
  )
}

export default LogoWall
