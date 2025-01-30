import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import useHots from './useHots'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { getAllowance } from '../utils/erc20'
import { getHotsMakerContract } from '../hots/utils'

const useAllowance = (lpContract: Contract) => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string; ethereum: provider } = useWallet()
  const hots = useHots()
  const hotsMakerContract = getHotsMakerContract(hots)

  const fetchAllowance = useCallback(async () => {
    const allowance = await getAllowance(
      lpContract,
      hotsMakerContract,
      account,
    )
    setAllowance(new BigNumber(allowance))
  }, [account, hotsMakerContract, lpContract])

  useEffect(() => {
    if (account && hotsMakerContract && lpContract) {
      fetchAllowance()
    }
    let refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, hotsMakerContract, lpContract])

  return allowance
}

export default useAllowance
