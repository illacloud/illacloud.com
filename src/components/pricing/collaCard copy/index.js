import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import {
  PRICE_COLLAR_LIST,
  COLLAR_UNIT_PRICE,
} from '@/constants/pricingContent'
import { ReactComponent as PriceTip } from '@/img/pricing/priceTip.svg'
import { UpgradeButton } from '../upgradeButton'

export const CollaCard = () => {
  const { t } = useTranslation('pricing')
  return (
    <div className={style.collarContainerStyle}>
      <div className={style.collarPriceHeaderStyle}>
        <span>
          <span className={style.collarPriceTitleStyle}>Colla</span>
          <span className={style.collarPriceDescStyle}>
            {t('billing.pricing.colla.desc')}
          </span>
        </span>
        <span className={style.collarPriceHeaderDescStyle}>
          <span className={style.collarPriceUnitDetailStyle}>
            <span>{t('billing.pricing.colla.feature.conversion.1')}</span>
            <span>≈</span>
          </span>
          <span className={style.collarPriceDescDetailStyle}>
            <span>{t('billing.pricing.colla.feature.conversion.2')}</span>
            <span className={style.orStyle}>{t('or')}</span>
            <span>{t('billing.pricing.colla.feature.conversion.3')}</span>
            <span className={style.orStyle}>{t('or')}</span>
            <span>{t('billing.pricing.colla.feature.conversion.4')}</span>
          </span>
        </span>
      </div>
      <div className={style.collarListStyle}>
        {PRICE_COLLAR_LIST.map((item) => {
          return (
            <div key={item} className={style.listItemStyle}>
              <span className={style.listIconStyle}>
                <PriceTip />
              </span>
              <span className={style.listItemNameStyle}>{t(item)}</span>
            </div>
          )
        })}
      </div>
      <div className={style.operatingStyle}>
        <div>
          <span className={style.priceNumStyle}>
            ${COLLAR_UNIT_PRICE.MONTHLY}
          </span>
          <span className={style.priceNumDescStyle}>
            &nbsp;{t('billing.pricing.colla.price')}
          </span>
        </div>
        <UpgradeButton />
      </div>
    </div>
  )
}
