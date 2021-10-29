import React, { useEffect, useState } from 'react'
import { Card, CardGroup} from 'react-bootstrap';


function Bitcoin({ data, data2 }) {

    const [binanceBTCAPrice, setBinanceBTCAPrice] = useState(0);
    const [binanceBTCBPrice, setBinanceBTCBPrice] = useState(0);
    const [coinbaseBTCAPrice, setCoinbaseBTCAPrice] = useState(0);
    const [coinbaseBTCBPrice, setCoinbaseBTCBPrice] = useState(0);

    useEffect(() => {
        setBinanceBTCAPrice(parseFloat(data.a).toFixed(2))
        setBinanceBTCBPrice(parseFloat(data.b).toFixed(2))
    }, [data, binanceBTCAPrice, binanceBTCBPrice]);

    useEffect(() => {
        setCoinbaseBTCAPrice(parseFloat(data2.best_ask).toFixed(2))
        setCoinbaseBTCBPrice(parseFloat(data2.best_bid).toFixed(2))
    }, [data2, coinbaseBTCAPrice, coinbaseBTCBPrice]);


    return (
        <CardGroup style={{ width: '40rem' }}>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Binance</Card.Title>
                    <Card.Text>
                        Best Ask Price: ${binanceBTCAPrice}
                    </Card.Text>
                    <Card.Text>
                        Best Bid Price: ${binanceBTCBPrice}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Coinbase</Card.Title>
                    <Card.Text>
                        Best Ask Price: ${coinbaseBTCAPrice}
                    </Card.Text>
                    <Card.Text>
                        Best Bid Price: ${coinbaseBTCBPrice}
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>

    )
}



export default Bitcoin
