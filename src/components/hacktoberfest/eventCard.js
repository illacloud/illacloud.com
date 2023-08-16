import style from './index.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'
import { useTranslation } from 'next-i18next'

export const EventCard = ({ content }) => {
  const { t } = useTranslation('hacktober')
  const {
    title,
    partner,
    logo,
    avatar,
    endTime,
    startTime,
    state,
    weekDay,
    dateInMonth,
    month,
    available,
    link = '',
  } = content
  const eventGoIcon =
    'https://cdn.illacloud.com/official-website/img/hacktoberFest/eventGo.svg'
  const eventComingIcon =
    'https://cdn.illacloud.com/official-website/img/hacktoberFest/eventComing.svg'

  const onClick = () => {
    sendTagEvent({
      action: 'click',
      category: 'hacktober_live_click',
      label: title,
    })
  }
  return (
    <div className="flex flex-col mt-[16px] xl:mt-0">
      {state === 'isIn' ? (
        <div className={style.borderContainer}>
          <div className={clsx(style.lightEventBg, style.eventCard)}>
            <div className={style.eventLightAvatarContainer}>
              <Link href={content['partner-link'] || ''}>
                <img src={avatar} alt="" className={style.eventLightAvatar} />
              </Link>
            </div>
            <div className={style.eventCardInfo}>
              <div className="flex flex-col gap-[8px] items-center text-center px-[16px]">
                <h2 className={style.eventCardTitle}>{t(title)}</h2>
                <p className={style.eventCardDesc}>{t(partner)}</p>
              </div>
              <img src={logo} alt="" />
            </div>
            <Link href={link} onClick={onClick}>
              <div className={clsx(style.eventGo, 'bg-[#34E7FF]')}>
                <img
                  src={state === 'isComing' ? eventComingIcon : eventGoIcon}
                  className="w-[18px] xl:w-[24px]"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className={clsx(style.normalEventBg, style.eventCard)}>
          <Link href={content['partner-link'] || ''}>
            <img src={avatar} alt="" className={style.eventAvatar} />
          </Link>
          <div className={style.eventCardInfo}>
            <div className="flex flex-col gap-[8px] items-center text-center px-[16px]">
              <h2 className={style.eventCardTitle}>{t(title)}</h2>
              <p className={style.eventCardDesc}>{t(partner)}</p>
            </div>
            <img src={logo} alt="" />
          </div>
          {parseInt(available) !== 0 && (
            <Link href={link} onClick={onClick}>
              <div className={clsx(style.eventGo, 'bg-white-01')}>
                <img
                  src={state === 'isComing' ? eventComingIcon : eventGoIcon}
                  className="w-[18px] xl:w-[24px]"
                  alt=""
                />
              </div>
            </Link>
          )}
        </div>
      )}
      <div className={style.eventTimeContainer}>
        {parseInt(available) !== 0 ? (
          <>
            <span className={style.eventDate}>
              {t(weekDay)}, {t(month)} {dateInMonth}
            </span>
            <p className={style.eventTime}>
              {startTime.format('HH:mm')}&nbsp;-&nbsp;
              {endTime.format('HH:mm')}
            </p>
          </>
        ) : (
          <span className={style.eventDate}>{t('coming-soon')}</span>
        )}
      </div>
    </div>
  )
}
