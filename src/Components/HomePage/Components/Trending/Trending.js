import React from 'react'
import Styles from './Trending.module.css';
import Layout from './Layout/Layout';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 930 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 930, min: 620 },
    items: 2
  },
   mobile: {
    breakpoint: { max: 620, min: 0 },
    items: 1 
   }
};

function Trending() {
    return (
        <div className={Styles.trending}>
            <p className={Styles.para}>Visit Our</p>
            <h1 className={Styles.heading}>Trending Topics</h1>
            

            <Carousel responsive={responsive}>
                <div className={Styles.alignment}>
                <Layout imgtag={`/Trending.jpg`} title={`Pooja Chaurushi`} link={`https://www.youtube.com/embed/8w03xpav5ys`}
                  description={`Pooja Chaurushi | Golden Girl | National Champion | South Asian Champion | Triathlon | Real Hero |
                  Pooja Chaurushi | Golden Girl | National Champion | South Asian Champion | Triathlon | Real Hero..`}/>
                </div>

                <div className={Styles.alignment}>
                <Layout imgtag={`/Trending.jpg`} title={`Dr Sunita Godara`} link={`https://www.youtube.com/embed/TRKavaqQ_3Y`}
                  description={`Marathon Queen | Dr Sunita Godara | First women Asian Champion - 1992 | Real Hero | Ambhos
                  Marathon Queen | Dr Sunita Godara | First women Asian Champion - 1992 | Real Hero | Ambhos..`}/>
                </div>

                <div className={Styles.alignment}>
                <Layout imgtag={`/Trending.jpg`} title={`Pragnya Mohan`} link={`https://www.youtube.com/embed/2CQly2lWVlo`}
                  description={`Pragnya Mohan| First Indian who represented country at triathlon World Cup| Triathlete | Real Hero |..`}/>
                </div>
            </Carousel>
        </div>
    )
}

export default Trending
