import { v4 } from 'uuid'

const TitleCycleIcon = () => {
  const id = v4()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="6" stroke={`url(#${id})`} strokeWidth="4" />
      <defs>
        <linearGradient
          id={id}
          x1="0"
          y1="8"
          x2="16"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
export default TitleCycleIcon
