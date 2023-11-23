import LayoutAutoChange from '@/layout/LayoutAutoChange'
import ComparePC from './PC'
import CompareMobile from './Mobile'

const Compare = (props) => {
  return (
    <LayoutAutoChange
      pc={<ComparePC {...props} />}
      mobile={<CompareMobile {...props} />}
    />
  )
}

export default Compare
