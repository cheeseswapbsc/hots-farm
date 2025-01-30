import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Hots } from '../../hots'

export interface HotsContext {
  hots?: typeof Hots
}

export const Context = createContext<HotsContext>({
  hots: undefined,
})

declare global {
  interface Window {
    hotssauce: any
  }
}

const HotsProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [hots, setHots] = useState<any>()

  // @ts-ignore
  window.hots = hots
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const hotsLib = new Hots(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setHots(hotsLib)
      window.hotssauce = hotsLib
    }
  }, [ethereum])

  return <Context.Provider value={{ hots }}>{children}</Context.Provider>
}

export default HotsProvider
