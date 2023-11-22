import LayoutAutoChange from '@/layout/LayoutAutoChange'
import SwitchPC from './PC'
import SwitchMobile from './Mobile'

const Switch = (props) => {
  return (
    <LayoutAutoChange
      pc={<SwitchPC {...props} />}
      mobile={<SwitchMobile {...props} />}
    />
  )
}
export default Switch
