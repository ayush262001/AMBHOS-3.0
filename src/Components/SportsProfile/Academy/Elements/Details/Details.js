import React, {useState} from 'react';
import './Details.css';
import {Avatar, Button} from '@material-ui/core';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Add} from '@material-ui/icons';
import StarIcon from '@material-ui/icons/Star';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Details() {

    const[rating, setRating] = useState(0);

    function Ratingstar() {
        return (
            <div className="stars">
                {{

                    0: (<><StarIcon onClick={()=>setRating(1)} style={{ color: "grey" }} />
                    <StarIcon onClick={()=>setRating(2)} style={{ color: "grey" }} />
                   <StarIcon onClick={()=>setRating(3)} style={{ color: "grey" }} />
                   <StarIcon onClick={()=>setRating(4)} style={{ color: "grey" }} />
                   <StarIcon onClick={()=>setRating(5)} style={{ color: "grey" }} />
                        </>), 

                    1: (<><StarIcon onClick={()=>setRating(1)} style={{ color: "gold" }} />
                         <StarIcon onClick={()=>setRating(2)} style={{ color: "grey" }} />
                        <StarIcon onClick={()=>setRating(3)} style={{ color: "grey" }} />
                        <StarIcon onClick={()=>setRating(4)} style={{ color: "grey" }} />
                        <StarIcon onClick={()=>setRating(5)} style={{ color: "grey" }} /></>),

                    2: (<><StarIcon onClick={()=>setRating(1)} style={{ color: "gold" }} /><StarIcon onClick={()=>setRating(2)} style={{ color: "gold" }} />
                        <StarIcon onClick={()=>setRating(3)} style={{ color: "grey" }} />
                        <StarIcon onClick={()=>setRating(4)} style={{ color: "grey" }} />
                        <StarIcon onClick={()=>setRating(5)} style={{ color: "grey" }} /></>),

                    3: (<><StarIcon onClick={()=>setRating(1)} style={{ color: "gold" }} /><StarIcon onClick={()=>setRating(2)} style={{ color: "gold" }} />
                        <StarIcon onClick={()=>setRating(3)} style={{ color: "gold" }} />
                        <StarIcon onClick={()=>setRating(4)} style={{ color: "grey" }} />
                        <StarIcon onClick={()=>setRating(5)} style={{ color: "grey" }} /></>),

                    4: (<><StarIcon onClick={()=>setRating(1)} style={{ color: "gold" }} /><StarIcon onClick={()=>setRating(2)} style={{ color: "gold" }} />
                        <StarIcon onClick={()=>setRating(3)} style={{ color: "gold" }} />
                        <StarIcon onClick={()=>setRating(4)} style={{ color: "gold" }} />
                        <StarIcon onClick={()=>setRating(5)} style={{ color: "grey" }} /></>),

                    5: (<><StarIcon onClick={()=>setRating(1)} style={{ color: "gold" }} /><StarIcon onClick={()=>setRating(2)} style={{ color: "gold" }} />
                        <StarIcon onClick={()=>setRating(3)} style={{ color: "gold" }} />
                        <StarIcon onClick={()=>setRating(4)} style={{ color: "gold" }} />
                        <StarIcon onClick={()=>setRating(5)} style={{ color: "gold" }} /></>)
                }[rating]}
            </div>
        )
    }

    const [isUser, setUser] = useState(true);
    const [editdetails, setEditDetails] = useState(true);
    const[review, setReview] = useState("");
    const arrimg = ["/GYM.png", "/sports.jpg", "/GYM.png"];

    return (
        <div className="in-details">
            {editdetails ? (<><div>
                <h3>Since 1998</h3>

                <label className="label" for="timing">TIMINGS</label>
                <p className="para" id="timing">10:00 - 22:00</p>

                <label className="label" for="age">PREFERED AGE GROUP</label>
                <p className="para" id="age">18 years or more</p>

                <label className="label" for="athelete">PREFERED ATHELETE TYPE</label>
                <p className="para" id="athelete">Heavy Runners</p>

                <label for="coaches" className="label">NUMBER OF COACHES AND EXPERTISE</label>
                <p className="para" id="coaches">
                    We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.
                </p>

                <label for="workout" className="label">PREFERED WORKOUTS OF ACADEMY</label>
                <p className="para" id="workout">
                    1. Cardio <br/>
                    2. Weight liftings <br/> 
                    3. Running  <br/>
                    4. Egility
                </p>

                <label for="infrastructure" className="label">INFRASTRUCTURE OF ACADEMY</label>
                <p className="para" id="infrastructure">
                    We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.
                </p>

                <label for="alumni" className="label">ALUMNI OF ACADEMY</label>
                <p className="para" id="alumni">
                    1. DIT University <br/> 2. DIT University <br/> 3. DIT University <br/>
                </p>

                <label for="selection" className="label">SELECTION PROCESSOR OF ACADEMY</label>
                <p className="para" id="selection">
                    We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.
                </p>

                <label for="do" className="label">DO</label>
                <p className="para" id="do">
                    We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.
                </p>

                <label for="dont" className="label">DON'T</label>
                <p className="para" id="dont">
                    We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.
                </p>

                <label for="terms and condition" className="label">TERMS AND CONDITION OF ACADEMY</label>
                <p className="para" id="terms and condition">
                    We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.
                </p>
            </div>
            <div>
                <div className="itemss">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
               >

                   {arrimg.map(element=>(
                           <img src={element} className="inimage" />
                    
                   ))}
  
               </Carousel>


                </div>

                <div className="itemss-2">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
               >

                   {arrimg.map(element=>(
                           <img src={element} className="inimage" />
                    
                   ))}
  
               </Carousel>

                  <label className="label" for="award">AWARD AND RECOGNIZATION</label>
                  <p className="para2" id="award">
                  We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.
                  </p>
            </div>

                {isUser ? <Button className="edit-button">BOOK NOW</Button>: (<><Button className="edit-button" onClick={() =>setEditDetails(false)}>EDIT PAGE</Button>
                <Button className="edit-button">ALL SUBSCRIBERS</Button></>)}

                <br/><br/><Ratingstar />
                
                {isUser ? (<><br/><br/>
                <label className="label" for="givereview">WRITE A REVIEW</label> <br/><br/>
                <textarea className="ta-modify ta" placeholder="kindly write your review here" onChange={(e) =>setReview(e.target.value)}/>

                {review ? <Button className="edit-button">POST</Button> : <></>}</>): <></>}

                <br/><br/>
                <label className="label" for="reviews">REVIEWS</label>
                  <div className="itemss-2">
                      <p className="para-2 para-3">
                          <Avatar src="/gymnew.png" className="avatar-new"/>
                          this is an last review from me
                      </p>
                      <p className="para-2 para-3">
                          <Avatar src="/gymnew.png" className="avatar-new"/>
                          this is an last review from me so get out of here this is really good
                      </p>
                      <p className="para-2 para-3">
                          <Avatar src="/gymnew.png" className="avatar-new"/>
                          this is an last review from me this is really amazing application please use it and kindly thank to it's technical workers :)
                      </p>
                      <p className="para-2 para-3">
                          <Avatar src="/gymnew.png" className="avatar-new"/>
                          this is an last review from me
                      </p>
                      <p className="para-2 para-3">
                          <Avatar src="/gymnew.png" className="avatar-new"/>
                          this is an last review from me
                      </p>
                  </div>

            </div></>) : 
            <>
                 <div>
                <input type="year" placeholder="year of establishment" value="since 1998" className="ia" /><br/><br/>

                <label className="label" for="timing">TIMINGS</label><br/><br/>
                <input id="timing" value="10:00 - 22:00" className="ia"></input><br/><br/>

                <label className="label" for="age">PREFERED AGE GROUP</label><br/><br/>
                <input className="ia" id="age" value="18 years or more"></input><br/><br/>

                <label className="label" for="athelete">PREFERED ATHELETE TYPE</label><br/><br/>
                <input className="ia" id="athelete" value="Heavy Runners"></input><br/><br/>

                <label for="coaches" className="label">NUMBER OF COACHES AND EXPERTISE</label><br/><br/>
                <textarea className="ta" id="coaches" value="We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.">
                </textarea><br/><br/>

                <label for="workout" className="label">PREFERED WORKOUTS OF ACADEMY</label><br/><br/>
                <textarea className="ta" id="workout" value="1. Cardio
                    2. Weight liftings 
                    3. Running 
                    4. Egility">
                </textarea><br/><br/>

                <label for="infrastructure" className="label">INFRASTRUCTURE OF ACADEMY</label><br/><br/>
                <textarea className="ta" id="infrastructure" value="We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.">
                </textarea><br/><br/>

                <label for="alumni" className="label">ALUMNI OF ACADEMY</label><br/><br/>
                <textarea className="ta" id="alumni" value="1. DIT University  
                    2. DIT University 
                    3. DIT University ">
                    
                </textarea><br/><br/>

                <label for="selection" className="label">SELECTION PROCESSOR OF ACADEMY</label><br/><br/>
                <textarea className="ta" id="selection" value="We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.">
                </textarea><br/><br/>

                <label for="dos" className="label">Do</label><br/><br/>
                <textarea className="ta" id="dos" value="We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.">
                </textarea><br/><br/>

                <label for="dont" className="label">Don't</label><br/><br/>
                <textarea className="ta" id="dont" value="We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.">
                </textarea><br/><br/>

                <label for="terms and condition" className="label">TERMS AND CONDITION OF ACADEMY</label><br/><br/>
                <textarea className="ta" id="terms and condition" value="We at Sprinteriors wanted our website to be futuristic, easy to understand, user friendly and service oriented giving our customers all the handy requisites in designing their dream project online just the way they visualized it. Thinkbar has beautifully malgamated our proficiency in a simple, elegant and totally integrated. amalgamated our proficiency in a simple, elegant and totally integrated.">
                    
                </textarea><br/><br/>

                <label for="logo" className="label">UPLOAD YOUR LOGO<br/><br/><Avatar className="avatar" src="/GYM.png" /></label><br/><br/>
                <input type="file" className="hide" id="logo"/><br/><br/>

                <label for="images-gym" className="label">ACADEMY IMAGES</label><br/><br/>
                <div className="ta gym-tag" id="images-gym">
                    <img src="/GYM.png" alt="" className="images"/>
                    <img src="/GYM.png" alt="" className="images"/>
                    <img src="/GYM.png" alt="" className="images"/>
                    <label className="label" for="academy-img"><div className="img-item">
                        <Add className="bbb"/>
                    </div>
                    </label>
                    <input type="file" className="hide" id="academy-img" />
                </div><br/><br/>

                <label for="images-award" className="label">AWARD AND RECOGNIZATION</label><br/><br/>
                <div className="ta gym-tag" id="images-award">
                    <img src="/GYM.png" alt="" className="images"/>
                    <img src="/GYM.png" alt="" className="images"/>
                    <img src="/GYM.png" alt="" className="images"/>
                    <label className="label" for="academy-img"><div className="img-item">
                        <Add className="bbb"/>
                    </div>
                    </label>
                    <input type="file" className="hide" id="academy-img" />
                </div>
                <textarea className="ta" id="images-award">
                       in this paragraph write about your awards in points
                       1. KPYC AWARD
                       2. Baharat Ratna Award
                       3. Santosh Trophy 3 times Winner
                </textarea>
                <br/><br/>


                <Button className="edit-button">Save</Button>
                <Button className="edit-button red" onClick={() => setEditDetails(true)}>Cancel</Button>

                
            </div>
            </>}
        </div>
    )
}

export default Details
