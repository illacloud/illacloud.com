import LayoutAutoChange from '@/layout/LayoutAutoChange'
import MenuSelectPC from './PC'
import MenuSelectMobile from './Mobile'

const MenuSelect = (props) => {
  return (
    <LayoutAutoChange
      pc={<MenuSelectPC {...props} />}
      mobile={<MenuSelectMobile {...props} />}
    />
  )
}

export default MenuSelect
