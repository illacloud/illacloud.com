import style from './index.module.css'
import clsx from 'clsx'

export const SwitchPricing = ({ state, setSwitchState }) => {
  return (
    <div
      className={clsx(style.switchContainer, state ? 'bg-[#8CFFAC]/[0.2]' : '')}
      onClick={setSwitchState}
    >
      <div
        className={clsx(style.switchDot, state ? style.activeSwitchDot : '')}
      />
    </div>
  )
}
