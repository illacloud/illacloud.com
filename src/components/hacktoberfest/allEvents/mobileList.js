import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { EventItem } from './eventItem'
import Link from 'next/link'

export const EventListMobile = ({
  kickOff,
  weekDay,
  month,
  dateInMonth,
  startTime,
  endTime,
  eventGoIcon,
  eventComingIcon,
  dateState,
}) => {
  const { t } = useTranslation('hacktober')
  const listTop = kickOff['list-top']
  const listBottom = kickOff['list-bottom']

  return (
    <div className={style.mobileAllEventContainer}>
      <div>
        {parseInt(kickOff['available']) !== 0 ? (
          <div className={style.mobileCenterContentInfo}>
            <span className={style.mobileCenterInfoTitle}>
              {t('event.kick-off.title')}
            </span>
            <span className={style.mobileCenterInfoDesc}>
              <span className={style.mobileDateStyle}>
                {t(weekDay)}, {t(month)} {dateInMonth}
              </span>
              <span className={style.mobileTimeStyle}>
                {startTime.format('HH:mm')}&nbsp;-&nbsp;
                {endTime.format('HH:mm')}
              </span>
            </span>
          </div>
        ) : (
          <span className={style.mobileCenterInfoTitle}>
            {t('event.coming-soon')}
          </span>
        )}
      </div>
      <div className={style.mobileContentContainer}>
        {[...listTop, ...listBottom].length !== 0 &&
          [...listTop, ...listBottom].map((item) => (
            <EventItem key={item.partner} content={item} />
          ))}
      </div>
      {parseInt(kickOff['available']) !== 0 && (
        <Link href={kickOff['link']}>
          <div className={style.mobileStartStyle}>
            <img
              src={dateState === 'isComing' ? eventComingIcon : eventGoIcon}
              className="w-[18px]"
              alt=""
            />
          </div>
        </Link>
      )}
    </div>
  )
}
// parseInt(kickOff['available']) !== 0