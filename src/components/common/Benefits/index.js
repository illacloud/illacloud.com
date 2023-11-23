import style from './index.module.css'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'

const Benefits = ({ items, translationName }) => {
  const { t } = useTranslation(translationName)
  return (
    <div className="w-full flex flex-col xl:grid grid-cols-3 items-start gap-[20px] xl:gap-[40px]">
      {items.length > 1 &&
        items.map(({ label, desc }) => (
          <div className={style.benefitsContent} key={label}>
            <div className="flex flex-col gap-[8px] xl:gap-[16px]">
              <h2 className={clsx(style.mainLabel)}>{t(label)}</h2>
              <p className={clsx(style.mainDesc)}>{t(desc)}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Benefits
