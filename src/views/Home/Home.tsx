import React from 'react'
import styled from 'styled-components'
import van from '../../assets/img/hotdog-van.svg'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={van} height={128} />}
        title="Make HOTS From HOTS Maker (Renounced Contract)"
        subtitle="Stake Cheese LP tokens to GET more HOTS!"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="Make HOTS" to="/farms" variant="secondary" />
      </div>
      <Spacer />
      <Container>
      <StyledInfoLP>
        <div style={{ color: '#b1b8bf', fontSize: 14, marginLeft: 20, marginRight: 20}}> Hots Maker is Ready to serve. <b>Sausage</b> HOTS is ready. <br />
         We hope Our journey through Binance Smart Chain will be smooth. Don't miss to grab cheap HOTS from Cheeseswap Liquidity Pool (Cheese-LP).
         </div>
       </StyledInfoLP>
       </Container>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

const StyledInfoLP = styled.div`
  display: flex;
  padding: 15px 10px;
  background: #292d31;
  border-radius: 10px;
  text-align: center;
`

export default Home
