
import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Styles from './Header.module.css';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function header() {
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
                            <a className={Styles.anchortag} href="#services">Fitnes</a>
                            <a className={Styles.anchortag} href="#event">Sports</a>
                            <a className={Styles.anchortag} href="#care">CARE</a>
                            <a className={Styles.anchortag} href="#consult">Event</a>
                            <a className={Styles.anchortag} href="#consult">Switch to selling</a>
                       </div>
                 </div>

                 


                 <div className={Styles.dropdown}>
                       <p className={Styles.Header_right_heading_dropdown}>SPORTS <ArrowDropDownIcon /></p>
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
                            <a className={Styles.anchortag} href="./gym">GYM</a>
                            <a className={Styles.anchortag} href="./yogaandmeditation">YOGA</a>
                            <a className={Styles.anchortag} href="./dance">DANCE</a>
                            <a className={Styles.anchortag} href="./martialart">Martial Art</a>
                            <a className={Styles.anchortag} href="./trekking">TREKKING</a>
                       </div>
                 </div>
              
                 <p className={Styles.Header_right_heading}><a className={Styles.anchortag} href="#event" className={Styles.anchortag}>EVENTS</a></p>
                    
                 <Button>LOGIN</Button>   
                 <Button className={Styles.button_design}>SIGNUP</Button>
                 <AddShoppingCartIcon className={Styles.searchButton}/>
            </div>
       </div>
    )
}
export default header
