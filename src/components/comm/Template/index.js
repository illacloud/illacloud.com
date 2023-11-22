import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import ProductContentTitle from '@/components/comm/ProductContentTitle'
import { LearnMore } from '@/components/LandingPage/LearnMore'
import { sendTagEvent } from '@/utils/gtag'

const Template = () => {
  const { t } = useTranslation('landingPageDetails')
  const templateContent = t('second-page.classify', { returnObjects: true })[1]
  const { label, itemList } = templateContent
  const onClick = (target) => {
    sendTagEvent({
      action: 'click',
      category: `learn_more_${target}_show`,
    })
  }
  return (
    <div className={style.mainContent}>
      <ProductContentTitle title={label} />
      <div className={style.templateContent}>
        {itemList.length > 0 &&
          itemList.map(
            (
              { itemImage, itemName, itemDesc, itemLink, btnText, target },
              index,
            ) => (
              <div
                key={itemName}
                className="flex flex-col items-start gap-[12px] xl:gap-[24px] rounded-[16px] xl:w-[368px] text-white-01  h-full "
              >
                <img src={itemImage} className="w-full" alt="" />
                <div className="flex flex-col items-start gap-[8px] relative h-full justify-between">
                  <h2 className="font-[600] text-[14px] leading-[17px] xl:text-[24px] xl:leading-[29px] ">
                    {itemName}
                  </h2>
                  <p className="hidden xl:block font-[400] text-[14px] leading-[22px]">
                    {itemDesc}
                  </p>
                  <LearnMore
                    href={itemLink}
                    btnText={btnText}
                    onClick={() => onClick(target)}
                    showReport={index === 0 ? 'learn_more_show' : undefined}
                  />
                </div>
              </div>
            ),
          )}
      </div>
    </div>
  )
}

export default Template
