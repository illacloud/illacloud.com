import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { CardButton } from './cardButton'

export const ContributeCards = ({ title, button, children, titleChildren }) => {
  const { t } = useTranslation('hacktober')
  return (
    <div className="w-full h-full bg-black rounded-[16px]">
      <div className={style.cardContainer}>
        <div className="hidden xl:flex w-full  justify-between items-center">
          <h1 className={clsx(style.cardTitle, style.eurostileFont)}>
            {t(title)}
          </h1>
          {titleChildren}
        </div>
        <h1 className={clsx(style.mobileCardTitle, style.eurostileFont)}>
          {t(title)}
        </h1>
        {children}
        <div className='flex xl:hidden'>{titleChildren}</div>
        <div className={style.mobileCardTitleBtn}>
          {button.map((content, _) => (
            <CardButton key={_} content={content} />
          ))}
        </div>
        <div className={style.cardTitleBtn}>
            {button.map((content, _) => (
              <CardButton key={_} content={content} />
            ))}
          </div>
      </div>
    </div>
  )
}
