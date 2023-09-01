import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'
import { useRouter } from 'next/router'

export const ContributeInfo = ({ title, desc, button }) => {
  const { t } = useTranslation('hacktober')
  const router = useRouter()

  const onClick = () => {
    sendTagEvent({
      action: 'click',
      category: button.category,
    })
  }

  return (
    <div className={style.contributeInfoContainer}>
      <div className="flex flex-col gap-[16px] ">
        <h1 className={clsx(
                style.contributeTitle,
                router.locale === 'zh-CN' ? style.zhTitle : style.otherTitle,
              )}>
          {t(title)}
        </h1>
        <p className={style.contributeDesc}>
          <span>{t(desc[0])}</span>
          <span>
            <span>{t(desc[1])}</span>
            <span className="underline">{t(desc[2])}</span>
          </span>
        </p>
      </div>
      <Link href={button.href ?? ''} onClick={onClick}>
        <span className={style.infoBtn}>{t(button.text)}&nbsp;&gt;</span>
      </Link>
    </div>
  )
}
