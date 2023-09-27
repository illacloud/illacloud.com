import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import line from '@/img/hacktoberfest/line.svg'
import { EventCard } from './eventCard'
import dayjs from 'dayjs'
import clsx from 'clsx'
import { AllEvents } from './allEvents'
import { getDayKey } from '@/utils/getFormatDate'
import { useRouter } from 'next/router'
import { useActiveTab } from './hooks/useActiveTab'
import { useState } from 'react'
import { OptionsCard } from './optionsCard'

const eventsContent = {
  title: 'event.title',
  desc: 'event.description',
}

export const Events = ({ setActiveKey }) => {
  const { t } = useTranslation('hacktober')
  const ref = useActiveTab('#event', setActiveKey)
  const router = useRouter()
  const [visibility, setVisibility] = useState(false)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [content, setContent] = useState('')

  const handleCalendarClick = (e, value) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    setVisibility(!visibility)
    setTop(top)
    setLeft(left)
    setContent(value)
  }

  const eventList = t('event.list', {
    returnObjects: true,
  })

  eventList.sort((a, b) => a.sort - b.sort)
  const curEventList = eventList.map((content) => {
    const startTime = dayjs(content['start-time'])
    const endTime = dayjs(content['end-time'])
    const now = dayjs(new Date())
    const weekDay = getDayKey(startTime.day(), 0),
      dateInMonth = startTime.date(),
      month = getDayKey(startTime.month(), 1)
    const difference =
      (startTime.valueOf() - now.valueOf()) / (1000 * 60 * 60 * 24)
    let state
    if (now.isAfter(endTime)) {
      state = 'isEnd'
    } else if (difference < 1 && now.isBefore(endTime)) {
      state = 'isIn'
    } else {
      state = 'isComing'
    }
    return {
      ...content,
      startTime,
      endTime,
      state,
      weekDay,
      dateInMonth,
      month,
    }
  })
  return (
    <div className={style.eventsContainer} id="event" ref={ref}>
      <img src={line} className={style.line} alt="" />
      <h1
        className={clsx(
          style.contentTitle,
          router.locale === 'zh-CN' ? style.zhTitle : style.otherTitle,
          'relative z-[1]',
        )}
      >
        {t(eventsContent.title)}
      </h1>
      <AllEvents handleCalendarClick={handleCalendarClick} />
      <div className={style.eventCardContainer}>
        {curEventList.map((content) => (
          <EventCard
            key={content.partner}
            content={content}
            handleCalendarClick={handleCalendarClick}
          />
        ))}
      </div>
      <OptionsCard
        content={content}
        visible={visibility}
        styles={{ left, top }}
        handleVisible={setVisibility}
      />
    </div>
  )
}
