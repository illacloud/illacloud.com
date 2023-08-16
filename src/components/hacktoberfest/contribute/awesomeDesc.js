import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'

export const AwesomeDesc = ({ desc }) => {
  const { t } = useTranslation('hacktober')
  return (
    <div className="w-full flex flex-col items-start gap-[16px]">
      {desc.map(({ icon, text, count }) => (
        <div key={text} className={style.awesomeDescContent}>
          <img src={icon} width="16" alt="" />
          <span className={clsx(style.cardDesc, style.interFont, 'ml-[16px]')}>
            <span>{t(text)}</span>
            <span
              className={clsx(
                style.optionCount,
                style.eurostileFont,
                'ml-0 xl:ml-[8px]',
              )}
            >
              &nbsp;{t(count)}
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}
