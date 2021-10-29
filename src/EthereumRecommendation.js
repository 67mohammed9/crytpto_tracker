import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';


function EthereumRecommendation(props) {
    const [buyETHRecommendation, setBuyETHRecommendation] = useState('--');
    const [sellETHRecommendation, setSellETHRecommendation] = useState('--');


    useEffect(()=>{
        if(props.binanceETHData.a < props.coinbaseETHData.best_ask ){
            setBuyETHRecommendation('Buy Ethereum from Binance Exchange')
        }
        else if(props.binanceETHData.a > props.coinbaseETHData.best_ask ){
            setBuyETHRecommendation('Buy Ethereum from Coinbase Exchange')
        }
        else{
            setBuyETHRecommendation('Buy Ethereum from either Coinbase Exchange or Binance Exchange')
        }
    },[props, buyETHRecommendation])

    useEffect(()=>{
        if(props.binanceETHData.b < props.coinbaseETHData.best_bid ){
            setSellETHRecommendation('Sell Ethereum at Coinbase Exchange')
        }
        else if(props.binanceETHData.a > props.coinbaseETHData.best_ask ){
            setSellETHRecommendation('Sell Ethereum at Binance Exchange')
        }
        else{
            setSellETHRecommendation('Sell Ethereum at either Coinbase Exchange or Binance Exchange')
        }
    },[props, sellETHRecommendation])

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
