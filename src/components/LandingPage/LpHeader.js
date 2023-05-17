import backIcon from '@/img/landingPage/backIcon.svg';
import clsx from 'clsx'
import style from './index.module.css'
import Link from 'next/link'
import { sendTagEvent } from '@/utils/gtag'

export const LpHeader = ({ pageName, title, description, isShowBack = false, btnText = "", name = "", leftImage, backText }) => {

  return (
    <div className={style.lpHeader}>
      <div className={clsx(style.lpHeaderLeft, isShowBack ? 'w-full ' : 'xl:pt-[48px] xl:w-[570px] w-full ')}>
        {isShowBack && (
          <Link href={`/${pageName}`} legacyBehavior>
            <span className={style.back} onClick={() => {
              sendTagEvent({
                action: 'click',
                category: 'landing_page_back',
                label: pageName === "integrations" ? 'Back to integrations' : 'Back to components',
              })
            }}>
              <img src={backIcon} alt='backIcon' />
              <span>{backText}</span>
            </span>
          </Link>
        )}
        <h1 className={style.headerTitle}>{title}</h1>
        <span className={style.headerDesc}>{description}</span>
        <Link legacyBehavior href="https://cloud.illacloud.com/">
          <a
            className={style.headerGo}
            onClick={() => {
              // eslint-disable-next-line no-undef
              gtagReportConversion && gtagReportConversion()
              sendTagEvent({
                action: 'click',
                category: isShowBack ? 'landing_page_build_with' : 'landing_page_try_for_free',
                label: isShowBack ? 'Build with' : 'Try for free',
                value: name,
              })
            }}
          >
            {btnText}
          </a>
        </Link>
      </div>
      {!isShowBack && <img src={leftImage} alt='' className='w-full xl:w-[550px]' />}
    </div>
  )
}
