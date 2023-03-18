import { useTranslation } from 'next-i18next'
import styles from './style.module.css'
import { ReactComponent as SubscribedCover } from '@/img/subscribe/subscribed-cover.svg'
import { ReactComponent as SubscribeFailedCover } from '@/img/subscribe/subscribe-failed-cover.svg'
import { Fragment } from 'react'
import clsx from 'clsx'
import { Community } from '@/constants/concat'
import Link from 'next/link'

const CommunityLink = () => {
  const { t } = useTranslation('subscribe')

  return (
    <Fragment>
      <div className="text-[12px] text-garyBlue-04 mb-[12px]">{t('contact')}</div>
      <div className="flex">
        {Community?.map((item, index) => (
          <Link legacyBehavior key={item.href} href={item.href}>
            <a className="cursor-pointer mx-[10px] text-garyBlue-03">
              {item.icon}
            </a>
          </Link>
        ))}
      </div>
    </Fragment>
  )
}

export const SubscribeCard = ({ failed }) => {
  const { t } = useTranslation('subscribe')

  return (
    <div className={styles.box}>
      {failed ? (
        <div className={styles.container}>
          <div>
            <SubscribeFailedCover className={styles.pcMode} />
            <img
              className={styles.mobileMode}
              src={
                require('@/img/subscribe/subscribe-failed-cover.png').default
              }
              alt=""
            />
          </div>
          <div className={styles.content}>
            <img
              className={clsx(styles.pcMode, 'mb-[24px]')}
              src={require('@/img/subscribe/failed-icon.svg').default}
              alt=""
            />
            <div className={styles.title}>{t('failed.title')}</div>
            <div className={styles.description}>{t('failed.description')}</div>
            <CommunityLink />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div>
            <SubscribedCover className={styles.pcMode} />
            <img
              className={'block sm:hidden'}
              src={require('@/img/subscribe/subscribe-cover.png').default}
              alt=""
            />
          </div>
          <div className={styles.content}>
            <img
              className={clsx(styles.pcMode, 'mb-[24px]')}
              src={require('@/img/subscribe/success-icon.svg').default}
              alt=""
            />
            <div className={styles.title}>{t('subscribed.title')}</div>
            <div className={styles.description}>
              {t('subscribed.description')}
            </div>
            <CommunityLink />
          </div>
        </div>
      )}
    </div>
  )
}
