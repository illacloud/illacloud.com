
import { useRef } from 'react'
import { AllContent } from './allContent'
import { SwipeContent } from './swipeContent'
import { Backed } from '@/components/home/Content3/backed'
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
import { useViewportScroll, useTransform, motion } from 'framer-motion'



export const NewContent = ({onChangeShow, uri}) => {
  const backgroundRef = useRef(null)
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0.036, 0.078], [0, 1])
  const marginTop = useTransform(scrollYProgress, [0.036, 0.078], [50, 0])

  return (
    <div className={style.contentContainer}>
      <div className={style.content}>
        <motion.div className={clsx(style.background, 'hidden xl:block')} style={{opacity, marginTop}}>
          <img ref={backgroundRef} alt='' className='h-full w-full' src={circleBackground} />
        </motion.div>
        <div className={clsx(style.background, 'block xl:hidden')}>
          <img ref={backgroundRef} alt='' className='h-full w-full' src={circleBackground} />
        </div>
        <Backed />
        <AllContent />
        <div className='flex flex-col gap-[20px] xl:gap-[32px] w-full'>
          <SwipeContent {...firstSwipeContent} />
          <CardContent />
          <SwipeContent {...lastSwipeContent} />
        </div>
        <CodeContent />
        <SolutionContent />
      </div>
      <Partner onChangeShow={onChangeShow}/>
      <div className='mt-[60px] xl:mt-[200px] flex items-center text-white-01 w-full px-[20px] xl:px-0'>
        <FAQ translationSpace={'home'} />
      </div>
      <CommBottom scrollStart={0.9368} scrollEnd={1} uri={uri}/>
    </div>
  )
}