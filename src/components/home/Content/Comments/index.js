import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import quote from '@/img/home3/quote.svg'
import clsx from 'clsx'

const COMMENT_CONTENT = {
  title: 'testimonial.title.user_testimonials',
  items: [
    {
      content: 'testimonial.testimonial1_content.illa_cloud_has_been',
      userName: 'testimonial.testimonial1_username.christopher',
      company: 'testimonial.testimonial1_usertitle.seo_specialist',
    },
    {
      content: 'testimonial.testimonial2_content.i_think_i_become_a_b',
      userName: 'testimonial.testimonial2_username.lucas',
      company: 'testimonial.testimonial2_usertitle.content_strategist',
    },
    {
      content: 'testimonial.testimonial3_content.it_empowers_me_to_pr',
      userName: 'testimonial.testimonial3_username.harper',
      company: 'testimonial.testimonial3_usertitle.customer_service_man',
    },
    {
      content: 'testimonial.testimonial4_content.ai_agent_low_code',
      userName: 'testimonial.testimonial4_username.abigail',
      company: 'testimonial.testimonial4_usertitle.communication_specia',
    },
    {
      content: 'testimonial.testimonial5_content.i_need_to_oversee_va',
      userName: 'testimonial.testimonial5_username.matthew',
      company: 'testimonial.testimonial5_usertitle.business_founder',
    },
    {
      content: 'testimonial.testimonial6_content.using_illa_cloud_to',
      userName: 'testimonial.testimonial6_username.samuel',
      company: 'testimonial.testimonial6_usertitle.website_administrato',
    },
  ],
}

const Comments = () => {
  const { t } = useTranslation('home')
  return (
    <div className={style.commentsContainerStyle}>
      <h1 className={style.commentsTitleStyle}>{t(COMMENT_CONTENT.title)}</h1>
      <div className={style.commentsItemsContainerStyle}>
        {COMMENT_CONTENT.items.map(({ content, userName, company }, index) => (
          <div
            key={userName}
            className={clsx(
              style.borderStyle,
              index !== 0 ? 'mt-[8px] xl:mt-[16px]' : '',
            )}
          >
            <div className={style.commentsItemStyle}>
              <div className={style.commentContentStyle}>
                <img src={quote} width="10" alt="" />
                <span className={style.contentTextStyle}>{t(content)}</span>
                <img
                  src={quote}
                  width="10"
                  alt=""
                  className={style.reverseQuoteStyle}
                />
              </div>
              <span className="flex flex-col">
                <span className={style.commentUserNameStyle}>
                  {t(userName)}
                </span>
                <span className={style.commentUserCompanyStyle}>
                  {t(company)}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Comments
