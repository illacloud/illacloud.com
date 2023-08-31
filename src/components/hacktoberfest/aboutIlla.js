import style from './index.module.css'
import { useTranslation } from 'next-i18next'
import { HackButton } from './hackButton'
import illaBg from '@/img/hacktoberfest/illaBg.svg'
import { useActiveTab } from './hooks/useActiveTab'
import { aboutILLAContent } from '@/constants/hacktober'

export const AboutILLA = ({ setPlayMaskShow, setActiveKey }) => {
  const { t } = useTranslation('hacktober')
  const { title, desc, btnText, href, category } = aboutILLAContent
  const ref = useActiveTab("#about-illa", setActiveKey)

  return (
    <div className={style.aboutContainer} id="about-illa" ref={ref}>
      <img src={illaBg} className={style.illaBg} alt="" />
      <div className={style.aboutContent}>
        <div className={style.aboutTextContainer}>
          <div className="flex flex-col gap-[16px]">
            <h1 className={style.contentTitle}>{t(title)}</h1>
            <p className={style.contentDesc}>{t(desc)}</p>
          </div>
          <HackButton text={btnText} href={href} category={category} />
        </div>
        <img
          src="https://cdn.illacloud.com/official-website/img/home/playVideoCover.png"
          className="xl:w-[650px] w-full cursor-pointer"
          alt=""
          onClick={() => {
            setPlayMaskShow && setPlayMaskShow(true)
          }}
        />
      </div>
    </div>
  )
}
