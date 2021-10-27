import React from 'react'
import Styles from './Upcoming.module.css';
import Layout from './Layout/Layout';
import {UpcomingApi} from '../../../../Common/UpcomingApi';

function Upcoming() {
    return (
        <div className={Styles.upcoming}>
            <p className={Styles.para}>Check for</p>
            <h1 className={Styles.heading}>UpComing</h1>

            {UpcomingApi.map(ele=>(
                <Layout
                imagetag={ele.image}
                title={ele.event}
                para={ele.content}
                description={ele.title}
                link={ele.link}
                />
            ))}


        </div>
    )
}

export default Upcoming
