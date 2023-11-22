import AIContent from './AIContent'
import HumanContent from './HumanContent'
import style from './index.module.css'
import vs from '@/img/home3/vs.svg'
import Image from 'next/image'
const SwitchContent = ({ activeIndex }) => {
  return (
    <div className={style.switchContentStyle}>
      <HumanContent activeIndex={activeIndex} />
      <Image src={vs} width="64" height="36" />
      <AIContent activeIndex={activeIndex} />
    </div>
  )
}

export default SwitchContent
