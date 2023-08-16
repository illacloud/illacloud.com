import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { Options } from './options'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'

export const IllaAi = ({ desc, options, people }) => {
  const { t } = useTranslation('hacktober')
  const peopleList = people['people-list']
  peopleList.sort((a, b) => parseInt(a.sort) - parseInt(b.sort))
  const onClick = (label) => {
    sendTagEvent({
      action: 'click',
      category: 'hacktober_ai_agent_click',
      label
    })
  }

  return (
    <div className={style.illAIContainer}>
      <div className={style.illAIListContainer}>
        <span className={clsx(style.cardDesc, style.interFont)}>
          {t(desc)}
        </span>
        <Options options={options} />
      </div>
      <div className={style.partnerContainer}>
        <div className={style.partnerIcons}>
          {peopleList.map(({ logo, link = '' }) => (
            <Link href={link} key={logo} onClick={() => onClick(link)}>
              <img
                src={logo}
                className={style.peopleIconContent}
                alt=""
              />
            </Link>
          ))}
        </div>
        <span className={clsx(style.partnerTitle, style.interFont)}>
          {t(people['ai-agent'])}
        </span>
      </div>
    </div>
  )
}
