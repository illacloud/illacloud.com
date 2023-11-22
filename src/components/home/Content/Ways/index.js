import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import Switch from './Switch'
import SwitchContent from './SwitchContent'
import { useState } from 'react'

const Ways = () => {
  const { t } = useTranslation('home')
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className={style.waysContainerStyle}>
      <h1 className={style.waysTitleStyle}>
        {t('Ways customer are leveraging ILLA.AI')}
      </h1>
      <Switch onClick={(i) => setActiveIndex(i)} activeIndex={activeIndex} />
      <SwitchContent activeIndex={activeIndex} />
    </div>
  )
}

export default Ways
