import style from './index.module.css'
import AllContent from './AllContent'
import Ways from './Ways'
import CardContent from './CardContent'
import MoreTemplate from './MoreTemplate'
import FAQ from '@/components/comm/Faq'
import CommBottom from '@/components/comm/CommBottom'
import LogoWall from '@/components/home/Content/LogoWall'
import Comments from './Comments'

const NewContent = ({ uri }) => {
  return (
    <div className={style.contentContainer}>
      <div className={style.content}>
        <LogoWall />
        <AllContent />
        <Ways />
        <CardContent />
        <MoreTemplate />
        <Comments />
        <FAQ translationSpace={'home'} />
      </div>
      <div className={style.commBottomContainerStyle}>
        <CommBottom scrollStart={0.9368} scrollEnd={1} uri={uri} />
      </div>
    </div>
  )
}

export default NewContent
