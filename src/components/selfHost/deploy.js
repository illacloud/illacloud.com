import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import ProductContentTitle from '@/components/comm/ProductContentTitle'
import { LearnMore } from '@/components/LandingPage/LearnMore'
import { sendTagEvent } from '@/utils/gtag'

export const Deploy = ({ deploy }) => {
  const { t } = useTranslation('selfHost')
  const onClick = (name) => {
    sendTagEvent({
      action: 'click',
      category: 'landing_page_learn_more',
      label: 'Learn more',
    })
  }
  return (
    <div className={style.mainContent}>
      <ProductContentTitle title={t(deploy.title)} />
      <div className="flex flex-col items-center w-full gap-[40px] xl:gap-[72px]">
        <div
          className={clsx(
            style.mainTextContainer,
            'w-full xl:w-[580px] xl:text-center',
          )}
        >
          <h2 className={style.mainLabel}>{t(deploy.label)}</h2>
          <p className={style.mainDesc}>{t(deploy.desc)}</p>
        </div>
        <div className="flex flex-col gap-[40px] xl:grid grid-cols-2 gap-x-[40px] xl:gap-y-[72px] w-full">
          {deploy.items.map(
            (
              {
                icon,
                title,
                content,
                moreLink,
                moreTitle,
                clickCategory,
                showCategory,
              },
              index,
            ) => (
              <div className={style.deployItem} key={title}>
                <img src={icon} className="w-[40px] xl:w-[80px]" alt="" />
                <div
                  className={clsx(
                    'flex flex-col items-start',
                    content
                      ? 'gap-[16px] xl:gap-[32px]'
                      : 'gap-[8px] xl:gap-[16px]',
                  )}
                >
                  <h2 className={style.mainLabel}>{t(title)}</h2>
                  {t(content) && (
                    <div
                      className="flex flex-col gap-[32px]"
                      dangerouslySetInnerHTML={{ __html: t(content) }}
                    />
                  )}
                  <LearnMore
                    href={moreLink}
                    btnText={t(moreTitle)}
                    translationName="selfhost"
                    onClick={() => onClick(clickCategory)}
                    showReport={index % 2 === 0 ? showCategory : undefined}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
