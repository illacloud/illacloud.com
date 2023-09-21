import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'
import clsx from 'clsx'
import add from '@/img/hacktoberfest/add.svg'

export const CardButton = ({ content }) => {
  const { t } = useTranslation('hacktober')
  const {
    text,
    href = '',
    category,
    pureButton,
    longButton,
    onClick,
    leftIcon,
  } = content

  const handleClick = () => {
    sendTagEvent({
      action: 'click',
      category,
    })
    onClick && onClick()
  }

  return (
    <>
      {onClick ? (
        <div onClick={handleClick}>
          {longButton && (
            <div className={style.longCardButtonContainer}>
              <div className={clsx(style.longCardButton)}>
                <span className={style.cardButtonContent}>
                  <img src={leftIcon ?? add} alt="" width="16" />
                  {t(text)}
                </span>
              </div>
            </div>
          )}
          {pureButton && (
            <div className={clsx(style.cardButton, style.pureCardButton)}>
              <span className={style.cardButtonContent}>
                <img src={leftIcon ?? add} alt="" width="16" />
                {t(text)}
              </span>
            </div>
          )}
        </div>
      ) : (
        <Link href={href} onClick={handleClick}>
          <div>
            {longButton && (
              <div className={style.longCardButtonContainer}>
                <div className={clsx(style.longCardButton)}>
                  <span className={style.cardButtonContent}>
                    <img src={leftIcon ?? add} alt="" width="16" />
                    {t(text)}
                  </span>
                </div>
              </div>
            )}
            {pureButton && (
              <div className={clsx(style.cardButton, style.pureCardButton)}>
                <span className={style.cardButtonContent}>
                  <img src={leftIcon ?? add} alt="" width="16" />
                  {t(text)}
                </span>
              </div>
            )}
          </div>
        </Link>
      )}
    </>
  )
}
