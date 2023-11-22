import { InfoContext } from '@/context'
import { useContext } from 'react'

const LayoutAutoChange = ({ pc, mobile }) => {
  const info = useContext(InfoContext)
  return info?.isMobile ? mobile : pc
}

export default LayoutAutoChange
