import LayoutAutoChange from '@/layout/LayoutAutoChange'
import NavPC from './PC'
import NavMobile from './Mobile'

const Nav = (props) => {
  return (
    <LayoutAutoChange
      pc={<NavPC {...props} />}
      mobile={<NavMobile {...props} />}
    />
  )
}

export default Nav
