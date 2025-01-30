import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'

import van from '../../assets/img/hotdog-van.svg'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import Farm from '../Farm'

import FarmCards from './components/FarmCards'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={van} height="128" />}
                subtitle="Earn HotDog HOTS tokens by staking Cheeseswap LP Tokens (Cheese-LP)."
                title="Select Your Favorite HOTS Kitchen"
              />
              <Container>
              <StyledInfoLP>
              <div style={{ color: '#b1b8bf', fontSize: 14, marginLeft: 20, marginRight: 20}}>Hots Maker is Ready to serve. <b>HOTS</b> is ready. <br />
               We hope Our journey through Binance Smart Chain will be smooth. Don't miss to grab cheap HOTS from CheeseSwap.
               </div>
               </StyledInfoLP>
               </Container>
               <Spacer size="lg" />
              <FarmCards />
            </Route>
            <Route path={`${path}/:farmId`}>
              <Farm />
            </Route>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )}
      </Page>
    </Switch>
  )
}

const StyledInfoLP = styled.div`
  display: flex;
  padding: 15px 10px;
  background: #292d31;
  border-radius: 10px;
  text-align: center;
`

export default Farms
