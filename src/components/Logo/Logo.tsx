import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import hots from '../../assets/img/logo.svg'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={hots} height="48" style={{ marginTop: -4 }} />
      <StyledText>
        HOTS Maker
      </StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledText = styled.span`
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-left: ${(props) => props.theme.spacing[2]}px;
`

export default Logo
