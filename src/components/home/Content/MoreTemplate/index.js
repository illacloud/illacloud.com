import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import LearnMore from '../LearnMore'

const MORE_TEMPLATE_CONTENT = {
  title: 'template.title.quickly_start_from_a',
  href: '',
  moreTitle: 'template.button.explore_more_templat',
  items: [
    {
      templateTitle: 'template.template1_title.car_rental_admin_pan',
      templateDesc: 'template.template1_description.build_for_car_rental',
      templateSrc:
        'https://cdn.illacloud.com/official-website/img/home/ChatGPT%20Plugin.svg',
      templateMoreTitle: 'template.template1_button.learn_more',
      templateMoreHref: '',
    },
    {
      templateTitle: 'template.template2_title.cms_with_content_gen',
      templateDesc: 'template.template2_description.build_for_business_o',
      templateSrc:
        'https://cdn.illacloud.com/official-website/img/home/Builder%20for%20Developers.svg',
      templateMoreTitle: 'template.template2_button.learn_more',
      templateMoreHref: '',
    },
    {
      templateTitle: 'template.template3_title.applicant_tracking',
      templateDesc: 'template.template3_description.build_for_the_human',
      templateSrc:
        'https://cdn.illacloud.com/official-website/img/home/Integrate%20with%20Any%20data%20source.svg',
      templateMoreTitle: 'template.template3_button.learn_more',
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
                  {t(templateTitle)}
                </h2>
                <p className={style.templateTextDescStyle}>{t(templateDesc)}</p>
                <LearnMore
                  href={templateMoreHref}
                  title={t(templateMoreTitle)}
                />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default MoreTemplate
