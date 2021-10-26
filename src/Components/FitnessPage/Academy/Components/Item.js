import React from 'react'
import {Button} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import './Item.css';

function Item({logo, academyName, academyLocation, verified, rating}) {

    function Ratingstar() {
        return (
            <div className="stars">
                {{
                    1: (<><StarIcon style={{ color: "gold" }} /><StarIcon style={{ color: "grey" }} />
                        <StarIcon style={{ color: "grey" }} />
                        <StarIcon style={{ color: "grey" }} />
                        <StarIcon style={{ color: "grey" }} /></>),

                    2: (<><StarIcon style={{ color: "gold" }} /><StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "grey" }} />
                        <StarIcon style={{ color: "grey" }} />
                        <StarIcon style={{ color: "grey" }} /></>),

                    3: (<><StarIcon style={{ color: "gold" }} /><StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "grey" }} />
                        <StarIcon style={{ color: "grey" }} /></>),

                    4: (<><StarIcon style={{ color: "gold" }} /><StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "grey" }} /></>),

                    5: (<><StarIcon style={{ color: "gold" }} /><StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} />
                        <StarIcon style={{ color: "gold" }} /></>)
                }[rating]}
            </div>
        )
    }

    return (
        <div className="item">
            <img src={logo} className="image-logo" />
            <h2 className="name">{academyName}</h2>
            <p className="location">{academyLocation}</p>
            <h4 className="verified">{verified ? "verified" : ""}</h4>
            <div className="bottom">
                <h4 className="rating"><Ratingstar/></h4>
            </div>
            <Button className="button_">VISIT NOW</Button>
        </div>
    )
}

export default Item
