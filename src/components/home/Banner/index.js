import LayoutAutoChange from '@/layout/LayoutAutoChange'
import BannerPC from './PC'
import BannerMobile from './Mobile'

const Banner = () => {
  return <LayoutAutoChange pc={<BannerPC />} mobile={<BannerMobile />} />
}

export default Banner
