import React, { useState, useMemo, useEffect } from 'react'
import style from './index.module.css'
import { sendTagEvent } from '@/utils/gtag'

const Publicize = () => {
  const [ publicizeList, setPublicizeList ] = useState([])
  const host = 'https://strapi.illasoft.com'

  const publicizeItem = useMemo(() => {
    const now = Date.now()
    if(!publicizeList) return []
    for(let item of publicizeList) {
      const { startTime, endTime } = item
      const isMoreStarTime = now >= new Date(startTime).getTime()
      const isLessEndTime = now <= new Date(endTime).getTime()
      if (isMoreStarTime && isLessEndTime) {
        return item
      }
    }
  }, [publicizeList])

  useEffect(() => {
    const request = async () => {
      try {
        const res = await fetch(
          'https://strapi.illasoft.com/Official-website-messages',
        )
        const data = await res.json()
        setPublicizeList(data)
      } catch {
        setPublicizeList([])
      }
    }
    request()
  }, [])
  if (!publicizeList || !publicizeItem) return null
  return (
    <a
      className={style.publicize}
      href={publicizeItem.href}
      target="_blank"
      rel="noreferrer"
      onClick={sendTagEvent({
        action: 'click',
        category: 'homepage_body_announcement_click',
        label: 'announcement',
        value: `${publicizeItem.href}`,
      })}
    >
      <span className={style.publicizeStyle}>
        <img
        className='w-full'
          src={host + publicizeItem?.bgImg?.url}
          alt="publicize background"
        />
      </span>
      <span className="flex flex-row justify-between items-center absolute z-[1]">
        <span className={style.publicIntru}>
          <img
            className="h-[24px] w-[24px]"
            src={publicizeItem.logo}
            alt="publicize logo"
          />
          {publicizeItem.intruduction}
        </span>
      </span>
      <span className={style.publicSlogan}>{publicizeItem.slogan}</span>
    </a>
  )
}

export default Publicize
