import React from 'react'
import Styles from './Blogs.module.css';
import Layout from './Layout/Layout';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {BlogApi} from '../../../../Common/BlogsTable';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1000, min: 650 },
    items: 2
  },
   mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1 
   }
};

function Blog() {
    return (
        <div className={Styles.blogs}>
            <a name="blogs"></a>
            <p className={Styles.para}>Read the</p>
            <h1 className={Styles.heading}>Blogs</h1>
           
            <Carousel responsive={responsive}>
                {BlogApi.map(ele=>(
                    <div className={Styles.item}>
                    <Layout imagetag={ele.image} title={`${ele.title.substring(0,20)}...`} dateAndTime={ele.date} para={ele.description.substring(0,200)} link={ele.link} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Blog
