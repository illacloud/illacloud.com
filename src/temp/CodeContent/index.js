import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import LearnMore from '../../components/home/Content/LearnMore'
import jsIcon from '@/img/home3/jsIcon.svg'
import { useState, useRef, Fragment, useCallback } from 'react'
import { useViewportScroll } from 'framer-motion'
import clsx from 'clsx'
import { codeContent } from '@/constants/newContent'
import { useElementFirstShow } from '@/hooks/useElementFirstShow'
import { sendTagEvent } from '@/utils/gtag'

const CodeContent = () => {
  const {
    title,
    moreLink,
    moreTitle,
    values,
    bgImg,
    imageAlt,
    mobileBgImg,
    category,
  } = codeContent
  const { t } = useTranslation('home')
  const swiperMinSection = 50
  const ref = useRef(null)
  const mobileRef = useRef(null)
  const reportShow = useCallback(() => {
    sendTagEvent({
      action: 'click',
      category: 'homepage_body_code_anywhere_show',
    })
  }, [])
  useElementFirstShow(ref, reportShow)
  useElementFirstShow(mobileRef, reportShow)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const touchStartVal = useRef(0)
  scrollYProgress.onChange((v) => {
    if (v > 0.62) {
      setActiveIndex(1)
    } else {
      setActiveIndex(0)
    }
  })

  const handleTouchStart = (e) => {
    touchStartVal.current = e.clientX ?? e.touches[0]?.clientX
  }

  const handleTouchEnd = (e) => {
    const endVal = e.clientX ?? e.changedTouches[0]?.clientX
    if (
      endVal - touchStartVal.current > swiperMinSection &&
      mobileActiveIndex !== 0
    ) {
      setMobileActiveIndex(0)
    } else if (
      endVal - touchStartVal.current < -swiperMinSection &&
      mobileActiveIndex !== 1
    ) {
      setMobileActiveIndex(1)
    }
  }

  const renderImages = (activeIndex, inMobile = false) => (
    <div className="w-screen ml-[-20px] mt-[24px] xl:mt-0 xl:ml-0 xl:px-[48px] xl:w-full xl:h-full relative">
      <img
        src={inMobile ? mobileBgImg : bgImg}
        alt=""
        className={
          inMobile ? style.mobileCodeContentBgImg : style.codeContentBgImg
        }
      />
      {values.map(
        ({ leftImage, rightImage, mobileLeftImg, mobileRightImg }, index) => (
          <Fragment key={leftImage}>
            <div
              className={clsx(
                `${style[`codeContentL${index}`]}`,
                style.codeContentImg,
                activeIndex === index
                  ? style.codeContentActiveImg
                  : 'opacity-[0] scale-0',
              )}
            >
              <img
                alt={t(imageAlt)}
                className="w-full"
                src={inMobile ? mobileLeftImg : leftImage}
              />
            </div>
            <div
              className={clsx(
                `${style[`codeContentR${index}`]}`,
                style.codeContentImg,
                activeIndex === index
                  ? style.codeContentActiveImg
                  : 'opacity-[0] scale-0',
              )}
            >
              <img
                alt={t(imageAlt)}
                className="w-full"
                src={inMobile ? mobileRightImg : rightImage}
              />
            </div>
          </Fragment>
        ),
      )}
    </div>
  )

  return (
    <>
      {/* pc */}
      <div ref={ref} className="hidden xl:block h-[120vh] w-[1200px] mx-auto">
        <div className={clsx('h-[731px] sticky top-[15%]')}>
          <div className="flex w-full flex-col justify-center items-center gap-[40px]">
            <div className="flex flex-col items-center gap-[24px]">
              <h1 className="font-[700] text-[40px] leading-[48px] text-center text-white-01">
                {t(title)}
              </h1>
              <LearnMore
                title={moreTitle}
                leftPadding
                href={moreLink}
                category={category}
              />
            </div>
            <div className={style.codeContentBg}>
              <div className="flex flex-row flex-nowrap">
                {values.map(({ title, desc }, index) => (
                  <div
                    className={clsx(
                      style.codeContentBgTab,
                      activeIndex === index ? 'opacity-[1]' : 'opacity-[0.3]',
                    )}
                    onClick={() => setActiveIndex(index)}
                    key={title}
                  >
                    <div className="flex flex-row items-center gap-[8px]">
                      <img src={jsIcon} alt="js svg" width="24" />
                      <h1 className={style.codeTitle}>{t(title)}</h1>
                    </div>
                    <span className={clsx(style.codeContentDesc)}>
                      {t(desc)}
                    </span>
                  </div>
                ))}
              </div>
              {renderImages(activeIndex)}
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div ref={mobileRef} className="block xl:hidden w-full">
        <div className="flex flex-col items-center gap-[12px]">
          <h1 className="font-[700] text-[20px] leading-[24px] text-center text-white-01">
            {t(title)}
          </h1>
          <LearnMore
            title={moreTitle}
            leftPadding
            href={moreLink}
            category={category}
          />
        </div>
        <div className="flex flex-col  flex-nowrap mt-[20px] gap-[12px]">
          {values.map(({ title, desc }, index) => (
            <div
              className={clsx(
                style.codeContentBgTab,
                style.mobileCodeContentBgTab,
                mobileActiveIndex === index ? 'flex' : 'hidden',
              )}
              onMouseDown={handleTouchStart}
              onMouseUp={handleTouchEnd}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              key={title}
            >
              <div className="flex flex-col items-start gap-[8px]">
                <img src={jsIcon} alt="js svg" width="20" />
                <h1 className={style.codeTitle}>{t(title)}</h1>
              </div>
              <span className={clsx(style.codeContentDesc)}>{t(desc)}</span>
            </div>
          ))}
          <div className="flex flex-row items-start gap-[8px] mx-auto">
            {values.map((_, index) => (
              <span
                key={index}
                className={clsx(
                  style.codeCycle,
                  mobileActiveIndex === index ? 'bg-white-01' : 'bg-white-06',
                )}
              />
            ))}
          </div>
        </div>
        {renderImages(mobileActiveIndex, true)}
      </div>
    </>
  )
}

export default CodeContent
