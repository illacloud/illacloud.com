import style from './index.module.css'
import { Step } from './card'
import { ContributeStepCard } from '@/constants/hacktober'

export const StepCard = () => {
  return (
    <div className={style.cardsContainer}>
      {ContributeStepCard.map((card, index) => (
        <Step
          key={index}
          content={card}
          index={index + 1}
          isShowLine={index !== ContributeStepCard.length - 1}
        />
      ))}
    </div>
  )
}
