import AIContent from './AIContent'
import HumanContent from './HumanContent'
import style from './index.module.css'
import vs from '@/img/home3/vs.svg'
const SwitchContent = ({ activeIndex }) => {
  return (
    <div className={style.switchContentStyle}>
      <HumanContent activeIndex={activeIndex} />
      <img alt="" src={vs} className={style.vsStyle} />
      <AIContent activeIndex={activeIndex} />
    </div>
  )
}

export default SwitchContent
