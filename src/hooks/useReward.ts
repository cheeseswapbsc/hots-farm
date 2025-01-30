import { useCallback } from 'react'

import useHots from './useHots'
import { useWallet } from 'use-wallet'

import { harvest, getHotsMakerContract } from '../hots/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const hots = useHots()
  const hotsMakerContract = getHotsMakerContract(hots)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(hotsMakerContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, hots])

  return { onReward: handleReward }
}

export default useReward
