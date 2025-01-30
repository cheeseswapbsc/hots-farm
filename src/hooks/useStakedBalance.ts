import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getHotsMakerContract } from '../hots/utils'
import useHots from './useHots'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const hots = useHots()
  const hotsMakerContract = getHotsMakerContract(hots)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(hotsMakerContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, hots])

  useEffect(() => {
    if (account && hots) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, hots])

  return balance
}

export default useStakedBalance
