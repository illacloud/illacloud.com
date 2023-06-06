import style from './index.module.css'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import Image from 'next/image'
import { tempPartnerContent as partnerContent } from '@/constants/newContent'
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useEffect, useState } from 'react'

// Import Swiper styles
import "swiper/css";

import { Autoplay, A11y} from "swiper";


export const Partner = () => {
  const { t } = useTranslation('home')
  const swiperRef = useRef(null)
  const [isView, setIsView] = useState(false)

  useEffect(() => {
    if (isView) {
      // swiperRef.current?.swiper.autoplay?.start()
    } else {
      // swiperRef.current?.swiper.autoplay?.stop(true)
    }
  }, [isView])

  useEffect(() => {
    let target = swiperRef.current
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsView(true)
        } else {
          setIsView(false)
        }
      })
    })
    if (target) {
      observer.observe(target)
    }
    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [])
  return (
    <div className='mt-[100px] w-full flex flex-col items-center gap-[40px] text-white-01 font-[700] text-center overflow-hidden'>
      <h1 className='text-[24px] leading-[24px] xl:text-[40px] xl:leading-[48px] '>{t('partner')}</h1>
      {
        partnerContent.length > 0 && <Swiper
          ref={swiperRef}
          // modules={[Autoplay, A11y]}
          // loop
          // noSwiping
          className={style.partnerList}
          spaceBetween={0}
          slidesPerView='auto'
          // autoplay={{
          //   delay: 0,
          // }}
          // speed={500}
          wrapperClass='partnerWrapper'
        >
          {

            partnerContent.map(({ name, logo, href }) => (
              <SwiperSlide
                // className='swiper-no-swiping'
                draggable={false}
                key={name}
                className='w-[280px]'
              >
                <Link key={name} href={href}>
                  {/* <div className={style.partnerItemCard}> */}
                  <div
                    className={style.partnerItemContainer}
                  >
                    <div className={style.partnerItem}>
                      <div className='w-[32px] h-[32px] xl:w-[64px] xl:h-[64px]'>
                        <Image src={logo} alt={name} width='64' height='64' />
                      </div>
                      <span className='text-[12px] leading-[17px] xl:text-[28px] xl:leading-[34px]'>{name}</span>
                    </div>
                  </div>
                  {/* </div> */}
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      }

    </div>
  )
}