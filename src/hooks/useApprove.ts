import { useCallback } from 'react'

import useHots from './useHots'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { approve, getHotsMakerContract } from '../hots/utils'

const useApprove = (lpContract: Contract) => {
  const { account }: { account: string; ethereum: provider } = useWallet()
  const hots = useHots()
  const hotsMakerContract = getHotsMakerContract(hots)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, hotsMakerContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, hotsMakerContract])

  return { onApprove: handleApprove }
}

export default useApprove
