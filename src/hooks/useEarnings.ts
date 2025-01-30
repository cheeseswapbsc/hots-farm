import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getHotsMakerContract } from '../hots/utils'
import useHots from './useHots'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const hots = useHots()
  const hotsMakerContract = getHotsMakerContract(hots)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(hotsMakerContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, hotsMakerContract, hots])

  useEffect(() => {
    if (account && hotsMakerContract && hots) {
      fetchBalance()
    }
  }, [account, block, hotsMakerContract, setBalance, hots])

  return balance
}

export default useEarnings
