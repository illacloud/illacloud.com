import style from './index.module.css'
import { Title } from './title'
import { Contribute } from './contribute'
import { OSSSwag } from './ossSwag'
import { WinSwag } from './winSwag'
import { Events } from './events'
import { useInitHackBtn } from './hooks/useInitHackBtn'

export const MainContent = ({ setPlayMaskShow, setActiveKey }) => {
  useInitHackBtn()
  return (
    <div className={style.mainContentContainer}>
      <Title />
      <div className={style.allContentContainer}>
        <WinSwag setActiveKey={setActiveKey} />
        <Contribute
          setActiveKey={setActiveKey}
          setPlayMaskShow={setPlayMaskShow}
        />
        <OSSSwag setActiveKey={setActiveKey} />
        <Events setActiveKey={setActiveKey} />
      </div>
    </div>
  )
}
