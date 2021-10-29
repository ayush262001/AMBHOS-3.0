import React, { useState } from 'react'
import Styles from './Dance.module.css';
import { Button } from '@material-ui/core';
import Card from './Card/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Popup from '../Popup/Popup';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1400, min: 1100 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 1100, min: 0 },
    items: 1
  }
};

function Dance() {

  const [Category, setCategory] = useState("");
  const [showPopup, setPopup] = useState(false);
  const[link, setLink] = useState("");
  const [title, setTitle] = useState("SPORTS");
  const [para, setPara] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet ultricies elit non congue. Fusce sit amet dapibus orci, et blan dolor. Nunc posuere diam dolor, a blandit od dictum sit amet. Etiam vitae euismod ante. Integer dict.");

  const changetoSports=()=>{
    setPopup(true);
    setCategory("sports");
  }

  const changetoFitness=()=>{
    setPopup(true);
    setCategory("fitness");
  }

  const changetoCare=()=>{
    setPopup(true);
    setCategory("care");
  }
  return (
    <div className={Styles.main}>

      {/*for left section with content*/}
      <div className={Styles.left}>
        <h2 className={Styles.title}>Ambhos<br/> The spirit to heal, The spirit to care</h2>
        <p className={Styles.para}>Ambhos strive to keep everyone fit and healthy through range of holistic offerings  that includes Health, Wellness, Fitness and Sports services, as well as covering  promoting and organizing the sports events involving India, and allowing people to connect with environment through our adventurous activities.
</p>
        <p className={Styles.instruction}>Click on respective box to visit page</p>
      </div>

      {/*for right section with carousel effect */}
      <div className={Styles.right}>
        <Carousel responsive={responsive}>

          <div className={Styles.container} onClick={changetoSports}>
            <Card  heading={`SPORTS`} imagetag={`/sports.jpg`} />
          </div>

          <div className={Styles.container} onClick={changetoFitness}>
            <Card  heading={`FITNESS`} imagetag={`/Fitness.jpg`} />
          </div>

          <div className={Styles.container} onClick={changetoCare}>
            <Card  heading={`CARE`} imagetag={`/ccc.jpg`} />
          </div> 

        </Carousel>
      </div>

      {showPopup ? <Popup category={Category}/>: <></>}
    </div>
  )
}

export default Dance
