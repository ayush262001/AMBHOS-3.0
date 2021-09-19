import React from 'react'
import Styles from './DesignServices.module.css';

function DesignServices({Imagetag, title, OnClickLink}) {
    return (
        <div className={Styles.main}>
            <a href={OnClickLink} className={Styles.anchortag}>
            <div className={Styles.inl}>
            <img src={Imagetag} alt="" className={Styles.image}/>
            <h5 className={Styles.heading}>{title}</h5>
            </div>
            </a>
        </div>
    )
}

export default DesignServices
