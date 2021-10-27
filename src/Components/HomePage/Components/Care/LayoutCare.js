import React from 'react'
import Styles from './Care.module.css';
import ItemCare from './item-care/ItemCare';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1000, min: 824 },
      items: 1
    },
    tablet: {
        breakpoint: { max: 824, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
};

function LayoutCare() {


    return (
        <div className="main">
            <a name="care"></a>
            <Carousel responsive={responsive}>
                <ItemCare imglink="/care.jpg" title={`Book for Vaccination`} linkTag={`click here to book you slot`} link={`https://selfregistration.cowin.gov.in/`}/>
                <ItemCare imglink="/onboarddoctor.jpg" title={`Join our team as a doctor`} linkTag={`click here to Join`} link={``}/>
                <ItemCare imglink="/onboardsports.jpg" title={`Join as a sports academy`} linkTag={`click here to Join`} link={`https://bit.ly/fitness_ambhos`}/>
                <ItemCare imglink="/onboarddfitness.jpg" title={`Join as fitness academy`} linkTag={`click here to Join`} link={`https://bit.ly/fitness_ambhos`}/>  
                <ItemCare imglink="/onboardsports.jpg" title={`Join as a sports personal trainer`} linkTag={`click here to Join`} link={`https://bit.ly/Trainer_ambhos`}/>
                <ItemCare imglink="/onboarddfitness.jpg" title={`Join as fitness personal trainer`} linkTag={`click here to Join`} link={`https://bit.ly/Trainer_ambhos`}/> 
            </Carousel>
                
                
        </div>
    )
}

export default LayoutCare