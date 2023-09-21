import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'

export const Options = ({ options }) => {
  const { t } = useTranslation('hacktober')

  return (
    <div className="flex flex-col xl:flex-row gap-[12px] xl:gap-[16px] flex-wrap">
      {options.map(({ text, count, icon }, _) => (
        <div key={_} className="flex gap-[4px] items-center">
          <img src={icon} width="16" alt="" />
          <span className={clsx(style.optionTitle, style.interFont)}>
            {t(text)}
          </span>
          <span className={clsx(style.optionCount, style.eurostileFont)}>
            {t(count)}
          </span>
        </div>
      ))}
    </div>
  )
}
