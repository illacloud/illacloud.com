import clsx from "clsx";
import styles from '../index.module.css'


export function Content() {

  return <div className={clsx(styles.span, 'flex flex-col justify-center items-center font-bold')}>
    <span>Accelerate your internal</span>
    <span> tools development</span>
    <div className={clsx(styles.button,'pt-16')}>
      <span className='px-12 py-4 mr-4 bg-amber-100  rounded-full bg-[#e5e6eb] text-[#1d2129] '>Self-Hosted</span>
      <span className='px-12 py-4 bg-amber-50  rounded-full bg-[#654aec] text-white'>ILLA cloud</span>
    </div>
  </div>
}
