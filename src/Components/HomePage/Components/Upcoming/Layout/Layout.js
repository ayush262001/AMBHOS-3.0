import React from 'react'
import Styles from './Layout.module.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function Layout({imagetag, title, description, Date, para, link}) {

    

    return (
        <div className={Styles.layout}>
            <img src={imagetag} className={Styles.imagesm} alt="" />
            <div className={Styles.right}>
                <div className={Styles.titleIcon}>
                    <h1 className={Styles.title}>{title}</h1>
                    <p>{Date}</p>
                </div>
                <div className={Styles.description}>
                    <p className={Styles.para}>{description}</p>
                    <p className={Styles.para}>{para.substring(0,300)}&nbsp;&nbsp;<a href={link} className={Styles.link}><span className={Styles.more}>Show More</span></a></p>
                </div>
            </div>
        </div>
    )
}

export default Layout
