import style from './index.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import tableHeaderBg from '@/img/selfHost/tableHeaderBg.svg'
import tableSelect from '@/img/selfHost/tableSelect.svg'
import { Fragment } from 'react'
import { useTranslation } from 'next-i18next'
import { MobileCompare } from '@/components/selfHost/mobileCompare'
import { useElementFirstShow } from '@/hooks/useElementFirstShow'
import { useRef, useCallback } from 'react'
import { sendTagEvent } from '@/utils/gtag'

export const Compare = ({ compare }) => {
  const { t } = useTranslation('selfHost')
  const ref = useRef(null)
  const reportShow = useCallback(() => {
    sendTagEvent({
      action: 'click',
      category: 'selfhost_table_try_this_show',
    })
  }, [])
  useElementFirstShow(ref, reportShow)
  return (
    <>
      <div className={style.compareContainer}>
        <img src={tableHeaderBg} className={clsx('', style.tableHeaderBg, style.tableSticky)} alt='table header' />
        <div className={clsx(style.tableHeader, style.tableSticky)}>
          <h2 ref={ref} className='font-[500] text-[22px] leading-[28px] text-center'>{t(compare.label1)}</h2>
          <Link href={compare.btn1Link}>
            <span className={style.tableBtn}>{t(compare.btn1)}</span>
          </Link>
        </div>
        <div className={clsx(style.tableHeader, style.tableSticky, 'border-l-[1px] border-[#292929] rounded-r-[16px]')}>
          <h2 className='font-[500] text-[22px] leading-[28px] text-center'>{t(compare.label2)}</h2>
          <Link href={compare.btn2Link}>
            <span className={style.tableBtn}>{t(compare.btn2)}</span>
          </Link>
        </div>
        {
          compare.items.map(({ label, desc, cloud, self }, index) => (
            <Fragment key={index}>
              <div className={style.tableContent}>
                <p className='font-[600] text-[18px] leading-[24px]'>{t(label)}</p>
                <span className='font-[400] text-[14px] leading-[20px] text-white-03'>{t(desc)}</span>
              </div>
              <div className={style.tableSelect}>
                {
                  cloud && <img src={tableSelect} className='w-[24px]' alt='table select' />
                }
              </div>
              <div className={clsx(style.tableSelect, 'border-l-[1px]')}>
                {
                  self && <img src={tableSelect} className='w-[24px]' alt='table select' />
                }
              </div>
            </Fragment>
          ))
        }
      </div>
      <MobileCompare compare={compare} reportShow={reportShow}/>
    </>
  )
}