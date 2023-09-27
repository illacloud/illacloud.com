import style from './index.module.css'
import { ContributeCards } from './contributeCards'
import { useTranslation } from 'next-i18next'
import { ContributeHeader } from './contributeHeader'
import { ContributeHeaderMobile } from './contributeHeaderMobile'
import { StepCard } from './stepCard'
import { StepCardMobile } from './stepCardMobile'
import { BuildWith } from './buildWith'
import { IllaAi } from './illaAi'
import clsx from 'clsx'
import Link from 'next/link'
import { useActiveTab } from '../hooks/useActiveTab'
import { contributeContent } from '@/constants/hacktober'

export const Contribute = ({ setPlayMaskShow, setActiveKey }) => {
  const { t } = useTranslation('hacktober')
  const partner = t('contribute-method.label.build-with-illa', {
    returnObjects: true,
  })
  const peoples = t('contribute-method.label.illa-with-ai', {
    returnObjects: true,
  })
  const {
    cards: { card1, card2, card3 },
  } = contributeContent
  contributeContent.cards.card1['partner'] = partner
  contributeContent.cards.card2['peoples'] = peoples
  const ref = useActiveTab('#contribute', setActiveKey)

  return (
    <div ref={ref} className={style.contributeContainer} id="contribute">
      <ContributeHeader
        setPlayMaskShow={setPlayMaskShow}
        {...contributeContent.info}
      />
      <ContributeHeaderMobile
        setPlayMaskShow={setPlayMaskShow}
        {...contributeContent.info}
      />
      <div className={style.contributeContentContainer}>
        <div className={style.contributeContentInfoContainer}>
          <span className={clsx(style.winTitle, style.winSwagTitle)}>
            {t('contribute-method.title.package.title')}
          </span>
          <span className={style.winSwagDesc}>
            {t('contribute-method.title.package.desc')}
          </span>
        </div>
        <ContributeCards title={card1.title} button={card1.button}>
          <BuildWith
            descList={card1.desc}
            options={card1.options}
            partner={card1.partner}
          />
        </ContributeCards>
        <ContributeCards title={card2.title} button={card2.button}>
          <IllaAi
            desc={card2.desc}
            options={card2.options}
            people={card2.peoples}
          />
        </ContributeCards>
      </div>
      <div className={style.contributeContentContainer}>
        <span className={clsx(style.winTitle, style.winDigtalTitle)}>
          {t('contribute-method.title.badge.title')}
        </span>
        <StepCard />
        <StepCardMobile />
        <ContributeCards
          title={card3.title}
          button={card3.button}
          titleChildren={
            <Link href="#swag">
              <span
                className={clsx(
                  style.partnerTitle,
                  'text-[#FC8E00] cursor-pointer',
                )}
              >
                {t(card3.options)}
              </span>
            </Link>
          }
        >
          <div className="flex flex-col gap-[12px] xl:gap-[32px]">
            <span
              className={clsx(style.cardDesc, style.interFont, 'flex flex-col')}
            >
              {card3.desc.map((val) => (
                <span key={val}>{t(val)}</span>
              ))}
            </span>
          </div>
        </ContributeCards>
      </div>
    </div>
  )
}
