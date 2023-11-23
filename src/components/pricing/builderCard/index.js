import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import style from './index.module.css'
import {
  PRICE_BUILDER_LIST,
  PRICE_COLLAR_LIST,
  LICENSE_UNIT_PRICE,
  COLLAR_UNIT_PRICE,
} from '@/constants/pricingContent'
import AgentCardBg from '@/img/pricing/agentCardBg.svg'
import BuilderCardBg from '@/img/pricing/builderCardBg.svg'
import TitleCycle from '@/img/pricing/titleCycle'
import { ReactComponent as PriceTip } from '@/img/pricing/priceTip.svg'
import { UpgradeButton } from '../upgradeButton'

export const BuilderCard = () => {
  const { t } = useTranslation('pricing')
  return (
    <div className={style.premiumCardContainerStyle}>
      <div className={style.premiumCardContainer}>
        <div className={style.premiumHeaderStyle}>
          <span className={style.premiumTitleStyle}>Premium</span>
          <span className={style.premiumDescStyle}>
            {t('billing.pricing.premium.desc')}
          </span>
        </div>
        <div className={clsx(style.cardBaseStyle, style.priceCardStyle)}>
          <img src={BuilderCardBg} className={style.cardBgStyle} alt="" />
          <div className={style.priceListTitleContainerStyle}>
            <span
              className={clsx(style.listIconStyle, style.builderListTitleStyle)}
            >
              <TitleCycle />
            </span>
            <span className={style.priceListTitleStyle}>ILLA Builder</span>
          </div>
          <div className={style.priceListStyle}>
            {PRICE_BUILDER_LIST.map((item) => {
              return (
                <div key={item} className={style.listItemStyle}>
                  <span
                    className={clsx(
                      style.cardIconStyle,
                      style.builderListTitleStyle,
                      style.listIconStyle,
                    )}
                  >
                    <PriceTip />
                  </span>
                  <span className={style.listItemNameStyle}>{t(item)}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className={style.operatingStyle}>
          <div>
            <span className={style.priceNumStyle}>
              ${LICENSE_UNIT_PRICE.MONTHLY}
            </span>
            <span className={style.priceNumDescStyle}>
              {t('billing.pricing.premium.price')}
            </span>
          </div>
          <UpgradeButton />
        </div>
      </div>

      <div className={style.premiumCardContainer}>
        <div className={style.premiumHeaderStyle}>
          <span className={style.premiumTitleStyle}>Colla</span>
          <span className={style.premiumDescStyle}>
            {t('billing.pricing.colla.desc')}
          </span>
        </div>
        <div className={clsx(style.cardBaseStyle, style.priceCardStyle)}>
          <img src={AgentCardBg} className={style.cardBgStyle} alt="" />
          <div className={style.priceListStyle}>
            {PRICE_COLLAR_LIST.map((item) => {
              return (
                <div key={item} className={style.listItemStyle}>
                  <span
                    className={clsx(
                      style.cardIconStyle,
                      style.agentListTitleStyle,
                      style.listIconStyle,
                    )}
                  >
                    <PriceTip />
                  </span>
                  <span className={style.listItemNameStyle}>{t(item)}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className={style.operatingStyle}>
          <div>
            <span className={style.priceNumStyle}>
              ${COLLAR_UNIT_PRICE.MONTHLY}
            </span>
            <span className={style.priceNumDescStyle}>
              {t('billing.pricing.colla.price')}
            </span>
          </div>
          <UpgradeButton />
        </div>
      </div>
    </div>
  )
}
