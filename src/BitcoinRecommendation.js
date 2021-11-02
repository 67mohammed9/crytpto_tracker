import React, { useEffect, useState } from 'react';


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
