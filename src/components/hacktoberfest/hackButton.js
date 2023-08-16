import Link from 'next/link'
import style from './index.module.css'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { sendTagEvent } from '@/utils/gtag'

export const HackButton = ({ text, href = '', category }) => {
  const { t } = useTranslation('hacktober')

  const onClick = () => {
    sendTagEvent({
      action: 'click',
      category,
    })
  }

  return (
    <Link href={href} onClick={onClick}>
      <button className={clsx("glow-button", style.hackButton)}>
        <span className={style.hackBtnContent}>{t(text)}</span>
      </button>
    </Link>
  )
}
