import style from './index.module.css'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { usePlatform } from '@/hooks/usePlatform'

export const AllContent = () => {
  const { t } = useTranslation('home')
  const isInMobile = usePlatform()
  return (
    <div className={style.allContentContainer}>
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <h1 className={style.allContentTitle}>{t('content.all.title')}</h1>
        <span className={style.allContentDesc}>{t('content.all.desc')}</span>
      </div>
      <div className='w-[1200px] w-full'>
        <Image
          src={isInMobile ? 'https://cdn.illacloud.com/official-website/img/mobile/homepage/first.png' : 'https://cdn.illacloud.com/official-website/img/home/new/Frame%203376.svg'}
          width='1200'
          height='696'
          alt={t('content.all.alt')} />
      </div>
    </div>
  )
}