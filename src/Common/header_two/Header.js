
import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Styles from './Header.module.css';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';

function header() {

     const gotoDashboard = ()=>{
          window.location.href="/dashboard";
     }

     const gotoAllSubscription =()=>{
          window.location.href="/subscription";
     }

    return (
       <div className={Styles.Header_section}>
            <div className={Styles.Header_left}>
                  <img src="/Images/logo.png" alt="" />
                   {/*add a logo image here and remove that h1 of ambhos*/}
            </div>
            <div className={Styles.Header_right}>
            <div className={Styles.dropdown}>
                       <h5 className={Styles.Header_right_heading_dropdown_mobile}>MORE <ArrowDropDownIcon /></h5>
                       <div className={Styles.Header_dropdown_more}>
                            {/* dropdown for more will be created */}
                            <a className={Styles.anchortag} href="">Fitnes</a>
                            <a className={Styles.anchortag} href="">Sports</a>
                            <a className={Styles.anchortag} href="">CARE</a>
                            <a className={Styles.anchortag} href="">Event</a>
                            
                            <a className={Styles.anchortag} href="">Login</a>
                            <a className={Styles.anchortag} href="">Register</a>
                            <a className={Styles.anchortag} href="/dashboard">Switch to selling</a>
                       </div>
                 </div>

                 


                 <div className={Styles.dropdown}>
                       <p className={Styles.Header_right_heading_dropdown}>SPORTS <ArrowDropDownIcon /></p>
                       <div className={Styles.Header_dropdown_services}>
                            {/* dropdown for services will be created */}
                            <a className={Styles.anchortag} href="./gym">Cricket</a>
                            <a className={Styles.anchortag} href="./yogaandmeditation">Football</a>
                            <a className={Styles.anchortag} href="./dance">Basketball</a>
                            <a className={Styles.anchortag} href="./martialart">Athelete</a>
                            <a className={Styles.anchortag} href="./trekking">Boxing</a>
                       </div>
                 </div>

                 <div className={Styles.dropdown}>
                       <p className={Styles.Header_right_heading_dropdown}>FITNESS <ArrowDropDownIcon /></p>
                       <div className={Styles.Header_dropdown_services}>
                            {/* dropdown for services will be created */}
                            <a className={Styles.anchortag} href="./gym">GYM</a>
                            <a className={Styles.anchortag} href="./yogaandmeditation">YOGA</a>
                            <a className={Styles.anchortag} href="./dance">DANCE</a>
                            <a className={Styles.anchortag} href="./martialart">Martial Art</a>
                            <a className={Styles.anchortag} href="./trekking">TREKKING</a>
                       </div>
                 </div>

                 <div className={Styles.dropdown}>
                       <p className={Styles.Header_right_heading_dropdown}>CARE <ArrowDropDownIcon /></p>
                       <div className={Styles.Header_dropdown_services}>
                            {/* dropdown for services will be created */}
                            <a className={Styles.anchortag} href="./gym">Doctor Consult</a>
                            <a className={Styles.anchortag} href="./yogaandmeditation">Book Appointment</a>
                       </div>
                 </div>
              
                 <p className={Styles.Header_right_heading}><a className={Styles.anchortag} href="#event" className={Styles.anchortag}>EVENTS</a></p>
                       
                 <Button className={Styles.button_design} onClick={()=>gotoDashboard()}>Switch To Selling</Button>
                 <div className={Styles.icondiv} onClick={gotoAllSubscription}>
                 <SubscriptionIcon className={Styles.searchButton}/>
                 </div>
            </div>
       </div>
    )
}
export default header
