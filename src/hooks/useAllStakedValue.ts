import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getHotsMakerContract,
  getWbnbContract,
  getFarms,
  getTotalLPWbnbValue,
} from '../hots/utils'
import useHots from './useHots'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wbnbAmount: BigNumber
  totalWbnbValue: BigNumber
  tokenPriceInWbnb: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const hots = useHots()
  const farms = getFarms(hots)
  const hotsMakerContract = getHotsMakerContract(hots)
  const wbnbContact = getWbnbContract(hots)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) =>
          getTotalLPWbnbValue(
            hotsMakerContract,
            wbnbContact,
            lpContract,
            tokenContract,
            pid,
          ),
      ),
    )

    setBalance(balances)
  }, [account, hotsMakerContract, hots])

  useEffect(() => {
    if (account && hotsMakerContract && hots) {
      fetchAllStakedValue()
    }
  }, [account, block, hotsMakerContract, setBalance, hots])

  return balances
}

export default useAllStakedValue
