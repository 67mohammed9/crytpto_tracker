import React, { useEffect, useState } from 'react'



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
        <div className="centered">
            <section className="cards">
                <article className="card">
                    <h3>Binance</h3>
                    <p>
                        Best Ask Price: ${binanceBTCAPrice}
                    </p>
                    <p>
                        Best Bid Price: ${binanceBTCBPrice}
                    </p>
                </article>

                <article className="card">
                    <h3>Coinbase</h3>
                    <p>
                        Best Ask Price: ${coinbaseBTCAPrice}
                    </p>
                    <p>
                        Best Bid Price: ${coinbaseBTCBPrice}
                    </p>
                </article>
            </section>
        </div>
    )
}



export default Bitcoin
