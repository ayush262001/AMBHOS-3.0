import React, {useState} from 'react'
import Header from '../../../Common/header_two/Header';
import FilterIcon from '@material-ui/icons/FilterListOutlined';
import CloseIcon from '@material-ui/icons/Close';
import AcademyItem from './Components/Item';
import Item from './Components/Item';
import './Academy.css';
import Footer from '../../../Common/Footer/Footer';
function Academy() {

    const [filterCategorySelected, setFCategory] = useState("");

    const array = [{
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation : "SGD Stadium, GOA",
        verified: true,
        rating: "4"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation : "SGD Stadium, GOA",
        verified: true,
        rating: "4"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation : "SGD Stadium, GOA",
        verified: true,
        rating: "4"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation : "SGD Stadium, GOA",
        verified: true,
        rating: "4"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation : "SGD Stadium, GOA",
        verified: true,
        rating: "4"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation : "SGD Stadium, GOA",
        verified: true,
        rating: "4"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation : "SGD Stadium, GOA",
        verified: true,
        rating: "4"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation : "SGD Stadium, GOA",
        verified: true,
        rating: "4"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation : "SGD Stadium, GOA",
        verified: true,
        rating: "4"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation : "SGD Stadium, GOA",
        verified: true,
        rating: "4"
    }]


    const filterOptions = [
        {logo: "/gymnew.png", category: "CRICKET"},
        {logo: "/gymnew.png", category: "FOOTBALL"},
        {logo: "/gymnew.png", category: "BASKETBALL"},
        {logo: "/gymnew.png", category: "HOCKEY"},
        {logo: "/gymnew.png", category: "BADMINTON"},
        {logo: "/gymnew.png", category: "TABLE TENNIS"},
        {logo: "/gymnew.png", category: "ARCHERY"},
        {logo: "/gymnew.png", category: "ALPINE SKIING"},
        {logo: "/gymnew.png", category: "ACROBATIC GYMNASTICS"},
        {logo: "/gymnew.png", category: "ARTISTIC GYMNASTICS"},
        {logo: "/gymnew.png", category: "ATHLETIC"},
        {logo: "/gymnew.png", category: "BASEBALL SOFTBALL"},
        {logo: "/gymnew.png", category: "BEACH HANDBALL"},
        {logo: "/gymnew.png", category: "BEACH VOLLEYBALL"},
        {logo: "/gymnew.png", category: "BIATHLON"},
        {logo: "/gymnew.png", category: "BMX FREE STYLE"},
        {logo: "/gymnew.png", category: "BMX RACING"},
        {logo: "/gymnew.png", category: "BOBSLEIGH"},
        {logo: "/gymnew.png", category: "BOXING"},
        {logo: "/gymnew.png", category: "BREAKING"},
        {logo: "/gymnew.png", category: "CANOE/ KAYAK FLATWATER"},
        {logo: "/gymnew.png", category: "CANOE/ KAYAK SLALOM"},
        {logo: "/gymnew.png", category: "CROSS COUNTRY"},
        {logo: "/gymnew.png", category: "CURLING"},
        {logo: "/gymnew.png", category: "DIVING"},
        {logo: "/gymnew.png", category: "EQUESTRIAN"},
        {logo: "/gymnew.png", category: "FENCING"},
        {logo: "/gymnew.png", category: "FIGURE SKATING"},
        {logo: "/gymnew.png", category: "FUTSAL"},
        {logo: "/gymnew.png", category: "GOLF"},
        {logo: "/gymnew.png", category: "HANDBALL"},
        {logo: "/gymnew.png", category: "ICE HOCKEY"},
        {logo: "/gymnew.png", category: "JUDO"},
        {logo: "/gymnew.png", category: "KARATE"},
        {logo: "/gymnew.png", category: "LUGE"},
        {logo: "/gymnew.png", category: "MARATHON SWIMMING"},
        {logo: "/gymnew.png", category: "MODERN PENTATHLON"},
        {logo: "/gymnew.png", category: "MOUTNAIN BIKE"},
        {logo: "/gymnew.png", category: "NORDIC COMBINED"},
        {logo: "/gymnew.png", category: "RHYTHMIC GYMNASTIC"},
        {logo: "/gymnew.png", category: "ROAD CYCLING"},
        {logo: "/gymnew.png", category: "WRESTLING"},
        {logo: "/gymnew.png", category: "WATER POLO"},
        {logo: "/gymnew.png", category: "WEIGHT LIFTING"},
        {logo: "/gymnew.png", category: "VOLLEYBALL"},
        {logo: "/gymnew.png", category: "TRIATHLON"},
        {logo: "/gymnew.png", category: "TRAMPOLINE"},
        {logo: "/gymnew.png", category: "TRACK CYCLING"},
        {logo: "/gymnew.png", category: "TENNIS"},
        {logo: "/gymnew.png", category: "TAEKWONDO"},
        {logo: "/gymnew.png", category: "SURFING"},
        {logo: "/gymnew.png", category: "SPORTS CLIMBING"},
        {logo: "/gymnew.png", category: "SPEED SKATING"},
        {logo: "/gymnew.png", category: "SNOWBOARD"},
        {logo: "/gymnew.png", category: "SKI MOUNTAINEERING"},
        {logo: "/gymnew.png", category: "SKI JUMPING"},
        {logo: "/gymnew.png", category: "SKELETON"},
        {logo: "/gymnew.png", category: "SKATEBOARDING"},
        {logo: "/gymnew.png", category: "SHOOTING"},
        {logo: "/gymnew.png", category: "SAILING"},
        {logo: "/gymnew.png", category: "SHOT PUT THROW"},
        {logo: "/gymnew.png", category: "RUGBY"},
        {logo: "/gymnew.png", category: "SAILING"},
        {logo: "/gymnew.png", category: "ROWING"},
        {logo: "/gymnew.png", category: "ROLLER SPEED SKATING"}
    ]

    const closethisPopup = ()=>{
        setPopup(false);
    }

    const [isPopup, setPopup] = useState(false);

    const displayPopup = ()=>{
        setPopup(true);
    }

    const setCategoryFiltered = (category)=>{
        console.log(category.toString().toLowerCase());
        setFCategory(category.toString().toLowerCase());
    }

    return (
        <>
        <div className="academy">
            <Header />
            <div className="main">
                <div className="icons" onClick={displayPopup}><FilterIcon className="FilterIcon"/></div>

                {/* Academy Component will be fetched here */}
                <div className="items">
                       {array.map(element=>(
                           <AcademyItem logo={element.logo} academyName={element.academyName} academyLocation={element.academyLocation} verified={element.verified} rating={element.rating} />
                       ))}
                </div>
            </div>
            <Footer />
        </div>
        {isPopup ? (<div className="popup">
             <div className="Cicon" onClick={closethisPopup}>
                <CloseIcon />
            </div>
            {filterOptions.map(element => (
                <div className="itemS" onClick={()=>{setCategoryFiltered(element.category)}} ><h4>{element.category}</h4></div>
            ))}
            </div>): <></>}
        </>
    )
}

export default Academy
