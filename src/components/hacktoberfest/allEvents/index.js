import { useTranslation } from 'next-i18next'
import dayjs from 'dayjs'
import { getDayKey } from '@/utils/getFormatDate'
import { EventListPc } from './pcList'
import { EventListMobile } from './mobileList'

export const AllEvents = () => {
  const { t } = useTranslation('hacktober')
  const kickOff = t('event.kick-off', { returnObjects: true })
  const startTime = dayjs(kickOff['start-time'])
  const endTime = dayjs(kickOff['end-time'])
  const now = dayjs(new Date())
  const weekDay = getDayKey(startTime.day(), 0),
    dateInMonth = startTime.date(),
    month = getDayKey(startTime.month(), 1)
  let state
  if (now.isAfter(endTime)) {
    state = 'isEnd'
  } else if (now.isBefore(startTime)) {
    state = 'isComing'
  } else {
    state = 'isIn'
  }

  const eventGoIcon =
    'https://cdn.illacloud.com/official-website/img/hacktoberFest/eventGo.svg'
  const eventComingIcon =
    'https://cdn.illacloud.com/official-website/img/hacktoberFest/eventComing.svg'

  return (
    <>
      <EventListPc
        kickOff={kickOff}
        weekDay={weekDay}
        month={month}
        dateInMonth={dateInMonth}
        startTime={startTime}
        endTime={endTime}
        eventComingIcon={eventComingIcon}
        eventGoIcon={eventGoIcon}
        dateState={state}
      />
      <EventListMobile
        kickOff={kickOff}
        weekDay={weekDay}
        month={month}
        dateInMonth={dateInMonth}
        startTime={startTime}
        endTime={endTime}
        eventComingIcon={eventComingIcon}
        eventGoIcon={eventGoIcon}
        dateState={state}
      />
    </>
  )
}
