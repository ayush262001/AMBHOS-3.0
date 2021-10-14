import React, {useEffect, useState} from 'react'
import "./Profile.css";
import Header from '../../../Common/header_two/Header';
import Footer from '../../../Common/Footer/Footer';
import VanillaTilt from 'vanilla-tilt';
import {Avatar} from '@material-ui/core';
import {Details, EmojiEvents, LocalOffer, Subscriptions} from '@material-ui/icons';
import EventElement from './Elements/Events/Events';
import DetailsElement from './Elements/Details/Details';
import PriceElement from './Elements/Prices/Prices';
function AcademyProfile() {

    VanillaTilt.init(document.querySelector("profile-name"), {
		max: 50,
		speed: 400,
        glare: true,
        "max-glare": 1
	});

    VanillaTilt.init(document.querySelectorAll(".profile-name"));

   
    useEffect(()=>{

        VanillaTilt.init(document.querySelector("profile-name"), {
            max: 50,
            speed: 400,
            glare: true,
            "max-glare": 1
        });

        let element = document.getElementById("details");

        element.style.borderBottom="4px solid skyblue";

    }, []);

    const[displayMenu, setDisplayMenu] = useState("details");
    const[editDetails, setEditDetails] = useState(false);
    const[editEvents, setEditEvents] = useState(false);
    const[editPrices, setEditPrices] = useState(false);


    const changeActive = (num)=>{
        if(num ===1){
            let element = document.getElementById("details");
            element.style.borderBottom="4px solid skyblue";

            let elementTwo = document.getElementById("events");
            elementTwo.style.borderBottom="none";

            let elementThree = document.getElementById("prices");
            elementThree.style.borderBottom="none";

            setDisplayMenu("details");
        }

        else if(num===2){
            let element = document.getElementById("details");
            element.style.borderBottom="none";

            let elementTwo = document.getElementById("events");
            elementTwo.style.borderBottom="4px solid skyblue";

            let elementThree = document.getElementById("prices");
            elementThree.style.borderBottom="none";

            setDisplayMenu("events");
        }

        else if(num===3){
            let element = document.getElementById("details");
            element.style.borderBottom="none";

            let elementTwo = document.getElementById("events");
            elementTwo.style.borderBottom="none";

            let elementThree = document.getElementById("prices");
            elementThree.style.borderBottom="4px solid skyblue";

            setDisplayMenu("prices");
        }
    }

    
	
	//It also supports NodeList
    return (
        <>
        <Header />
        <div className="profile">
            <img src="/backs.jpg" className="profile-img-top" />
            <div className="profile-name">
                <Avatar src="/sports.jpg" className="avatar" />
                <div className="profile-in">
                    <h2>FC GOA CITY</h2>
                    <p>location of the academy</p>
                </div>
            </div>
            <div className="menu">
                <div className="profile-menu" id="details" onClick={()=> changeActive(1)}><Details className="menuIcon"/><h3>DETAILS</h3></div>
                <div className="profile-menu" id="events" onClick={()=> changeActive(2)}><EmojiEvents className="menuIcon" /><h3>EVENTS</h3></div>
                <div className="profile-menu" id="prices" onClick={()=> changeActive(3)}><LocalOffer className="menuIcon" /><h3>PRICES</h3></div>
            </div>

            <div className="content">
                {{
                     
                     "details" :(<DetailsElement />),
                     "events" :(<EventElement />),
                     "prices" :(<PriceElement />)

                }[displayMenu]}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default AcademyProfile
