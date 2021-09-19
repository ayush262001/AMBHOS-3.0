import React, {useState} from 'react'
import Styles from './Card.module.css';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
function Card({heading, imagetag}) {

    const [bookmark, SetBookmark] = useState(false);
    
    return (
        <div className={Styles.card}>
            <img src={imagetag} alt="" className={Styles.imagedesing} />
            <div className={Styles.up}>
            <h2>{heading}</h2>
            </div>
        </div>
    )
}

export default Card
