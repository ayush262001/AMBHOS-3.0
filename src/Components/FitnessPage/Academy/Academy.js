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
        {logo: "/gymnew.png", category: "GYM"},
        {logo: "/gymnew.png", category: "TREKKING"},
        {logo: "/gymnew.png", category: "DANCE"},
        {logo: "/gymnew.png", category: "SWIMMING"},
        {logo: "/gymnew.png", category: "YOGA & MEDITATION"},
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
