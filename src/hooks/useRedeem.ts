import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import { redeem } from '../hots/utils'

const useRedeem = (hotsMakerContract: Contract) => {
  const { account } = useWallet()

  const handleRedeem = useCallback(async () => {
    const txHash = await redeem(hotsMakerContract, account)
    console.log(txHash)
    return txHash
  }, [account, hotsMakerContract])

  return { onRedeem: handleRedeem }
}

export default useRedeem
