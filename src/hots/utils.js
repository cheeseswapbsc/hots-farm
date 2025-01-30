import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getHotsMakerAddress = (hots) => {
  return hots && hots.hotsMakerAddress
}
export const getHotsAddress = (hots) => {
  return hots && hots.hotsAddress
}
export const getWbnbContract = (hots) => {
  return hots && hots.contracts && hots.contracts.wbnb
}

export const getHotsMakerContract = (hots) => {
  return hots && hots.contracts && hots.contracts.hotsMaker
}
export const getHotsContract = (hots) => {
  return hots && hots.contracts && hots.contracts.hots
}

export const getFarms = (hots) => {
  return hots
    ? hots.contracts.pools.map(
        ({
          pid,
          name,
          symbol,
          icon,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          lpAddress,
          lpContract,
          rewardValue,
          apyValue,
          isHot,
          isNew,
        }) => ({
          pid,
          id: symbol,
          name,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          earnToken: 'hots',
          earnTokenAddress: hots.contracts.hots.options.address,
          icon,
          rewardValue,
          apyValue,
          isHot,
          isNew,
        }),
      )
    : []
}

export const getPoolWeight = async (hotsMakerContract, lpTokenAddress) => {
  const { allocPoint } = await hotsMakerContract.methods.poolInfo(lpTokenAddress).call()
  const totalAllocPoint = await hotsMakerContract.methods
    .totalAllocPoint()
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (hotsMakerContract, pid, account) => {
  return hotsMakerContract.methods.pendingHots(pid, account).call()
}

export const getTotalLPWbnbValue = async (
  hotsMakerContract,
  wbnbContract,
  lpContract,
  tokenContract,
  pid,
) => {
  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that hotsMakerContract owns
  const balance = await lpContract.methods
    .balanceOf(hotsMakerContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total wbnb value for the lpContract = w1
  const lpContractWbnb = await wbnbContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpWbnbWorth = new BigNumber(lpContractWbnb)
  const totalLpWbnbValue = portionLp.times(lpWbnbWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const wbnbAmount = new BigNumber(lpContractWbnb)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))
  return {
    tokenAmount,
    wbnbAmount,
    totalWbnbValue: totalLpWbnbValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWbnb: wbnbAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(hotsMakerContract, pid),
  }
}

export const approve = async (lpContract, hotsMakerContract, account) => {
  return lpContract.methods
    .approve(hotsMakerContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const getHotsSupply = async (hots) => {
  return new BigNumber(await hots.contracts.hots.methods.totalSupply().call())
}

export const stake = async (hotsMakerContract, pid, amount, account) => {
  return hotsMakerContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const unstake = async (hotsMakerContract, pid, amount, account) => {
  return hotsMakerContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const harvest = async (hotsMakerContract, pid, account) => {
  return hotsMakerContract.methods
    .deposit(pid, '0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (hotsMakerContract, pid, account) => {
  try {
    const { amount } = await hotsMakerContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const redeem = async (hotsMakerContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return hotsMakerContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}
