import { useRef } from 'react'
import { AllContent } from './allContent'
import { SwipeContent } from './swipeContent'
import { CardContent } from './cardContent'
import { SolutionContent } from './solutionContent'
import { CodeContent } from './codeContent'
import { Partner } from '../../comm/partner'
import style from './index.module.css'
import circleBackground from '@/img/home3/circleBackground.svg'
import clsx from 'clsx'
import { firstSwipeContent, lastSwipeContent } from '@/constants/newContent'
import { FAQ } from '@/components/comm/Faq'
import { CommBottom } from '@/components/comm/commBottom'

export const NewContent = ({ onChangeShow, uri }) => {
  const backgroundRef = useRef(null)
  return (
    <div className={style.contentContainer}>
      <div className={style.content}>
        <div className={clsx(style.background, 'block xl:hidden')}>
          <img
            ref={backgroundRef}
            alt=""
            className="h-full w-full"
            src={circleBackground}
          />
        </div>
        <AllContent />
        <div className="flex flex-col gap-[20px] xl:gap-[32px] w-full">
          <SwipeContent {...firstSwipeContent} />
          <CardContent />
          <SwipeContent {...lastSwipeContent} />
        </div>
        <CodeContent />
        <SolutionContent />
      </div>
      <Partner onChangeShow={onChangeShow} />
      <div className="mt-[60px] xl:mt-[200px] flex items-center text-white-01 w-full px-[20px] xl:px-0">
        <FAQ translationSpace={'home'} />
      </div>
      <CommBottom scrollStart={0.9368} scrollEnd={1} uri={uri} />
    </div>
  )
}
