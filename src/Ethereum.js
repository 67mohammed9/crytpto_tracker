import React, {useState, useEffect} from 'react'


function Ethereum({data, data2}) {

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

          <div className="centered">
              <section className="cards">
                  <article className="card">
                      <h3>Binance</h3>
                      <p>
                          Best Ask Price: ${binanceETHAPrice}
                      </p>
                      <p>
                          Best Bid Price: ${binanceETHBPrice}
                      </p>
                  </article>

                  <article className="card">
                      <h3>Coinbase</h3>
                      <p>
                          Best Ask Price: ${coinbaseETHAPrice}
                      </p>
                      <p>
                          Best Bid Price: ${coinbaseETHBPrice}
                      </p>
                  </article>
              </section>
          </div>

      )
  }
  
export default Ethereum
