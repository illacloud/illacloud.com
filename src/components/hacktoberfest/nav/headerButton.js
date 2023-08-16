import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'

export const HeaderButton = ({ content }) => {
  const { t } = useTranslation('hacktober')
  const { icon, title, href = '', category } = content

  const onClick = () => {
    sendTagEvent({
      action: 'click',
      category,
    })
  }

  return (
    <Link href={href} onClick={onClick}>
      <div className={style.headerButtonContainer}>
        <div className={style.headerButton}>
          <span className='w-[24px] h-[24px]'>{icon}</span>
          <span className={style.cardButtonContent}>{t(title)}</span>
        </div>
      </div>
    </Link>
  )
}
