
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
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import { firstSwipeContent, lastSwipeContent } from '@/constants/newContent'
import { faqList } from '@/constants/content'
import { FAQ } from '@/components/comm/Faq'
import { CommBottom } from '@/components/comm/commBottom'
import { useViewportScroll, useTransform, motion } from 'framer-motion'



export const NewContent = () => {
  const { t } = useTranslation('home')
  const backgroundRef = useRef(null)
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0.03, 0.04], [0, 1])

  return (
    <div className={style.contentContainer}>
      <div className={style.content}>
        <motion.div className={clsx(style.background, 'hidden xl:block')} style={{opacity}}>
          <img ref={backgroundRef} alt='' className='h-full w-full' src={circleBackground} />
        </motion.div>
        <div className={clsx(style.background, 'block xl:hidden')}>
          <img ref={backgroundRef} alt='' className='h-full w-full' src={circleBackground} />
        </div>
        <Backed />
        <AllContent />
        <div className='flex flex-col gap-[20px] xl:gap-[32px]'>
          <SwipeContent {...firstSwipeContent} />
          <CardContent />
          <SwipeContent {...lastSwipeContent} />
        </div>
        <CodeContent />
        <SolutionContent />
      </div>
      <Partner />
      <div className='mt-[50px] xl:mt-[100px] flex h-[500px] items-center text-white-01 w-full px-[20px] xl:px-0'>
        <FAQ faqList={faqList} translationSpace={'home'} />
      </div>
      <CommBottom scrollStart={0.956} scrollEnd={0.98}/>
    </div>
  )
}