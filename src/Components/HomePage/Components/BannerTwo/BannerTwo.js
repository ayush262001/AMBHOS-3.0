import React from 'react'
import Styles from './BannerTwo.module.css';

export default function BannerTwo() {
    return (
        <div className={Styles.banner}>
            <img src="/Offer.png" alt="null" className={Styles.bannerImage} />
        </div>
    )
}
