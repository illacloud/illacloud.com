import React, { useState } from 'react'
import style from './index.module.css'
import { sendTagEvent } from '@/utils/gtag'

const Publicize = ({ publicizeList }) => {
  const [publicizeItem, setPublicize] = useState({})
  const now = Date.now()
  for (let item of publicizeList) {
    const { startTime, endTime } = item
    const isMoreStarTime = now >= new Date(startTime).getTime()
    const isLessEndTime = now <= new Date(endTime).getTime()
    if (isMoreStarTime && isLessEndTime) {
      setPublicize(item)
      return
    }
  }
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
      <img
        src={publicizeItem.bgImg}
        alt="publicize background"
        className={style.publicizeStyle}
      />
      <span className="flex flex-row justify-between items-center absolute z-[1]">
        <span className={style.publicIntru}>
          <img
            className="h-[24px] w-[24px]"
            src={publicizeItem.logo}
            alt="publicize logo"
          />
          {publicizeItem.intruduction}
        </span>
        <span className={style.publicSlogan}>{publicizeItem.slogan}</span>
      </span>
    </a>
  )
}

export const getStaticProps = async () => {
  let publicizeList
  try {
    const res = await fetch(
      'https://strapi.illasoft.com/Official-website-messages',
    )
    const data = await res.json()
    publicizeList = data
  } catch {
    publicizeList = []
  }
  return {
    props: {
      publicizeList,
    },
  }
}

export default Publicize
