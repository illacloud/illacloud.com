import { useTranslation } from 'next-i18next'
import React from 'react'
import Link from 'next/link'
import { ContentTitle } from './ContentTitle'
import { Deployment } from './Deployment'
import { Partner } from './Partner'
import { contentList } from '@/constants/content'
import style from './index.module.css'

const ContentWrapper = ({ contentValue }) => {
  const { t } = useTranslation('home')
  const {
    tags,
    desc,
    tittleList,
    color,
    linkUrl,
    linkContent,
    contentSvg,
    extraLinkContent,
    imgDesc,
  } = contentValue
  return (
    <div className={style.contentWrapper}>
      <div className="flex flex-col items-start w-[520px] gap-[12px] lg:gap-[24px]">
        <ContentTitle
          tittleList={tittleList}
          color={color}
        />
        <p className={style.contentDesc}>{t(desc)}</p>
        {tags && (
          <div className="hidden lg:flex flex-row items-start gap-[8px]">
            {tags.map(({ tagDesc, tagBgColor }) => (
              <div
                key={tagDesc}
                className={style.contentTagDesc}
                style={{ backgroundColor: `${tagBgColor}` }}
              >
                {tagDesc}
              </div>
            ))}
          </div>
        )}
        <Link href={linkUrl} legacyBehavior>
          <div
            className={style.contentLink}
          >
            {`${t(linkContent)} ${extraLinkContent}`}
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-[588px]">
        <img
          src={contentSvg}
          alt={ imgDesc || t(linkContent)}
        />
      </div>
    </div>
  )
}

export const NewContent = ({ onChangeShow }) => {
  return (
    <div className="w-full bg-black xl:pb-[200px] pb-[40px]">
      <div className={style.content}>
        {contentList.map((contentValue) => (
          <ContentWrapper key={contentValue.desc} contentValue={contentValue} />
        ))}
        <Deployment />
      </div>
      <Partner onChangeShow={onChangeShow} />
    </div>
  )
}
