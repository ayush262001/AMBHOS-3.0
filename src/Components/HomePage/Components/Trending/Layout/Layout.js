import React from 'react'
import Styles from './Layout.module.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Layout({title, description, imgtag, link}) {
    return (
        <div className={Styles.layout}>
            {/* <img src={imgtag} alt="" className={Styles.image} /> */}
            <iframe src={link} className={Styles.image}></iframe>
            <div className={Styles.details}>
                <h1 className={Styles.heading}>{title}<ArrowRightAltIcon /></h1>
                <p className={Styles.para}>{description.substring(0, 100)}</p>
            </div>
        </div>
    )
}

export default Layout
