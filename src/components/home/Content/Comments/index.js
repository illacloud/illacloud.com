import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import tempCard from '@/img/home3/temp/tempCard.svg'
import quote from '@/img/home3/quote.svg'
import clsx from 'clsx'

const COMMENT_CONTENT = {
  title: 'What people saying',
  items: [
    {
      content:
        'Review: This tool has been a game-changer for me. It helps me generate highly efficient content in less time. The customized AI Agent and App perfectly cater to my business needs.',
      avatarSrc: tempCard,
      userName: 'Mark Thompson',
      company: 'SEO Specialist',
    },
    {
      content:
        'Review: This tool has been a game-changer for me. It helps me generate highly efficient content in less time. The customized AI Agent and App perfectly cater to my business needs. The customized AI Agent and App perfectly cater to my business needsThe customized AI Agent and App perfectly cater to my business needs',
      avatarSrc: tempCard,
      userName: 'Mark Thompson2',
      company: 'SEO Specialist',
    },
    {
      content:
        'Review: This tool has been a game-changer for me. It helps me generate highly efficient content in less time.',
      avatarSrc: tempCard,
      userName: 'Mark Thompson',
      company: 'SEO Specialist',
    },
    {
      content:
        'Review: This tool has been a game-changer for me. It helps me generate highly efficient content in less time. The customized AI Agent and App perfectly cater to my business needs.',
      avatarSrc: tempCard,
      userName: 'Mark Thompson',
      company: 'SEO Specialist',
    },
    {
      content:
        'Review: This tool has been a game-changer for me. It helps me generate highly efficient content in less time. The customized AI Agent and App perfectly cater to my business needs. The customized AI Agent and App perfectly cater to my business needsThe customized AI Agent and App perfectly cater to my business needs',
      avatarSrc: tempCard,
      userName: 'Mark Thompson2',
      company: 'SEO Specialist',
    },
    {
      content:
        'Review: This tool has been a game-changer for me. It helps me generate highly efficient content in less time.',
      avatarSrc: tempCard,
      userName: 'Mark Thompson',
      company: 'SEO Specialist',
    },
  ],
}

const Comments = () => {
  const { t } = useTranslation('home')
  return (
    <div className={style.commentsContainerStyle}>
      <h1 className={style.commentsTitleStyle}>{t(COMMENT_CONTENT.title)}</h1>
      <div className={style.commentsItemsContainerStyle}>
        {COMMENT_CONTENT.items.map(
          ({ content, avatarSrc, userName, company }, index) => (
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
                  <span className={style.contentTextStyle}>{content}</span>
                  <img
                    src={quote}
                    width="10"
                    alt=""
                    className={style.reverseQuoteStyle}
                  />
                </div>
                <div className={style.userInfoContainerStyle}>
                  <img src={avatarSrc} alt="" />
                  <span className="flex flex-col">
                    <span className={style.commentUserNameStyle}>
                      {userName}
                    </span>
                    <span className={style.commentUserCompanyStyle}>
                      {company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}
export default Comments
