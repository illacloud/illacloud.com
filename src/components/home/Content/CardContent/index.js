import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import CardContentItem from './CardContentItem'

const CARD_CONTENT = {
  title: 'how_to_use.title.3_steps_to_customize',
  desc: 'how_to_use.description.build_tools_through',
  items: [
    {
      imageSrc: 'https://cdn.illacloud.com/official-website/img/home/step1.svg',
      title: 'how_to_use.step1_title.create_ai_agent_for',
      desc: 'how_to_use.step1_description.you_can_create_an_ai',
      moreTitle: 'how_to_use.step1_button.ai_agent_marketplace',
      moreHref: '',
    },
    {
      imageSrc: 'https://cdn.illacloud.com/official-website/img/home/step2.svg',
      title: 'how_to_use.step2_title.build_the_frontend_p',
      desc: 'how_to_use.step2_description.by_dragging_and_drop',
      moreTitle: 'how_to_use.step2_button.illa_app_marketplace',
      moreHref: '',
      reverse: true,
    },
    {
      imageSrc: 'https://cdn.illacloud.com/official-website/img/home/step3.svg',
      title: 'how_to_use.step3_title.connect_to_your_data',
      desc: 'how_to_use.step3_description.enable_data_integrat',
      moreTitle: 'how_to_use.step3_button.supported_data_sourc',
      moreHref: '',
    },
  ],
}

const CardContent = () => {
  const { t } = useTranslation('home')
  return (
    <div className={style.cardContentContainerStyle}>
      <div className={style.headerContainerStyle}>
        <h1 className={style.textTitleStye}>
          <span className={style.textTitleNumStyle}>3&nbsp;</span>
          {t(CARD_CONTENT.title)}
        </h1>
        <span className={style.textDescStyle}>{t(CARD_CONTENT.desc)}</span>
      </div>
      {CARD_CONTENT.items.map(
        ({ imageSrc, title, desc, moreHref, moreTitle, reverse }, i) => (
          <CardContentItem
            key={title}
            imageSrc={imageSrc}
            desc={desc}
            title={title}
            moreTitle={moreTitle}
            reverse={reverse}
            moreHref={moreHref}
            stepNum={i + 1}
          />
        ),
      )}
    </div>
  )
}
export default CardContent
