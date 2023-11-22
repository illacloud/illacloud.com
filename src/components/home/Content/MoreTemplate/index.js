import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import LearnMore from '../LearnMore'
import tempTemplate from '@/img/home3/temp/tempTemplate.svg'

const MORE_TEMPLATE_CONTENT = {
  title: 'Get started with more templates',
  href: '',
  moreTitle: 'Explore templates',
  items: [
    {
      templateTitle: 'ChatGPT Plugin1',
      templateDesc:
        'With the embedded Chatgpt Plugin, you can input natural language and get SQL statements that can be run directly.',
      templateSrc: tempTemplate,
      templateMoreTitle: 'learn more',
      templateMoreHref: '',
    },
    {
      templateTitle: 'ChatGPT Plugin2',
      templateDesc:
        'With the embedded Chatgpt Plugin, you can input natural language and get SQL statements that can be run directly.',
      templateSrc: tempTemplate,
      templateMoreTitle: 'learn more',
      templateMoreHref: '',
    },
    {
      templateTitle: 'ChatGPT Plugin3',
      templateDesc:
        'With the embedded Chatgpt Plugin, you can input natural language and get SQL statements that can be run directly. With the embedded Chatgpt Plugin, you can input natural language and get SQL statements that can be run directly. With the embedded Chatgpt Plugin, you can input natural language and get SQL statements that can be run directly.',
      templateSrc: tempTemplate,
      templateMoreTitle: 'learn more',
      templateMoreHref: '',
    },
  ],
}

const MoreTemplate = () => {
  const { t } = useTranslation('home')
  return (
    <div className={style.templateContainerStyle}>
      <div className={style.templateHeadContainerStyle}>
        <h1>{t(MORE_TEMPLATE_CONTENT.title)}</h1>
        <LearnMore
          href={MORE_TEMPLATE_CONTENT.href}
          title={MORE_TEMPLATE_CONTENT.moreTitle}
        />
      </div>
      <div className={style.templateItemContainerStyle}>
        {MORE_TEMPLATE_CONTENT.items.map(
          ({
            templateDesc,
            templateMoreHref,
            templateMoreTitle,
            templateSrc,
            templateTitle,
          }) => (
            <div key={templateTitle} className={style.templateItemStyle}>
              <img src={templateSrc} className="w-full" alt="" />
              <div className={style.templateTextStyle}>
                <h2 className={style.templateTextTitleStyle}>
                  {templateTitle}
                </h2>
                <p className={style.templateTextDescStyle}>{templateDesc}</p>
                <LearnMore href={templateMoreHref} title={templateMoreTitle} />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default MoreTemplate
