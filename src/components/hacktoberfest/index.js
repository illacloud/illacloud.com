import style from './index.module.css'
import { Title } from './title'
import { Banner } from './banner'
import { Contribute } from './contribute'
import { Swag } from './swag'
import { Events } from './events'
import { useInitHackBtn } from './hooks/useInitHackBtn'

export const MainContent = ({ setPlayMaskShow, setActiveKey }) => {
  useInitHackBtn()
  return (
    <div className={style.mainContentContainer}>
      <Title />
      <div className={style.allContentContainer}>
        <Banner />
        <Swag setActiveKey={setActiveKey} />
        <Contribute
          setActiveKey={setActiveKey}
          setPlayMaskShow={setPlayMaskShow}
        />
        <Events setActiveKey={setActiveKey} />
      </div>
    </div>
  )
}
