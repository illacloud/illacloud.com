import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import docIcon from '@/img/hacktoberfest/doc.svg'
import playIcon from '@/img/hacktoberfest/play.svg'
import { CardButton } from '../cardButton'

export const ContributeHeaderMobile = ({ setPlayMaskShow, title }) => {
  const { t } = useTranslation('hacktober')
  const router = useRouter()
  const contents = [
    {
      text: 'contribute-method.steps.doc',
      href: 'https://github.com/illacloud/illa-builder/blob/main/hacktoberfest2023/README.md',
      longButton: true,
      leftIcon: docIcon,
    },
    {
      text: 'contribute-method.steps.video',
      pureButton: true,
      onClick: setPlayMaskShow,
      leftIcon: playIcon,
    },
  ]

  return (
    <div className={style.contributeInfoContainer}>
      <div className={style.contributeHeaderContainer}>
        <h1
          className={clsx(
            style.contributeTitle,
            router.locale === 'zh-CN' ? style.zhTitle : style.otherTitle,
          )}
        >
          {t(title)}
        </h1>
      </div>
      <div className={style.mobileCardTitleBtn}>
        {contents.map((content) => {
          return <CardButton key={content.text} content={content} />
        })}
      </div>
    </div>
  )
}
