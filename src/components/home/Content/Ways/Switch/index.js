import LayoutAutoChange from '@/layout/LayoutAutoChange'
import SwitchPC from './PC'
import SwitchMobile from './Mobile'

const Switch = (props) => {
  const options = [
    'solutions.option1.customer_comms',
    'solutions.option2.applicant_tracking',
    'solutions.option3.image_content_manage',
  ]
  return (
    <LayoutAutoChange
      pc={<SwitchPC {...props} options={options} />}
      mobile={<SwitchMobile {...props} options={options} />}
    />
  )
}
export default Switch
