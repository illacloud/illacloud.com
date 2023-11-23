import { motion } from 'framer-motion'
import partnerLine from '@/img/home3/partnerLine.svg'

const PartnerLine = ({ width }) => (
  <>
    {width !== undefined ? (
      <motion.svg
        width="83"
        height="19"
        viewBox="0 0 83 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeDasharray="75"
        strokeDashoffset={width}
      >
        <path
          className="partnerLine"
          d="M78.5 4C56.5 17.5 24 17.5 4.5 4"
          stroke="url(#paint0_linear_6710_9564)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6710_9564"
            x1="-8.75001"
            y1="12.7499"
            x2="93.7499"
            y2="-2.7501"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.489583" stopColor="#5021CA" />
            <stop offset="1" stopColor="#8D1EA9" />
          </linearGradient>
        </defs>
      </motion.svg>
    ) : (
      <img src={partnerLine} width="50" alt="" />
    )}
  </>
)

export default PartnerLine
