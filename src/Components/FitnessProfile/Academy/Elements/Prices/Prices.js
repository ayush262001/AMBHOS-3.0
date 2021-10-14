import React, {useState} from 'react'
import {Button} from '@material-ui/core';
import './Prices.css';

function Prices() {
    const [isuser, setUser] = useState(true);
    return (
        <div className="prices">
            <div className="price-item">
                <h1 className="price-amount">500 Rs.</h1>
                <p className="price-para">/per month</p>
                {isuser ? <Button className="button buttonold">Book Now</Button>:
                <Button className="button buttonold">Edit Amount</Button>}
            </div>

            <div className="price-item">
                <h1 className="price-amount">500 Rs.</h1>
                <p className="price-para">/per 6 month</p>
                {isuser ? <Button className="button buttonold">Book Now</Button>:
                <Button className="button buttonold">Edit Amount</Button>}
            </div>

            <div className="price-item">
                <h1 className="price-amount">500 Rs.</h1>
                <p className="price-para">/per year</p>
                {isuser ? <Button className="button buttonold">Book Now</Button>:
                <Button className="button buttonold">Edit Amount</Button>}
            </div>
        </div>
    )
}

export default Prices
