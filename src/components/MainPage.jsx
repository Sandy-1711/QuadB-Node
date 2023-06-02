import React, { useEffect, useState } from 'react'

const MainPage = (props) => {
    var [data, setData] = useState([]);


    useEffect(function () {
        async function fetchInfo() {
            try {
                const response = await fetch('https://quadb-api.sandeepsingh126.repl.co/')
                const json = await response.json();
                // console.log(json);
                setData(json);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchInfo();

    }, [])
    function createRow(element, index) {
        return (<tr key={index}>
            <td>{index + 1}</td>
            <td>{element.name}</td>
            <td>₹ {element.last}</td>
            <td>₹ {element.buy} / {element.sell}</td>
            <td>{((element.buy - element.sell) / element.buy * 100).toFixed(2)}</td>
            <td>₹ {element.volume}</td>
        </tr>)
    }
    return (
        <div className='mainPage'>
            <div className='header'>
                <div><h1>HODLINFO</h1></div>
                <div>
                    <button>INR 🔽</button>
                    <button>BTC 🔽</button>
                    <button>BUY BTC</button>
                </div>
                <div>
                    <button className='connect'>Connect Telegram</button>

                </div>
            </div>
            <div className='middleSection'>
                <div><h2>0.76%</h2><span>5 Mins</span></div>
                <div><h2>1.56%</h2><span>1 Hour</span></div>
                <div><span>Best Price to Trade</span><h1>₹ 24,56,358</h1><span>Average BTC/INR net price including commission</span></div>
                <div><h2>9.28%</h2><span>1 Day</span></div>
                <div><h2>6.56%</h2><span>7 Days</span></div>
            </div>
            <table>
                <thead>

                    <tr>
                        <th>#</th>
                        <th>Platform</th>
                        <th>Last Traded Price</th>
                        <th>Buy / Sell Price</th>
                        <th>Difference</th>
                        <th>Savings</th>
                    </tr>
                </thead>
                <thead>

                    {data.map(createRow)}

                </thead>
            </table>
        </div>
    )
}

export default MainPage