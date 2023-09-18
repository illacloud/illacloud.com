import Link from 'next/link'
import style from './index.module.css'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { sendTagEvent } from '@/utils/gtag'

export const HackButton = ({
  text,
  href = '',
  category,
  onClick,
  pureButton = false,
}) => {
  const { t } = useTranslation('hacktober')

  const handleClick = () => {
    sendTagEvent({
      action: 'click',
      category,
    })
    onClick && onClick()
  }

  return (
    <>
      {!pureButton && (
        <Link href={href} onClick={handleClick}>
          <button className={clsx('glow-button', style.hackButton)}>
            <span className={style.hackBtnContent}>{t(text)}</span>
          </button>
        </Link>
      )}
      {pureButton && (
        <button className={clsx('glow-button', style.hackButton)}>
          <span className={style.hackBtnContent}>{t(text)}</span>
        </button>
      )}
    </>
  )
}
