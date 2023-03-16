import React from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'

export const ContentTitle = ({ tittleList, colorationTitle, color }) => {
  const { t } = useTranslation('home')
  const colorStyle = {
    background: `url('${color}') no-repeat`,
    backgroundSize: 'cover'
  }
  const firstHalf = tittleList.slice(0, 2)
  const lastHalf = tittleList.slice(2)
  return (
    <div className={style.contentTitle}>
      {firstHalf.some((key) => Boolean(t(key))) && (
        <div className="flex items-center flex-row xl:gap-[16px] gap-[8px]">
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
                  style={colorationTitle.includes(t(key)) ? colorStyle : {}}
                >
                  {t(key)}
                </span>
              ),
          )}
        </div>
      )}
      {lastHalf.some((key) => Boolean(t(key))) && (
        <div className="flex items-center flex-row xl:gap-[16px] gap-[8px]">
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
                  style={colorationTitle.includes(t(key)) ? colorStyle : {}}
                >
                  {t(key)}
                </span>
              ),
          )}
        </div>
      )}
    </div>
  )
}
