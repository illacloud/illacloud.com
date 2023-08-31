import style from './index.module.css'
import { Title } from './title'
import { Banner } from './banner'
import { AboutILLA } from './aboutIlla'
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
        <AboutILLA
          setPlayMaskShow={setPlayMaskShow}
          setActiveKey={setActiveKey}
        />
        <Contribute setActiveKey={setActiveKey} />
        <Swag setActiveKey={setActiveKey} />
        <Events setActiveKey={setActiveKey} />
      </div>
    </div>
  )
}
