import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { LearnMore } from './learnMore'
import { solutionContent } from '@/constants/newContent'
import { Fragment } from 'react'
import clsx from 'clsx'



export const SolutionContent = () => {
  const { title, moreLink, moreTitle, values, imageAlt } = solutionContent
  const { t } = useTranslation('home')
  return (
    <div className={style.solutionContainer}>
      <div className='flex w-[1040px] flex-col items-center gap-[24px]'>
        <h1 className='w-full font-[700] text-[20px] leading-[24px]  xl:text-[40px] xl:leading-[48px] text-center text-white-01'>{t(title)}</h1>
      </div>
      <div className={style.solutionContent}>
        {
          values.map(({ label, desc, image }, index) => (
            <Fragment key={label}>
              <div className={clsx('flex flex-col items-start gap-[8px] xl:gap-[16px]', index === 0 ? 'row-start-1 col-start-1' : 'row-start-1 col-start-2 mt-[12px] xl:mt-0')} key={label}>
                <h2 className='font-[700] text-[16px] leading-[19px] xl:text-[36px] xl:leading-[44px] text-white-01'>{t(label)}</h2>
                <p className='font-[400] text-[12px] leading-[16px] xl:text-[14px] xl:leading-[24px] text-white-02'>{t(desc)}</p>
              </div>
              <div className={clsx(style.solutionBg, index === 0 ? 'row-start-2 col-start-1' : 'row-start-2 col-start-2')}>
                {/* TODO 补充图片 */}
                <img src={image} className='w-full' alt={t(imageAlt)} />
              </div>
            </Fragment>
          ))
        }
      </div>
      <LearnMore title={moreTitle} href={moreLink} leftPadding />
    </div>
  )
}