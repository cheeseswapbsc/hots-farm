import { useCallback } from 'react'

import useHots from './useHots'
import { useWallet } from 'use-wallet'

import { stake, getHotsMakerContract } from '../hots/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const hots = useHots()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getHotsMakerContract(hots),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, hots],
  )

  return { onStake: handleStake }
}

export default useStake
