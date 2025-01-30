import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getHotsMakerContract, getFarms } from '../hots/utils'
import useHots from './useHots'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const hots = useHots()
  const farms = getFarms(hots)
  const hotsMakerContract = getHotsMakerContract(hots)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(hotsMakerContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, hotsMakerContract, hots])

  useEffect(() => {
    if (account && hotsMakerContract && hots) {
      fetchAllBalances()
    }
  }, [account, block, hotsMakerContract, setBalance, hots])

  return balances
}

export default useAllEarnings
