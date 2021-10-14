import React from 'react'
import {Button} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import './Item.css';

function Item({logo, academyName, academyLocation, verified, rating}) {
    return (
        <div className="item">
            <img src={logo} className="image-logo" />
            <h2 className="name">{academyName}</h2>
            <p className="location">{academyLocation}</p>
            <h4 className="verified">{verified ? "verified" : ""}</h4>
            <div className="bottom">
                <h4 className="rating">{rating} reviews</h4>
            </div>
            <Button className="button_">VISIT NOW</Button>
        </div>
    )
}

export default Item
