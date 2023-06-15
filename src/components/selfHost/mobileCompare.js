import style from './index.module.css'
import clsx from 'clsx'
import tableSelect from '@/img/selfHost/tableSelect.svg'
import { useTranslation } from 'next-i18next'
import { useElementFirstShow } from '@/hooks/useElementFirstShow'
import { useRef } from 'react'

export const MobileCompare = ({ compare, reportShow }) => {
  const { t } = useTranslation('selfHost')
  const ref = useRef(null)
  useElementFirstShow(ref, reportShow)
  return (
    <div className='w-full xl:hidden flex flex-col items-center justify-center gap-[32px]'>
      <div className={style.mobileTableHeader}>
        <div ref={ref} className={style.mobileTableHeaderItem}>{t(compare.label1)}</div>
        <div className='w-[1px] h-[20px] bg-white-08 rounded-[1px]' />
        <div className={clsx(style.mobileTableHeaderItem)}>{t(compare.label2)}</div>
      </div>
      <div className='flex flex-col items-center gap-[20px]'>
        {
          compare.items.map(({ label, desc, cloud, self }, index) => (
            <div key={index} className='flex flex-col items-start border-[1px] border-[#292929] rounded-[8px] w-full'>
              <div className={style.mobileTableItemLabel}>
                <p className='font-[600] text-[18px] leading-[24px]'>{t(label)}</p>
                <span className='font-[400] text-[14px] leading-[20px] text-white-03'>{t(desc)}</span>
              </div>
              <div className='flex flex-row w-full'>
                <div className={style.mobileTableItemSelect}>
                  {
                    cloud && <img src={tableSelect} className='w-[20px]' alt='table select' />
                  }
                </div>
                <div className={clsx(style.mobileTableItemSelect, 'border-l-[1px] border-[#292929]')}>
                  {
                    self && <img src={tableSelect} className='w-[20px]' alt='table select' />
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}