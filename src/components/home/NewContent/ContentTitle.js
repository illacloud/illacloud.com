import React from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'

export const ContentTitle = ({ tittleList, colorationTitle, color }) => {
  const { t } = useTranslation('home')
  const firstHalf = tittleList.slice(0, 2)
  const lastHalf = tittleList.slice(2)
  return (
    <div className={style.contentTitle}>
      {firstHalf.some((key) => Boolean(t(key))) && (
        <div className={style.titleText}>
          {firstHalf.map(
            (key) =>
              t(key) && (
                <span
                  className={
                    colorationTitle.includes(t(key))
                      ? style.contentColorTitle
                      : ''
                  }
                  key={key}
                >
                  {colorationTitle.includes(t(key)) && <img src={color} className='w-full absolute h-[36px] xl:h-[72px] rounded-[32px] z-[-1]'/>}
                  <span>{t(key)}</span>
                </span>
              ),
          )}
        </div>
      )}
      {lastHalf.some((key) => Boolean(t(key))) && (
        <div className={style.titleText}>
          {lastHalf.map(
            (key) =>
              t(key) && (
                <span
                  className={
                    colorationTitle.includes(t(key))
                      ? style.contentColorTitle
                      : ''
                  }
                  key={key}
                >
                  {colorationTitle.includes(t(key)) && <img src={color} className='w-full absolute h-[36px] lg:h-[72px] rounded-[32px] z-[-1]' alt={t(key)}/>}
                  <span>{t(key)}</span>
                </span>
              ),
          )}
        </div>
      )}
    </div>
  )
}
