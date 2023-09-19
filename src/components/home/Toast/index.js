import * as ReactDOM from 'react-dom'
import styles from './style.module.css'

const ToastItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{props?.value}</div>
    </div>
  )
}

export class Toast {
  static info(value, duration) {
    const containerDiv = document.createElement('div')
    document.body.appendChild(containerDiv)
    ReactDOM.render(
      <ToastItem value={value} time={duration * 1000} />,
      containerDiv,
    )
    setTimeout(() => {
      document.body.removeChild(containerDiv)
    }, duration * 1000)
  }
}
