import LayoutAutoChange from '@/layout/LayoutAutoChange'
import BannerPC from './PC'
import BannerMobile from './Mobile'

const Banner = (props) => {
  return (
    <LayoutAutoChange
      pc={<BannerPC {...props} />}
      mobile={<BannerMobile {...props} />}
    />
  )
}

export default Banner
