import style from './index.module.css'
import joinItem from '@/img/home3/joinItem.svg'

const JoinItem = () => {
  return (
    <span className={style.joinItemStyle}>
      <img
        src={joinItem}
        width="16"
        height="29"
        className={style.joinItemIconStyle}
        alt=""
      />
    </span>
  )
}

const ContentItem = ({ iconSrc, text, isLast }) => {
  return (
    <div className={style.contentItemContainerStyle}>
      <div className={style.borderContainerStyle}>
        <div className={style.ItemContainerStyle}>
          <img src={iconSrc} className={style.ItemIconStyle} alt="" />
          <span>{text}</span>
        </div>
      </div>
      {!isLast && <JoinItem />}
    </div>
  )
}
export default ContentItem
