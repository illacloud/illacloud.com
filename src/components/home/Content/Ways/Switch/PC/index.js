import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { Fragment } from 'react'

const SWITCH_CONTENT = [
  'Resume screening',
  'Customer message management',
  'Content generate & ',
]

const SwitchItem = ({ text, isActive, onClick }) => {
  return (
    <span
      className={clsx(
        style.baseSwitchItemStyle,
        isActive ? style.activeItemStyle : style.notActiveStyle,
      )}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

const SwitchPC = ({ activeIndex, onClick }) => {
  const { t } = useTranslation('home')
  return (
    <div className={style.switchContainerStyle}>
      {SWITCH_CONTENT.map((item, i) => (
        <Fragment key={item}>
          <SwitchItem
            text={t(item)}
            isActive={i === activeIndex}
            onClick={() => onClick(i)}
          />
          {i !== SWITCH_CONTENT.length - 1 && (
            <div
              className={clsx(
                style.lineStyle,
                activeIndex === i || activeIndex - 1 === i
                  ? 'bg-transparent'
                  : 'bg-white/[0.1]',
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}
export default SwitchPC
