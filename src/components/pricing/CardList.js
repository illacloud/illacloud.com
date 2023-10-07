import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import style from './index.module.css'
import pricing_ from '@/img/home/pricing_.svg'
import doubt from '@/img/home/doubt.svg'

export const CardList = ({ name, values, mouseLeave, mouseOver, index }) => {
  const { t } = useTranslation('pricing')
  return (
    <>
      <p className={style.cardListTitle}>{t(name)}</p>
      {values.map(({ text, tip, hasLineThrough }, i) => {
        return (
          <p
            className={clsx(
              !text ? style.hiddenListContent : style.blockListContent,
              style.cardListContent,
            )}
            key={`${text}${i}`}
          >
            {text && !hasLineThrough && (
              <img
                className={style.cardListIcon}
                src={pricing_}
                alt="pricing"
              />
            )}
            <span
              className={clsx(hasLineThrough ? style.lineThroughStyle : '')}
            >
              {t(text)}
              {!hasLineThrough && tip && (
                <span
                  className={style.doubt}
                  onMouseOver={(e) => {
                    mouseOver(e, t(tip), index)
                  }}
                  onMouseLeave={mouseLeave}
                >
                  <img
                    className="h-[16px] w-[16px]"
                    src={doubt}
                    alt="pricing"
                  />
                </span>
              )}
            </span>
          </p>
        )
      })}
    </>
  )
}
