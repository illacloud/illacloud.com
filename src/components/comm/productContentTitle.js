import style from './index.module.css'

export const ProductContentTitle = ({title}) => {
  return <h1 className={style.mainContentTitle}>{title}</h1>
}