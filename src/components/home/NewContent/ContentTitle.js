import React from 'react'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'

export const ContentTitle = ({ tittleList, colorationTitle, color }) => {
  const { t } = useTranslation('home')
  const { colorDeg, colorStart, colorEnd, hasFilter } = color
  const colorStyle = {
    background: `linear-gradient(${colorDeg}, ${colorStart} 0%, ${colorEnd} 100%)`,
    filter: `${
      hasFilter ? 'drop-shadow(0px 2px 16px rgba(21, 15, 27, 0.16))' : 'none'
    }`,
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
