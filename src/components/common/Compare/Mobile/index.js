import style from './index.module.css'
import clsx from 'clsx'
import tableSelect from '@/img/selfHost/tableSelect.svg'
import { useTranslation } from 'next-i18next'
import { useElementFirstShow } from '@/hooks/useElementFirstShow'
import { Fragment, useRef, useCallback } from 'react'
import { sendTagEvent } from '@/utils/gtag'

const CompareMobile = ({
  compare,
  translationScope = 'selfHost',
  needReport = true,
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
  useElementFirstShow(ref, needReport ? reportShow : undefined)

  return (
    <div className={style.mobileCompareContainer}>
      <div className={style.mobileTableHeader}>
        <div ref={ref} className={style.mobileTableHeaderItem}>
          {t(compare.tableHeader[0].label)}
        </div>
        {compare.tableHeader.slice(1).map(({ label }) => (
          <Fragment key={label}>
            <div className="w-[1px] h-[20px] bg-white-08 rounded-[1px]" />
            <div className={clsx(style.mobileTableHeaderItem)}>{t(label)}</div>
          </Fragment>
        ))}
      </div>
      <div className="w-full flex flex-col items-center gap-[20px]">
        {compare.items.map(({ label, desc, texts, icons }) => (
          <div key={label} className={style.mobileTableContentContainer}>
            <div className={style.mobileTableItemLabel}>
              <p className={style.mobileTableItemLabelTitle}>{t(label)}</p>
              <span className={style.mobileTableItemLabelDesc}>{t(desc)}</span>
            </div>
            <div className="flex flex-row w-full">
              {icons
                ? icons.map((icon, index) => (
                    <div
                      key={`${label}${index}`}
                      className={clsx(
                        style.mobileTableItemSelect,
                        index !== 0 ? 'border-l-[1px] border-[#292929]' : '',
                      )}
                    >
                      {icon && (
                        <img
                          src={tableSelect}
                          className="w-[20px]"
                          alt="table select"
                        />
                      )}
                    </div>
                  ))
                : texts.map((text, index) => (
                    <div
                      key={`${label}${index}`}
                      className={clsx(
                        style.mobileTableItemSelect,
                        index !== 0 ? 'border-l-[1px] border-[#292929]' : '',
                      )}
                    >
                      <span
                        className={clsx(
                          style.mobileTableItemLabelDesc,
                          'text-center',
                        )}
                      >
                        {t(text)}
                      </span>
                    </div>
                  ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompareMobile
