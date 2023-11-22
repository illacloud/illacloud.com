import tempCard from '@/img/home3/temp/tempCard.svg'
import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import CardContentItem from './CardContentItem'

const CARD_CONTENT = {
  title: 'steps to customize your AI tools',
  desc: 'With our GPT-based AI assistant, you can input your requirements in natural language, then generate SQL with AI.',
  items: [
    {
      imageSrc: tempCard,
      title: 'Customized tailored to your business1',
      desc: 'With our GPT-based AI assistant, you can input your requirements in natural language, then generate SQL with AI.',
      moreTitle: 'View all integrations',
      moreHref: '',
    },
    {
      imageSrc: tempCard,
      title: 'Customized tailored to your business2',
      desc: 'With our GPT-based AI assistant, you can input your requirements in natural language, then generate SQL with AI.',
      moreTitle: 'View all integrations',
      moreHref: '',
      reverse: true,
    },
    {
      imageSrc: tempCard,
      title: 'Customized tailored to your business3',
      desc: 'With our GPT-based AI assistant, you can input your requirements in natural language, then generate SQL with AI.',
      moreTitle: 'View all integrations',
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
