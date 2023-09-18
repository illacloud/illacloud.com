import Link from 'next/link'
import style from './index.module.css'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { useRef } from 'react'
import { useActiveTab } from './hooks/useActiveTab'
import { useRouter } from 'next/router'

export const Swag = ({ setActiveKey }) => {
  const { t } = useTranslation('hacktober')
  const illaSwagRef = useRef(null)
  const router = useRouter()
  const ossSwag = t('swag.oss-swag', {
    returnObjects: true,
  })
  const ref = useActiveTab('#swag', setActiveKey)

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
