import React, {useState} from 'react';
import Bitcoin from './Bitcoin';
import Ethereum from './Ethereum'
import BitcoinRecommendation from './BitcoinRecommendation';
import EthereumRecommendation from './EthereumRecommendation';
import './App.css';





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
      <h1>Cryptocurrency Tracker</h1>
      <section className="cards" style={{ justifyContent: "space-around"}}>
        <article className="card" style={{ width: "40em", height: "25rem", backgroundColor:"#ffebcc"}}>
          <h2 className="card-title">Bitcoin BTC USD</h2>
          <Bitcoin data={binanceBTCData} data2={coinbaseBTCData} />
          <BitcoinRecommendation
            binanceBTCData={binanceBTCData}
            coinbaseBTCData={coinbaseBTCData} />
        </article>
        <article className="card" style={{ width: "40em", height: "25rem", backgroundColor:"#ffebcc"}}>
          <h2 className="card-title">Ethereum ETH USD</h2>
          <Ethereum data={binanceETHData} data2={coinbaseETHData} />
          <EthereumRecommendation
            binanceETHData={binanceETHData}
            coinbaseETHData={coinbaseETHData} />
        </article>
      </section>
    </div>
  );
}


export default App;
