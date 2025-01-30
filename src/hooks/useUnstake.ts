import { useCallback } from 'react'

import useHots from './useHots'
import { useWallet } from 'use-wallet'

import { unstake, getHotsMakerContract } from '../hots/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const hots = useHots()
  const hotsMakerContract = getHotsMakerContract(hots)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(hotsMakerContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, hots],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
