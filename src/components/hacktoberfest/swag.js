import Link from 'next/link'
import style from './index.module.css'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { useEffect, useRef, useState } from 'react'
import { useActiveTab } from './hooks/useActiveTab'
import { swagContent } from '@/constants/hacktober'
import { useRouter } from 'next/router'

export const Swag = ({ setActiveKey }) => {
  const { t } = useTranslation('hacktober')
  const illaSwagRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const { title, desc, options } = swagContent
  const router = useRouter()
  const ossSwag = t('swag.oss-swag', {
    returnObjects: true,
  })
  const ref = useActiveTab('#swag', setActiveKey)

  useEffect(() => {
    if (!illaSwagRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 1 },
    )
    observer.observe(illaSwagRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div id="swag" className={style.swagContainer} ref={ref}>
      <div className={style.swagInfoContent}>
        <h1
          className={clsx(
            style.contentTitle,
            router.locale === 'zh-CN' ? style.zhTitle : style.otherTitle,
          )}
        >
          {t('swag.title')}
        </h1>
        <p className={style.contentDesc}>{t('swag.description')}</p>
      </div>
      <div className={style.swagOptions}>
        <div className={style.swagContent}>
          <div className="flex flex-col gap-[4px] xl:gap-[8px] text-center">
            <h2 className={style.swagContentTitle}>{t(title)}</h2>
            <p className={style.swagContentDesc}>{t(desc)}</p>
          </div>
          <div className={style.swagCardContainer}>
            {options.map(
              ({
                icon,
                title,
                label,
                extra,
                height,
                titleColor,
                mobileHeight,
              }) => (
                <div key={title} className={style.swagCard}>
                  <img
                    src={icon}
                    className={clsx(
                      style.swagCardImg,
                      style.swagItemTranslation,
                      isVisible ? 'opacity-100' : 'xl:opacity-0',
                    )}
                    alt=""
                  />
                  <div
                    className={clsx(
                      style.swagOptionContent,
                      style.swagItemTranslation,
                      mobileHeight,
                      isVisible ? height : `${mobileHeight} xl:h-[120px]`,
                    )}
                  >
                    <div
                      className={clsx(
                        style.optionInfo,
                        style.swagItemTranslation,
                        isVisible ? 'opacity-100' : 'xl:opacity-0',
                      )}
                    >
                      <h2 style={titleColor} className={style.optionTitle}>
                        {t(title)}
                      </h2>
                      <p className={style.optionDesc}>{t(label)}</p>
                    </div>
                    <span
                      className={clsx(
                        style.optionsExtra,
                        style.swagItemTranslation,
                        isVisible ? 'opacity-100' : 'xl:opacity-0',
                      )}
                    >
                      {t(extra)}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <div className={style.swagContent}>
          <div
            className="flex flex-col gap-[4px] xl:gap-[8px] text-center"
            ref={illaSwagRef}
          >
            <h2 className={style.swagContentTitle}>{t(ossSwag.title)}</h2>
            <p className={style.swagContentDesc}>{t(ossSwag.desc)}</p>
          </div>
          <div className={style.ossList}>
            {ossSwag.list.map(
              ({ image, logo, label, description, link = '' }, _) => (
                <div key={_} className={style.ossListItem}>
                  <img src={image} alt="" className={style.ossImage} />
                  <div className={style.ossItemContent}>
                    <div className="flex flex-col gap-[8px]">
                      <div className={style.ossItemTitle}>
                        <img src={logo} alt="" />
                        <h2>{t(label)}</h2>
                      </div>
                      <p className={style.ossItemDesc}>{t(description)}</p>
                    </div>
                    <Link href={link}>
                      <span className={style.ossLink}>
                        {t('swag.oss-swag.take-look')}
                      </span>
                    </Link>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
