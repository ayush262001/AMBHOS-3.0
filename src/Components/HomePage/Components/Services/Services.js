import React from 'react'
import Styles from './Services.module.css';
import DesignServices from './DesignServices/DesignServices';
import NotesSharpIcon from '@material-ui/icons/NotesSharp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
function Services() {
    return (
        <div className={Styles.main}>
            <div>
            <a name="services"></a>
            <p className={Styles.para}>OUR SERVICES</p>
            <div className={Styles.innerdiv}>
                 <h1 className={Styles.heading}>Services We Offer</h1>
            </div>
            </div>

            <div className={Styles.design}>
                <DesignServices Imagetag="/images/gymlogo.jpg" title={`GYM`} OnClickLink={``} />
                <DesignServices Imagetag="/images/yogalogo.jpg" title={`Yoga & Meditation`} OnClickLink={``} />
                <DesignServices Imagetag="/images/trekkinglogo.jpg" title={`Trekking`} OnClickLink={``} />
                <DesignServices Imagetag="/images/dancelogo.jpg" title={`Dance`} OnClickLink={``} />
                <DesignServices Imagetag="/images/commandologo.png" title={`Commando Tranning`} OnClickLink={``} />
                <DesignServices Imagetag="/images/swimminglogo.png" title={`Swimming`} OnClickLink={``} />
                <DesignServices Imagetag="/images/martialartslogo.jpg" title={`Martial Arts`} OnClickLink={``} />
                <DesignServices Imagetag="/images/olympicslogo.png" title={`Olympic Sports`} OnClickLink={`/sportsacademy`} />
                
            </div>
            <div className={Styles.arrow}>
                      <KeyboardArrowLeftIcon />
                      <KeyboardArrowRightIcon />
            </div>
        </div>
    )
}

export default Services
