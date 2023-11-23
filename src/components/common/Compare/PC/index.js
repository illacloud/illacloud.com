import style from './index.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import tableHeaderBg from '@/img/selfHost/tableHeaderBg.svg'
import tableSelect from '@/img/selfHost/tableSelect.svg'
import { Fragment } from 'react'
import { useTranslation } from 'next-i18next'
import { useElementFirstShow } from '@/hooks/useElementFirstShow'
import { useRef, useCallback } from 'react'
import { sendTagEvent } from '@/utils/gtag'

const ComparePC = ({
  compare,
  translationScope = 'selfHost',
  needReport = true,
  colNum = 3,
}) => {
  const { t } = useTranslation(translationScope)
  const ref = useRef(null)
  const reportShow = useCallback(() => {
    needReport &&
      sendTagEvent({
        action: 'click',
        category: 'selfhost_table_try_this_show',
      })
  }, [needReport])
  useElementFirstShow(ref, reportShow)
  return (
    <div
      className={clsx(style.compareContainer)}
      style={{
        gridTemplateColumns: `repeat(${colNum}, minmax(0, 1fr))`,
      }}
    >
      <img
        src={tableHeaderBg}
        className={clsx(style.tableHeaderBg, style.tableSticky)}
        alt="table header"
      />
      {compare.tableHeader.map(({ label, btnText, link }) => (
        <div
          key={label}
          className={clsx(
            style.tableHeader,
            style.tableSticky,
            'border-l-[1px] border-[#292929] rounded-r-[16px]',
          )}
        >
          <h2 className="font-[500] text-[22px] leading-[28px] text-center">
            {t(label)}
          </h2>
          <Link href={link ?? ''}>
            <span className={style.tableBtn}>{t(btnText)}</span>
          </Link>
        </div>
      ))}
      {compare.items.map(({ label, desc, texts, icons }, index) => (
        <Fragment key={index}>
          <div className={style.tableContent}>
            <p className="font-[600] text-[18px] leading-[24px]">{t(label)}</p>
            <span className="font-[400] text-[14px] leading-[20px] text-white-03">
              {t(desc)}
            </span>
          </div>
          {icons
            ? icons.map((val, i) => (
                <div
                  key={`${label}${i}`}
                  className={clsx(style.tableSelect, 'border-l-[1px]')}
                >
                  {val && (
                    <img
                      src={tableSelect}
                      className="w-[24px]"
                      alt="table select"
                    />
                  )}
                </div>
              ))
            : texts.map((val, i) => (
                <div
                  key={`${label}${i}`}
                  className={clsx(style.tableSelect, 'border-l-[1px]')}
                >
                  <span className="font-[400] text-[14px] leading-[20px] text-white-03">
                    {t(val)}
                  </span>
                </div>
              ))}
        </Fragment>
      ))}
    </div>
  )
}

export default ComparePC
