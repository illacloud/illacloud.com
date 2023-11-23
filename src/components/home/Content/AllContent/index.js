import style from './index.module.css'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useContext } from 'react'
import { InfoContext } from '@/context'

const AllContent = () => {
  const { t } = useTranslation('home')
  const info = useContext(InfoContext)
  return (
    <div className={style.allContentContainer}>
      <h1 className={style.allContentTitle}>{t('content.all.title')}</h1>
      <div className="w-[1200px] w-full">
        <Image
          src={
            info?.isMobile
              ? 'https://cdn.illacloud.com/official-website/img/mobile/homepage/first.png'
              : 'https://cdn.illacloud.com/official-website/img/home/new/Frame%203376.svg'
          }
          width="1200"
          height="696"
          alt={t('content.all.alt')}
        />
      </div>
    </div>
  )
}
export default AllContent
