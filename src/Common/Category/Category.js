import React from 'react'
import Styles from './Category.module.css';
import NavBarMobile from '../HeaderMobile/HeaderMobile';
function Category() {
    return (
        <>
        <NavBarMobile />
        <div className={Styles.category}>
             <div className={Styles.major}>
             <a href="/fitnessacademy" className={Styles.link}><div className={Styles.item}>
                 <img src="/fitnessicon.png" className={Styles.icon}></img>
                 <h4 className={Styles.title}>Fitness Academy</h4>
             </div></a>

             <a href="/fitnesstrainer" className={Styles.link}><div className={Styles.item}>
                 <img src="/fitnessicon.png" className={Styles.icon}></img>
                 <h4 className={Styles.title}>Fitness Trainer</h4>
             </div></a>

             <a href="/sportsacademy" className={Styles.link}><div className={Styles.item}>
                 <img src="/sportsicon.png" className={Styles.icon}></img>
                 <h4 className={Styles.title}>Sports Trainer</h4>
             </div></a>
             <a href="/sportstrainer" className={Styles.link}><div className={Styles.item}>
                 <img src="/sportsicon.png" className={Styles.icon}></img>
                 <h4 className={Styles.title}>Sports Trainer</h4>
             </div></a>
             <a href="/commingsoon" className={Styles.link}><div className={Styles.item}>
                 <img src="/healthicon.png" className={Styles.icon}></img>
                 <h4 className={Styles.title}>Care</h4>
             </div></a>
             </div>
        </div>
        </>
    )
}

export default Category
