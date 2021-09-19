import React, {useState} from 'react'
import Styles from './Event.module.css';
import OnGoing from './OnGoing';
import History from './History';
function Event() {

    const [ongoing, setOngoing] = useState(true);


    return (
        <div className={Styles.main}>
            <a name="event"></a>
            <p className={Styles.para}>Your Subscriptions</p>
            <h1 className={Styles.heading}>Find Your Subscriptions</h1>
            
            {ongoing ? (<div className={Styles.button}>
                <h4 id="ongoing" className={Styles.active} onClick={() => setOngoing(true)}>OnGoing</h4>
                <h4 id="history" className={Styles.unactive} onClick={() => setOngoing(false)}>History</h4>
            </div>) : (<div className={Styles.button}>
                <h4 id="ongoing" className={Styles.unactive} onClick={() => setOngoing(true)}>OnGoing</h4>
                <h4 id="history" className={Styles.active} onClick={() => setOngoing(false)}>History</h4>
            </div>)}

            {ongoing ? <OnGoing /> : <History />}
            
        </div>
    )
}

export default Event
