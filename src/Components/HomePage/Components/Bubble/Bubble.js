import React from 'react'
import Styles from './Bubble.module.css';
import {Avatar} from '@material-ui/core';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
function Bubble() {
    return (
        <div className={Styles.Bubble}>
              <MenuIcon className={Styles.icon}/>
                     
        </div>
    )
}

export default Bubble
