import React, { useEffect, useState } from 'react';



function EthereumRecommendation(props) {
    // Set up states for reccomending where to buy and sell ETH
    const [buyETHRecommendation, setBuyETHRecommendation] = useState('--');
    const [sellETHRecommendation, setSellETHRecommendation] = useState('--');

    
    useEffect(()=>{
        // if binance ETH best ask is less than coinbase ETH besk ask recommend to buy from Binance
        if(props.binanceETHData.a < props.coinbaseETHData.best_ask ){
            setBuyETHRecommendation('Buy Ethereum from Binance Exchange')
        }
        // if binance ETH best ask is greater than coinbase ETH besk ask recommend to buy from Coinbase
        else if(props.binanceETHData.a > props.coinbaseETHData.best_ask ){
            setBuyETHRecommendation('Buy Ethereum from Coinbase Exchange')
        }
        // if both ETH best asks price are equal than recommend either exchanges
        else{
            setBuyETHRecommendation('Buy Ethereum from either Coinbase Exchange or Binance Exchange')
        }
    },[props, buyETHRecommendation])

    useEffect(()=>{
        // if binance ETH best bid is less than coinbase ETH besk bid recommend to sell at Coinbase
        if(props.binanceETHData.b < props.coinbaseETHData.best_bid ){
            setSellETHRecommendation('Sell Ethereum at Coinbase Exchange')
        }
        // if binance ETH best bid is greater than coinbase ETH besk bid recommend to sell at Binance
        else if(props.binanceETHData.a > props.coinbaseETHData.best_ask ){
            setSellETHRecommendation('Sell Ethereum at Binance Exchange')
        }
        // if both ETH best bid price are equal than recommend either exchanges
        else{
            setSellETHRecommendation('Sell Ethereum at either Coinbase Exchange or Binance Exchange')
        }
    },[props, sellETHRecommendation])

    // render the states inside card components
    return (
        <div>
            <section className="cards" style={{justifyContent: "center"}}>
                <article className="card" style={{width: "34rem", backgroundColor:"#33cc33"}}>
                    <h3> Recommendation:</h3>
                    <p>
                        {buyETHRecommendation}
                    </p>
                    <p>
                        {sellETHRecommendation}
                    </p>
                </article>
            </section>
        </div>
    )
}

export default EthereumRecommendation
