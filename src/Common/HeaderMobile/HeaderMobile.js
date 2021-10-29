import React from 'react'
import AddIcon from '@material-ui/icons/AddCircle';
import HomeIcon from '@material-ui/icons/HomeRounded';
import CategoryIcon from '@material-ui/icons/CategoryRounded';
import SubscriptionIcon from '@material-ui/icons/SubscriptionsRounded';
import Styles from './HeaderMobile.module.css';
function HeaderMobile() {
    return (
        <div className={Styles.header}>
            <a href="/" className={Styles.link}><HomeIcon /></a>
            <a href="/dashboard" className={Styles.link}><AddIcon /></a>
            <a href="/category" className={Styles.link}><CategoryIcon /></a>
            <a href="/subscription" className={Styles.link}><SubscriptionIcon /></a>
        </div>
    )
}

export default HeaderMobile
