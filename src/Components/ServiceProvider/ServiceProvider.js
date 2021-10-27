import React, { useState } from 'react'
import Header from '../../Common/header_two/Header';
import { Button } from '@material-ui/core';
import Footer from '../../Common/Footer/Footer';
import SportsAcademyForm from './Sports/SportsAcademy/Form';
import SportsTrainerForm from './Sports/SportsTrainer/Form';
import SportsMentorForm from './Sports/SportsMentor/Form';
import FitnessAcademyForm from './Fitness/FitnessAcademy/Form';
import "./ServiceProvider.css";
function ServiceProvider() {

    const [isSelected, setSelected] = useState(false);

    const array = [{
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation: "SGD Stadium, GOA",
        verified: true,
        rating: "4",
        category: "sports"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation: "SGD Stadium, GOA",
        verified: true,
        rating: "4",
        category: "sports"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation: "SGD Stadium, GOA",
        verified: true,
        rating: "4",
        category: "sports"
    },
    {
        logo: "/sports.jpg",
        academyName: "FC GOA CITY",
        academyLocation: "SGD Stadium, GOA",
        verified: false,
        rating: "4",
        category: "sports"
    }]

    const createNew = () => {
        if (isSelected) {
            setSelected(false);
        }
        else {
            setSelected(true);
        }
    }

    const [serviceCategory, setServiceCategory] = useState("");
    const [serviceCategoryTwo, setServiceCategoryTwo] = useState("");


    const [switchValue, setSwitch] = useState(0);

    const setCat = (category) => {
        setServiceCategory(category);
        setSwitch(switchValue+1);
    }

    const setCatTwo = (category) => {
        setServiceCategoryTwo(category);
        setSwitch(switchValue+1);
    }
    

    return (
        <div>
            <Header />
            <Button className="createButton" onClick={createNew}>Create new Service</Button>

            {isSelected ? (<div className="questionBox">

                {{
                    0 : (
                        <div className="q">
                            <h3 className="question">SELECT YOUR CATEGORY</h3>
                            <div className="items">
                                <div className="itemS" onClick={() => setCat("fitness")}><img src="/fitnessicon.png" className="image" /> <h4>FITNESS</h4></div>
                                <div className="itemS" onClick={() => setCat("sports")}><img src="/sportsicon.png" className="image" /> <h4>SPORTS</h4></div>
                                <div className="itemS" onClick={() => setCat("care")}><img src="/healthicon.png" className="image" /> <h4>CARE</h4></div>
                            </div>
                        </div>
                    ),

                    1 : (
                        {
                            "fitness" : (
                                <div className="q">
                                    <h3 className="question">SELECT YOUR CATEGORY</h3>
                                    <div className="items">
                                        <div className="itemS" onClick={() => setCatTwo("academy")}><img src="/academyicon.png" className="image" /> <h4>ACADEMY</h4></div>
                                        <div className="itemS" onClick={() => setCatTwo("trainer")}><img src="/trainericon.png" className="image" /> <h4>PERSONAL TRAINER</h4></div>
                                    </div>
                                </div>
                            ),
                            "sports" : (
                                <div className="q">
                                    <h3 className="question">SELECT YOUR CATEGORY</h3>
                                    <div className="items">
                                        <div className="itemS" onClick={() => setCatTwo("academy")}><img src="/academyicon.png" className="image" /> <h4>ACADEMY</h4></div>
                                        <div className="itemS" onClick={() => setCatTwo("trainer")}><img src="/trainericon.png" className="image" /> <h4>TRAINER</h4></div>
                                        <div className="itemS" onClick={() => setCatTwo("mentor")}><img src="/mentoricon.png" className="image" /> <h4>MENTOR</h4></div>
                                    </div>
                                </div>
                            ),
                            "care" : (
                                <div className="q">
                                    <h3 className="question">SELECT YOUR CATEGORY</h3>
                                    <div className="items">
                                        <div className="itemS" onClick={() => setCatTwo("doctor")}><img src="/healthicon.png" className="image" /> <h4>DOCTOR</h4></div>
                                        <div className="itemS" onClick={() => setCatTwo("hospital")}><img src="/healthicon.png" className="image" /> <h4>HOSPITAL</h4></div>
                                    </div>
                                </div>
                            )
                        }[serviceCategory]
                    ),

                    2 : (
                        
                        {
                           "sports" : (
                               {
                                   "academy" :(
                                       <SportsAcademyForm MainCategory={serviceCategory} SportsCategory={serviceCategoryTwo}/>
                                   ),
                                   "trainer" :(
                                       <SportsTrainerForm MainCategory={serviceCategory} SportsCategory={serviceCategoryTwo}/>
                                   ),
                                   "mentor" :(
                                       <SportsMentorForm MainCategory={serviceCategory} SportsCategory={serviceCategoryTwo}/>
                                   )
                               }[serviceCategoryTwo]
                           ),

                           "fitness" :(
                               {
                                   "academy" :(
                                        <FitnessAcademyForm MainCategory={serviceCategory} FitnessCategory={serviceCategoryTwo}/>
                                   )
                               }[serviceCategoryTwo]
                           )
                        }[serviceCategory]
                           
                    )

                }[switchValue]}

            </div>) : <></>}
            <hr />


            <div className="allservices">
                {array.map(element => (
                    <div className="services-single">
                        <img src={element.logo} alt="" className="imagesingle" />
                        <h2 className="academyname">{element.academyName}</h2>
                        <p className="category">{element.category}</p>
                        {element.verified ? <h3 className="verify">Verified</h3> : <h3 className="pending">Pending</h3>}
                        <Button className="buttonred">View page </Button>
                        <Button className="buttonred">Delete Service </Button>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default ServiceProvider
