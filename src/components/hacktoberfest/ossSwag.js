import Link from 'next/link'
import style from './index.module.css'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { useActiveTab } from './hooks/useActiveTab'
import { useRouter } from 'next/router'

export const OSSSwag = ({ setActiveKey }) => {
  const { t } = useTranslation('hacktober')
  const router = useRouter()
  const ossSwag = t('swag.oss-swag', {
    returnObjects: true,
  })
  const ref = useActiveTab('#oss', setActiveKey)

  return (
    <div className={style.ossSwagContainer} ref={ref} id="oss">
      <div className={style.swagInfoContent}>
        <h1
          className={clsx(
            style.contentTitle,
            router.locale === 'zh-CN' ? style.zhTitle : style.otherTitle,
          )}
        >
          {t(ossSwag.title)}
        </h1>
        <p className={style.contentDesc}>{t(ossSwag.desc)}</p>
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
  )
}
