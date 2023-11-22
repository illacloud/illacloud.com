import { useMemo, useRef, useCallback } from 'react'
import style from './index.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCreative } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'
import { useTranslation } from 'next-i18next'
import LearnMore from '../../components/home/Content/LearnMore'
import clsx from 'clsx'
import { useElementFirstShow } from '@/hooks/useElementFirstShow'
import { sendTagEvent } from '@/utils/gtag'
import LottieItem from '../LottieItem'

const SwipeContent = (props) => {
  const {
    title,
    imgList,
    descList,
    moreTitle,
    moreLink,
    imageAlt,
    category,
    showCategory,
    mobileImg,
  } = props
  const { t } = useTranslation('home')
  const ref = useRef(null)
  const mobileRef = useRef(null)
  const reportShow = useCallback(() => {
    sendTagEvent({
      action: 'click',
      category: showCategory,
    })
  }, [showCategory])
  useElementFirstShow(ref, reportShow)
  useElementFirstShow(mobileRef, reportShow)
  const pagination = useMemo(() => {
    return {
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <div class="${className} ${style.swipeDescList}">
          <p class="${style.swipeDesc}">
          <span class="progressRing"}>
          <svg width="16" height="16">
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="#FFFFFF"
              stroke-width="2"
              fill="none"
              stroke-opacity="0.1"
            ></circle>
            <circle
              class="circleProgress"
              cx="8"
              cy="8"
              r="7"
              stroke="#6E52FF"
              stroke-width="2"
              fill="none"
              stroke-opacity="1"
              stroke-dasharray="75"
              stroke-dashoffset="0"
            ></circle>
          </svg>
          </span>
          <span>${t(descList[index])}</span>
          </p>
          </div>
        `
      },
    }
  }, [descList, t])

  return (
    <>
      {/* pc */}
      <div
        ref={ref}
        className={clsx(style.swipeContentContainer, 'swiperContent')}
      >
        <Swiper
          pagination={pagination}
          modules={[Pagination, Autoplay, EffectCreative]}
          direction="vertical"
          effect={'creative'}
          grabCursor={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, '-20%', -400],
              scale: 0,
            },
            next: {
              translate: [0, '120%', 0],
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className={style.swiperContainer}
        >
          <div className={style.swipeText}>
            <h1>{t(title)}</h1>
          </div>
          {imgList.map((item) => (
            <SwiperSlide key={item}>
              {typeof item === 'object' ? (
                <div className={clsx(style.swipeImage, style.lottieBg)}>
                  <LottieItem json={item} />
                </div>
              ) : (
                <div className={style.swipeImage}>
                  <img src={item} alt={t(imageAlt)} className="w-full" />
                </div>
              )}
            </SwiperSlide>
          ))}
          <LearnMore
            title={moreTitle}
            href={moreLink}
            leftPadding
            category={category}
          />
        </Swiper>
      </div>

      {/* mobile */}
      <div ref={mobileRef} className={style.mobileSwipeContainer}>
        <div className={style.swipeText}>
          <h1>{t(title)}</h1>
          <ul className={style.swipeDescList}>
            {descList.map((item) => (
              <li
                className={clsx(style.swipeDesc, style.mobileSwipeDesc)}
                key={item}
              >
                {t(item)}
              </li>
            ))}
          </ul>
          <LearnMore title={moreTitle} href={moreLink} category={category} />
        </div>
        <div className={style.swipeImage}>
          <img src={mobileImg} alt={t(imageAlt)} className="w-full" />
        </div>
      </div>
    </>
  )
}

export default SwipeContent
