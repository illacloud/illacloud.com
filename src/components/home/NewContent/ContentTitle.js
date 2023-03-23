import React from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'

export const ContentTitle = ({ tittleList, colorationTitle, color }) => {
  const { t } = useTranslation('home')
  const colorStyle = {
    background: `url('${color}') no-repeat`,
    backgroundSize: '100% 100%',
  }
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
                  style={colorationTitle.includes(t(key)) ? colorStyle : {}}
                >
                  {t(key)}
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
