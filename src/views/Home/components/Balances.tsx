import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Label from '../../../components/Label'
import Spacer from '../../../components/Spacer'
import Value from '../../../components/Value'
import HotsIcon from '../../../components/HotsIcon'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useHots from '../../../hooks/useHots'
import { getHotsAddress, getHotsSupply } from '../../../hots/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'
import Hots from '../../../assets/img/hots.svg'
import Supply from '../../../assets/img/hots-supply.svg'

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()

  if (allStakedValue && allStakedValue.length) {
    const sumWbnb = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWbnbValue.toNumber() || 0),
      0,
    )
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 4}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}

const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const hots = useHots()
  const hotsBalance = useTokenBalance(getHotsAddress(hots))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getHotsSupply(hots)
      setTotalSupply(supply)
    }
    if (hots) {
      fetchTotalSupply()
    }
  }, [hots, setTotalSupply])

  return (
    <StyledWrapper>
      <Card>
        <CardContent>
          <StyledBalances>
            <StyledBalance>
              <HotsIcon />
              <Spacer />
              <div style={{ flex: 1 }}>
                <Label text="Your HOTS Balance" />
                <Value
                  value={!!account ? getBalanceNumber(hotsBalance) : 'Locked'}
                />
              </div>
            </StyledBalance>
          </StyledBalances>
        </CardContent>
        <Footnote>
          Pending rewards
          <FootnoteValue>
            <img src={Hots} height="14" /> <PendingRewards /> HOTS
          </FootnoteValue>
        </Footnote>
      </Card>
      <Spacer />

      <Card>
        <CardContent>
        <StyledBalances>
          <StyledBalance>
        <img src={Supply} height="64" alt="HOTS Supply"/>
        <Spacer />
          <div style={{ flex: 1 }}>
            <Label text="Total HOTS Supply" />
            <Value
              value={totalSupply ? getBalanceNumber(totalSupply) : 'Locked'}
            />
          </div>
          </StyledBalance>
        </StyledBalances>
        </CardContent>
        <Footnote>
          New rewards
          <FootnoteValue> <img src={Hots} height="14" /> 0.2 - 2.5 HOTS</FootnoteValue>
        </Footnote>
      </Card>
    </StyledWrapper>
  )
}

const Footnote = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  color: ${(props) => props.theme.color.grey[400]};
  border-top: solid 1px ${(props) => props.theme.color.grey[300]};
`
const FootnoteValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default Balances
