import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useHots from '../../hooks/useHots'

import { bnToDec } from '../../utils'
import { getHotsMakerContract, getEarned } from '../../hots/utils'
import { getFarms } from '../../hots/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const hots = useHots()
  const { account } = useWallet()

  const farms = getFarms(hots)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
