import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'
import clsx from 'clsx'
import add from '@/img/hacktoberfest/add.svg'

export const CardButton = ({ content }) => {
  const { t } = useTranslation('hacktober')
  const { text, href = '', category, pureButton, longButton, extraStyle } = content

  const onClick = () => {
    sendTagEvent({
      action: 'click',
      category,
    })
  }

  return (
    <Link href={href} onClick={onClick}>
      <div>
        {longButton && (
          <div className={style.longCardButtonContainer}>
            <div className={clsx(style.longCardButton, extraStyle ?? 'xl:w-[235px]')}>
              <span className={style.cardButtonContent}>
                <img src={add} alt='' width="16" />
                {t(text)}
              </span>
            </div>
          </div>
        )}
        {pureButton && (
          <div className={clsx(style.cardButton, style.pureCardButton)}>
            <span className={style.cardButtonContent}>{t(text)}</span>
          </div>
        )}
      </div>
    </Link>
  )
}
