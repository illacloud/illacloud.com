import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import style from './index.module.css'

export const UpgradeButton = () => {
  const { t } = useTranslation('pricing')
  return (
    <Link href="https://cloud.illacloud.com">
      <span className={style.upgradeButtonStyle}>{t('billing.plus-btn')}</span>
    </Link>
  )
}
