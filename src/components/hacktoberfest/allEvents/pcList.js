import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import cycleBg from '@/img/hacktoberfest/cycleBg.svg'
import { EventItem } from './eventItem'
import Link from 'next/link'

export const EventListPc = ({
  kickOff,
  weekDay,
  month,
  dateInMonth,
  startTime,
  endTime,
  eventGoIcon,
  eventComingIcon,
  dateState,
  onCalendarClick,
}) => {
  const { t } = useTranslation('hacktober')
  const listTop = kickOff['list-top']
  const listBottom = kickOff['list-bottom']

  return (
    <div className={style.allEventContainer}>
      <div className={style.bgContainer}>
        <img src={cycleBg} alt="" className={style.allEventBg} />
        <div className={style.contentContainer}>
          <div className={clsx(style.baseContentList, style.topContentList)}>
            {listTop &&
              listTop.map((item) => (
                <EventItem key={item.partner} content={item} isTop />
              ))}
          </div>
          <div className={clsx(style.baseContentList, style.bottomContentList)}>
            {listBottom &&
              listBottom.map((item) => (
                <EventItem key={item.partner} content={item} />
              ))}
          </div>
        </div>
        <div className={style.centerContent}>
          {parseInt(kickOff['available']) !== 0 ? (
            <>
              <div className={style.centerContentInfo}>
                <span className={style.centerInfoTitle}>
                  {t('event.kick-off.title')}
                </span>
                <span className={style.centerInfoDesc}>
                  <span className={style.dateStyle}>
                    {t(weekDay)}, {t(month)} {dateInMonth}
                  </span>
                  <span className={style.timeStyle}>
                    {startTime.format('HH:mm')}&nbsp;-&nbsp;
                    {endTime.format('HH:mm')}
                  </span>
                </span>
              </div>
              {dateState === 'isComing' ? (
                <div className={style.startStyle} onClick={onCalendarClick}>
                  <img src={eventComingIcon} className="w-[24px]" alt="" />
                </div>
              ) : (
                <Link href={kickOff['link']}>
                  <div className={style.startStyle}>
                    <img src={eventGoIcon} className="w-[24px]" alt="" />
                  </div>
                </Link>
              )}
            </>
          ) : (
            <span className={style.centerInfoTitle}>{t('coming-soon')}</span>
          )}
        </div>
      </div>
    </div>
  )
}
