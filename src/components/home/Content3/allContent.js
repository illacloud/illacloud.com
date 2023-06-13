import style from './index.module.css'
import Image from 'next/image'
import tempAllContent from '@/img/home3/allContent.jpeg'
import { useTranslation } from 'next-i18next'
export const AllContent = () => {
  const { t } = useTranslation('home')
  return (
    <div className={style.allContentContainer}>
      <div className="flex flex-col items-start justify-center gap-[16px]">
        <h1 className={style.allContentTitle}>{t('content.all.title')}</h1>
        <span className={style.allContentDesc}>{t('content.all.desc')}</span>
      </div>
      <div className='xl:w-[1200px] xl:h-[696px] w-full'>
        <Image src={tempAllContent} width='1200px' height='696px' alt={t('content.all.alt')} />
      </div>
    </div>
  )
}