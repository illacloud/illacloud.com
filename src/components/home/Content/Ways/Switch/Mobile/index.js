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
        isActive ? style.activeItemStyle : style.notActionItemStyle,
      )}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

const SwitchMobile = ({ activeIndex, onClick }) => {
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
        </Fragment>
      ))}
    </div>
  )
}
export default SwitchMobile
