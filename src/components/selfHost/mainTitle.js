import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import { sendTagEvent } from '@/utils/gtag'
import Link from 'next/link'

export const MainTitle = ({ titleContent }) => {
  const { t } = useTranslation('selfHost')
  return (
    <div className={style.title}>
      <div className={style.titleContent}>
        <h1 className='font-[700] text-[40px] leading-[48px] text-center xl:text-[48px] xl:leading-[72px] xl:text-start'>{t(titleContent.title)}</h1>
        <p className='font-[400] text-[14px] leading-[14px] text-center xl:text-[16px] xl:leading-[24px] xl:text-start'>{t(titleContent.desc)}</p>
        <Link href={titleContent.btnLink}>
          <span
            className={style.titlePurpleBtn}
            onClick={() => {
              sendTagEvent({
                action: 'click',
                category: titleContent.category,
                label: t(titleContent.btnText),
              })
            }}
          >
            {t(titleContent.btnText)}
          </span>
        </Link>
      </div>
      <img src={titleContent.image} className='w-full' alt={titleContent.imageAlt} />
    </div>
  )
}