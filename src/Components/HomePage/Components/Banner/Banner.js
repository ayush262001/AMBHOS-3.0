import React from 'react'
import Styles from './Banner.module.css';

function Banner() {


    return (
        <div className={Styles.banner} id="banner">
            <img src="/ambhosmainposters1.png" alt="null" className={Styles.bannerImage} />
        </div>
    )
}

export default Banner
