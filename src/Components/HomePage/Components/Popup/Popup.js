import React, {useEffect} from 'react'
import './Popup.css';
import CloseIcon from '@material-ui/icons/Close';
import { LaptopWindowsRounded } from '@material-ui/icons';
function Popup({category}) {

    const closethisPopup =()=>{
             window.location.reload();
    }

    const gotoFitnessAcademy=()=>{
        window.location.href="/fitnessacademy";
    }

    const gotoFitnessTrainer =()=>{
        window.location.href="/fitnesstrainer";
    }
    const gotoConsultDoctor = ()=>{
        window.location.href="/consult";
    }

    const gotoAppointmentBooking=()=>{
        window.location.href="/appointment";
    }

    const gotoSportsAcademy =()=>{
        window.location.href="/sportsacademy";
    }
    const gotoCoaches =()=>{
        window.location.href="/sportscoach";
    }

    const gotoMentorshipProgram =()=>{
        window.location.href="/mentorshipprogram";
    }


    return (
        <div className="popup" id="popup">
            <div className="Cicon" onClick={closethisPopup}>
                <CloseIcon />
            </div>
            {
                {
                    "fitness" :(
                        <>
                        <div className="itemS" onClick={gotoFitnessAcademy}><img src="/academyicon.png" className="image"/> <h4>ACADEMY</h4></div>
                        <div className="itemS" onClick={gotoFitnessTrainer}><img src="/trainericon.png" className="image" /> <h4>PERSONAL TRAINER</h4></div>
                        </>
                     ),

                     "care" :(
                        <>
                        <div className="itemS" onclick={gotoConsultDoctor}><img src="/healthicon.png" className="image" /> <h4>CONSULT DOCTORS</h4></div>
                        <div className="itemS" onclick={gotoAppointmentBooking}><img src="/healthicon.png" className="image" /> <h4>BOOK APPOINTMENT WITH HOSPITAL</h4></div>
                        </>
                     ),

                     "sports" :(
                        <>
                        <div className="itemS" onClick={gotoSportsAcademy}><img src="/academyicon.png" className="image" /> <h4>ACADEMY</h4></div>
                        <div className="itemS" onClick={gotoCoaches}><img src="/trainericon.png" className="image" /> <h4>PERSONAL TRAINER</h4></div>
                        <div className="itemS" onClick={gotoMentorshipProgram}><img src="/mentoricon.png" className="image" /> <h4>MENTORSHIP PROGRAM</h4></div>
                        </>
                     )
                }[category]
            }
        </div>
    )
}

export default Popup
