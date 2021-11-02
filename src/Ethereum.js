import React, {useState, useEffect} from 'react'


function Ethereum({data, data2}) {
    // set up states for ETH from Binance and Coinbase
    const [binanceETHAPrice, setBinanceETHAPrice] = useState(0)
    const [binanceETHBPrice, setBinanceETHBPrice] = useState(0)
    const [coinbaseETHAPrice, setCoinbaseETHAPrice] = useState(0)
    const [coinbaseETHBPrice, setCoinbaseETHBPrice] = useState(0)
  
    useEffect(()=>{
        setBinanceETHAPrice(parseFloat(data.a).toFixed(2))
        setBinanceETHBPrice(parseFloat(data.b).toFixed(2))
    },[data, binanceETHAPrice, binanceETHBPrice ])
  
    useEffect(() => {
        setCoinbaseETHAPrice(parseFloat(data2.best_ask).toFixed(2))
        setCoinbaseETHBPrice(parseFloat(data2.best_bid).toFixed(2))
    }, [data2, coinbaseETHAPrice, coinbaseETHBPrice]);

      return (
          <div>
              <section className="cards" style={{justifyContent: "center"}}>
                  <article className="card" style={{backgroundColor: "#ffbf00"}}>
                      <h3>Binance</h3>
                      <p>
                          Buy Price: ${binanceETHAPrice}
                      </p>
                      <p>
                          Sell Price: ${binanceETHBPrice}
                      </p>
                  </article>
                  <article className="card" style={{backgroundColor: "#00ffff"}}>
                      <h3>Coinbase</h3>
                      <p>
                          Buy Price: ${coinbaseETHAPrice}
                      </p>
                      <p>
                          Sell Price: ${coinbaseETHBPrice}
                      </p>
                  </article>
              </section>
          </div>

      )
  }
  
export default Ethereum
