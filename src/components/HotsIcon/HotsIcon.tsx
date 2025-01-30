import React from 'react'
import hots from '../../assets/img/hots.svg'

interface HotsIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const HotsIcon: React.FC<HotsIconProps> = ({ size = 36, v1, v2, v3 }) => (
  <span
    role="img"
    style={{
      fontSize: size,
      filter: v1 ? 'saturate(0.5)' : undefined,
    }}
  >
   <img src={hots} height="64" />
  </span>
)

export default HotsIcon
