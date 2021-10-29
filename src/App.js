import React, {useState} from 'react';
import Bitcoin from './Bitcoin';
import Ethereum from './Ethereum'
import BitcoinRecommendation from './BitcoinRecommendation';
import EthereumRecommendation from './EthereumRecommendation';
import { Card, CardGroup} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const bitcoinBinanceFeeds = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
const ethereumBinanceFeeds = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
const coinbaseFeeds = new WebSocket('wss://ws-feed.exchange.coinbase.com');

function App() {
  const [coinbaseBTCData, setCoinbaseBTCData] = useState(0)
  const [coinbaseETHData, setCoinbaseETHData] = useState(0)
  const [binanceBTCData, setBinanceBTCData] = useState(0)
  const [binanceETHData, setBinanceETHData] = useState(0)

  coinbaseFeeds.onopen = (subscribe_message) =>{
     subscribe_message = {
      "type": "subscribe",
      "product_ids": [
          "BTC-USD",
          "ETH-USD"
      ],
      "channels": ["ticker"]
  }
    coinbaseFeeds.send(JSON.stringify(subscribe_message))
  }

  coinbaseFeeds.onmessage = (message) => {
    let wsData = JSON.parse(message.data);
    if (wsData.product_id === 'BTC-USD') {
      setCoinbaseBTCData(wsData)
    }
    else if(wsData.product_id === 'ETH-USD'){
      setCoinbaseETHData(wsData)
    }
  }

  bitcoinBinanceFeeds.onmessage = (message) => {
    let wsData = JSON.parse(message.data);
    setBinanceBTCData(wsData)
}
  ethereumBinanceFeeds.onmessage = (message) => {
    let wsData = JSON.parse(message.data);
    setBinanceETHData(wsData)
}


  return (
    <div className="App">
      <Card.Title>Cryptocurrency Tracker</Card.Title>
      <CardGroup style={{
        width: '90rem',
        height: '40rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} >
        <Card style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Card.Body>
            <Card.Title>Bitcoin BTC USD</Card.Title>
            <Bitcoin data={binanceBTCData} data2={coinbaseBTCData} />
            <BitcoinRecommendation
              binanceBTCData={binanceBTCData}
              coinbaseBTCData={coinbaseBTCData} />
          </Card.Body>
        </Card>
        <Card style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Card.Body>
            <Card.Title>Ethereum ETH USD</Card.Title>
            <Ethereum data={binanceETHData} data2={coinbaseETHData} />
            <EthereumRecommendation
              binanceETHData={binanceETHData}
              coinbaseETHData={coinbaseETHData} />
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}


export default App;
