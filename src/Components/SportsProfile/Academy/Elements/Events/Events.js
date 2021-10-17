import React, {useState} from 'react'
import './Events.css';
import {Button} from '@material-ui/core';
import Popup from './EventCreatePopup';
function Events() {
    const [isuser, setIsUser] = useState(false);
    return (
        <div className="events">
            {isuser ? <></>: <Popup  />}
            <h3 className="eventsheading">All Events of Academy</h3>
            <div className="eventsitem">
                <img src="/Blog.jpg" className="eventimg" />
                <h2 className="eventname">Event Name</h2>
                <p className="eventdescr">This is a 100 word short description of events.</p>
                <p className="eventdesc">Timing</p>
                <p className="eventdesc">Date</p>
                <Button className="button">Promote to Ambhos</Button>
            </div>

            <div className="eventsitem">
                <img src="/Blog.jpg" className="eventimg" />
                <h2 className="eventname">Event Name</h2>
                <p className="eventdescr">This is a 100 word short description of events.</p>
                <p className="eventdesc">Timing</p>
                <p className="eventdesc">Date</p>
                <Button className="button">Promote to Ambhos</Button>
            </div>

            <div className="eventsitem">
                <img src="/Blog.jpg" className="eventimg" />
                <h2 className="eventname">Event Name</h2>
                <p className="eventdescr">This is a 100 word short description of events.</p>
                <p className="eventdesc">Timing</p>
                <p className="eventdesc">Date</p>
                <Button className="button">Promote to Ambhos</Button>
            </div>

            <div className="eventsitem">
                <img src="/Blog.jpg" className="eventimg" />
                <h2 className="eventname">Event Name</h2>
                <p className="eventdescr">This is a 100 word short description of events.</p>
                <p className="eventdesc">Timing</p>
                <p className="eventdesc">Date</p>
                <Button className="button">Promote to Ambhos</Button>
            </div>

            <div className="eventsitem">
                <img src="/Blog.jpg" className="eventimg" />
                <h2 className="eventname">Event Name</h2>
                <p className="eventdescr">This is a 100 word short description of events.</p>
                <p className="eventdesc">Timing</p>
                <p className="eventdesc">Date</p>
                <Button className="button">Promote to Ambhos</Button>
            </div>
        </div>
    )
}

export default Events
