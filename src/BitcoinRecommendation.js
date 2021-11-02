import React, { useEffect, useState } from 'react';


function BitcoinRecommendation(props) {
    // Set up states for reccomending where to buy and sell BTC
    const [buyBTCRecommendation, setBuyBTCRecommendation] = useState('--');
    const [sellBTCRecommendation, setSellBTCRecommendation] = useState('--');


    useEffect(()=>{
         // if binance BTC best ask is less than coinbase BTC besk ask recommend to buy from Binance
        if(props.binanceBTCData.a < props.coinbaseBTCData.best_ask ){
            setBuyBTCRecommendation('Buy Bitcoin from Binance Exchange')
        }
        // if binance BTC best ask is greater than coinbase BTC besk ask recommend to buy from Coinbase
        else if(props.binanceBTCData.a > props.coinbaseBTCData.best_ask ){
            setBuyBTCRecommendation('Buy Bitcoin from Coinbase Exchange')
        }
        // if both BTC best asks price are equal than recommend either exchanges
        else{
            setBuyBTCRecommendation('Buy Bitcoin from either Coinbase Exchange or Binance Exchange')
        }
    },[props, buyBTCRecommendation])

    useEffect(()=>{
        // if binance BTC best bid is less than coinbase BTC besk ask recommend to buy from Coinbase
        if(props.binanceBTCData.b < props.coinbaseBTCData.best_bid ){
            setSellBTCRecommendation('Sell Bitcoin at Coinbase Exchange')
        }
        // if binance BTC best bid is greater than coinbase BTC besk ask recommend to buy from Binance
        else if(props.binanceBTCData.a > props.coinbaseBTCData.best_ask ){
            setSellBTCRecommendation('Sell Bitcoin at Binance Exchange')
        }
        // if both BTC best bid price are equal than recommend either exchanges
        else{
            setSellBTCRecommendation('Sell Bitcoin at either Coinbase Exchange or Binance Exchange')
        }
    },[props, sellBTCRecommendation])

    //render the states inside card components
    return (
        <div>
            <section className="cards" style={{justifyContent: "center"}} >
                <article className="card" style={{width: "34rem", backgroundColor:"#33cc33"}}>
                    <h3> Recommendation:</h3>
                    <p>
                        {buyBTCRecommendation}
                    </p>
                    <p>
                        {sellBTCRecommendation}
                    </p>
                </article>
            </section>
        </div>
    )
}

export default BitcoinRecommendation
