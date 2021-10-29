import React, {useState, useEffect} from 'react'
import { Card, CardGroup} from 'react-bootstrap';

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
          <CardGroup style={{ width: '40rem' }}>
              <Card style={{ width: '20rem' }}>
                  <Card.Body>
                      <Card.Title>Binance</Card.Title>
                      <Card.Text>
                          Best Ask Price: ${binanceETHAPrice}
                      </Card.Text>
                      <Card.Text>
                          Best Bid Price: ${binanceETHBPrice}
                      </Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width: '20rem' }}>
                  <Card.Body>
                      <Card.Title>Coinbase</Card.Title>
                      <Card.Text>
                          Best Ask Price: ${coinbaseETHAPrice}
                      </Card.Text>
                      <Card.Text>
                          Best Bid Price: ${coinbaseETHBPrice}
                      </Card.Text>
                  </Card.Body>
              </Card>
          </CardGroup>
      )
  }
  
export default Ethereum
