import style from './index.module.css'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'

export const EarlyBird = ({ onChangeShow }) => {
  const { t } = useTranslation('pricing')
  return (
    <div className={style.earlyBird}>
      <h1 className={style.earlyBirdTitle}>{t('early_bird')}</h1>
      <div className={style.earlyBirdContent}>
        <div className={style.earlyBirdContentItem}>
          <span className={clsx(style.cardTitle, 'text-[#FFC122]')} >Plus</span>
          <div className='flex flex-col items-center gap-[8px]'>
            <span className='flex justify-center items-end gap-[8px]'>
              <span className='font-[700] text-[40px] leading-[48px]'>$10</span>
              <span className='line-through font-[600]  text-white-04 text-[16px]'>$20</span>
            </span>
            <span className='font-[400] text-[14px] leading-[22px] flex flex-col items-center text-white-04'>{t('user-month')}</span>
          </div>
        </div>
        <span
          className={clsx(style.cardBtn, 'bg-tech-purple-01')}
          onClick={onChangeShow}
        >{t('enterprise-btn')}</span>
      </div>
    </div>
  )
}