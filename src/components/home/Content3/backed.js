import Image from 'next/image'
import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { backedContent } from '@/constants/newContent'


export const Backed = () => {
  const { t } = useTranslation('home')

  return (
    <div className={style.backedContent}>
      <h2 className={style.backedTitle}>{t('backed_by.title')}</h2>
      <div className={style.backedDesc}>
        {
          backedContent.map(({ title, img }) => (
            <div className="flex flex-col xl:flex-row justify-center items-center gap-[12px] xl:gap-[16px]" key={title}>
              <Image src={img} height='40' width='40' />
              <span className=''>{t(title)}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}