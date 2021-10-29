import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import { Card } from 'react-bootstrap';

function BitcoinRecommendation(props) {
    const [buyBTCRecommendation, setBuyBTCRecommendation] = useState('--');
    const [sellBTCRecommendation, setSellBTCRecommendation] = useState('--');


    useEffect(()=>{
        if(props.binanceBTCData.a < props.coinbaseBTCData.best_ask ){
            setBuyBTCRecommendation('Buy Bitcoin from Binance Exchange')
        }
        else if(props.binanceBTCData.a > props.coinbaseBTCData.best_ask ){
            setBuyBTCRecommendation('Buy Bitcoin from Coinbase Exchange')
        }
        else{
            setBuyBTCRecommendation('Buy Bitcoin from either Coinbase Exchange or Binance Exchange')
        }
    },[props, buyBTCRecommendation])

    useEffect(()=>{
        if(props.binanceBTCData.b < props.coinbaseBTCData.best_bid ){
            setSellBTCRecommendation('Sell Bitcoin at Coinbase Exchange')
        }
        else if(props.binanceBTCData.a > props.coinbaseBTCData.best_ask ){
            setSellBTCRecommendation('Sell Bitcoin at Binance Exchange')
        }
        else{
            setSellBTCRecommendation('Sell Bitcoin at either Coinbase Exchange or Binance Exchange')
        }
    },[props, sellBTCRecommendation])

    return (
        <Card style={{ width: '40rem' }}>
            <Card.Body>
                <Card.Title> Recommendation:</Card.Title>
                <Card.Text>
                    {buyBTCRecommendation}
                </Card.Text>
                <Card.Text>
                    {sellBTCRecommendation}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BitcoinRecommendation
