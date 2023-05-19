import { Fragment } from 'react';
import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import { sendTagEvent } from '@/utils/gtag'
import { LearnMore } from '@/components/LandingPage/LearnMore';

export const LpTemplate = () => {
  const { t } = useTranslation('landingPageDetails')
  const templateContent = t("second-page.classify", { returnObjects: true })
  const onClick = (target) => {
    // eslint-disable-next-line no-undef
    gtagReportConversion && gtagReportConversion()
    sendTagEvent({
      action: 'click',
      category: 'landing_page_try_now',
      label: 'Try now',
      value: target,
    })
  }

  return (
    <div className={style.templateContainer}>
      {templateContent && templateContent.map(({ label, title, description, link, itemList, btnText, target }) => (
        <Fragment key={label}>
          <div className={style.templateHeader}>
            <h2 className={style.templateHeaderLabel}>{t(label)}</h2>
            <h3 className={style.templateHeaderTitle}>{t(title)}</h3>
            <span className={style.templateHeaderDesc}>{t(description)}</span>
            <LearnMore href={link} btnText={btnText} onClick={() => onClick(target)}/>
          </div>
          <div className={style.templateItemContainer}>
            {
              itemList && itemList.map(({ itemImage, itemDesc, itemLink, itemName, btnText, target }) => (
                <div className={style.templateItem} key={itemName}>
                  <img src={itemImage} alt={itemName} className='w-full' />
                  <h3 className={style.templateItemName}>{t(itemName)}</h3>
                  <div className='h-[64px] overflow-hidden'><span className={style.templateItemDesc}>{t(itemDesc)}</span></div>
                  <LearnMore href={itemLink} btnText={btnText} onClick={() => onClick(target)} />
                </div>
              ))
            }
          </div>
        </Fragment>
      ))}
    </div>
  )
}
