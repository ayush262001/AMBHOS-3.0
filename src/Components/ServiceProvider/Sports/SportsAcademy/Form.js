import React, {useState} from 'react'
import './Form.css';
import {Button, RadioGroup} from '@material-ui/core';
import UploadIcon from '@material-ui/icons/CloudUpload';


function Form({MainCategory, SportsCategory}) {

    const [number, setNumber] = useState(0);

    const incrementNumber = ()=>{
        setNumber(number+1);
    }

    const[applicantname, setApplicantname] = useState("");
    const[applicantemail, setApplicantemail] = useState("");
    const[applicantcontact, setApplicantcontact] = useState("");
    const[applicantwebsite, setApplicantwebsite] = useState("");
    const[academyname, setAcademyname] = useState("");
    const[location, setLocation] = useState("");
    const[yearsofestablishment, setYearsofestablishment]= useState("");
    const[atheletictype, setAtheletictype] = useState("");
    const[agegroup, setAgeGroup] = useState("");
    const[coachesexpertise, setCoachesexpertise] = useState("");
    const[infrastructure, setInfrastructure] = useState("");
    const[preferedworkout, setPreferedworkout] = useState("");
    const[alumni, setAlumni] = useState("");
    const[timing, setTiming] = useState("");
    const[awardDetail, setAwardDetail] = useState("");
    const[selection, setSelection] = useState("");
    const[monthlyfee, setMonthlyFee] = useState(0);
    const[monthlytype, setMonthlyType] = useState("subscription");
    const[sixfee, setSixFee] = useState(0);
    const[sixtype, setSixType] = useState("subscription");
    const[twelvefee, setTwelveFee] = useState(0);
    const[twelvetype, setTwelveType] = useState("subscription");
    const[gst, setGst] = useState("");
    const[pan, setPan] = useState("");
    const[accountName, setAccountName] = useState("");
    const[ifsc, setIfsc] = useState("");
    const[accountNumber, setAccountNumber] = useState("");
    const[tc, setTC] = useState("");
    return (
        <div>
            {
                {
                    0 :(
                       <div className="form">
                            <input type="text" onChange={(e)=>setApplicantname(e.target.value)} className="input" placeholder="Enter your Applicant Name"/>
                            <input type="email" onChange={(e)=>setApplicantemail(e.target.value)} className="input" placeholder="Enter your Email Address"/>
                            <input type="tel" onChange={(e)=>setApplicantcontact(e.target.value)} className="input" placeholder="Enter your Contact Number"/>
                            <input type="url" onChange={(e)=>setApplicantwebsite(e.target.value)} className="input" placeholder="Enter your Website Url"/>
                            <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                       </div>
                    ),

                    1 :(
                        <div className="form">
                            <input type="text" className="input" placeholder="Enter name of Academy" onClick={(e)=>setAcademyname(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter location of Academy" onClick={(e)=>setLocation(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter years of Establishment of Academy" onClick={(e)=>setYearsofestablishment(e.target.value)}/>
                            <input type="text" className="input" placeholder="Prefered Atheletic Type" onClick={(e)=>setAtheletictype(e.target.value)}/>
                            <input type="text" className="input" placeholder="Prefered Age Group" onClick={(e)=>setAgeGroup(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter Academy Timing" onClick={(e)=>setTiming(e.target.value)}/>
                            <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                        </div>
                    ),

                    2 :(
                        <div className="form">
                            <h3>Coaches and their expertise</h3>
                            <textarea className="texthere" placeholder="Number of coaches and their level of expertise"  onClick={(e)=>setCoachesexpertise(e.target.value)}/>
                            <h3>Describe your Infrastructure</h3>
                            <textarea className="texthere" placeholder="Describe your Infrastructure"  onClick={(e)=>setInfrastructure(e.target.value)}/>
                            <h3>Prefered Workout</h3>
                            <textarea className="texthere" placeholder="Tell us about your prefered workout" onClick={(e)=>setPreferedworkout(e.target.value)} />
                            <h3>Alumni Structure</h3>
                            <textarea className="texthere" placeholder="Tell us about your Alumni (if any)"  onClick={(e)=>setAlumni(e.target.value)}/>
                            <h3>Selection Procedure</h3>
                            <textarea className="texthere" placeholder="Tell us about your Selection Procedure" onClick={(e)=>setSelection(e.target.value)} />
                            <h3>Terms and Conditions</h3>
                            <textarea className="texthere" placeholder="Tell us about your Terms and Condition of academy" onClick={(e)=>setTC(e.target.value)} />
                             <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                        </div>
                    ),

                    3 :(
                       <div className="form">
                           <label className="label" for="logo"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="logo" />
                           <p>Upload Logo</p>
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                       </div>
                    ),

                    4 :(
                        <div className="form">
                           <label className="label" for="award"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="award" />
                           <p>Award and reward images</p>

                           <textarea className="texthere" placeholder="enter the detail of award and rewards" onChange={(e)=> setAwardDetail(e.target.value)} />
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                       </div>
                    ),

                    5 :(
                        <div className="form">
                           <label className="label" for="idcard"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="idcard" />
                           <p>Identification card of applicant</p>
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                       </div>
                    ),

                    6 :(
                        <div className="form">
                           <label className="label" for="idacademy"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="idacademy" />
                           <p>Recognization cretificate / License of Academy / Afficiation</p>
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                       </div>
                    ),

                    7 :(
                        <div className="form">
                           <label className="label" for="coach"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="coach" />
                           <p>Certificate of Coach</p>
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                       </div>
                    ),

                    8: (
                        <div className="form">
                           <label className="label" for="coach"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="coach" />
                           <p>IMAGES OF ACADEMY</p>
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                       </div>
                    ),

                    9 :(
                        <div className="form">
                            <h2>ADD SUBSCRIPTION PRICE HERE</h2>
                            <div className="priceChart">
                                <div className="chart">
                                        <p><span>1</span>month</p>
                                        <input type="number" className="price" placeholder="enter amount in RS" onChange={(e)=> setMonthlyFee(e.target.value)}/>
                                        <h2>Select the payment category</h2>
                                        <div className="r">
                                        <div className="radio" onClick={()=>{setMonthlyType("trial")}}>Trial</div>
                                        <div className="radio" onClick={()=>{setMonthlyType("subscription")}}>Subscription</div>
                                        </div>
                                        <div className="r">
                                            <img src="/money.png" alt="" />
                                        </div>
                                </div>

                                <div className="chart">
                                        <p><span>6</span>month</p>
                                        <input type="number" className="price" placeholder="enter amount in RS" onChange={(e)=>{setSixFee(e.target.value)}} />
                                        <h2>Select the payment category</h2>
                                        <div className="r">
                                        <div className="radio" onClick={()=>{setSixType("trial")}}>Trial</div>
                                        <div className="radio" onClick={()=>{setSixType("subscription")}}>Subscription</div>
                                        </div>
                                        <div className="r">
                                            <img src="/money.png" alt="" />
                                        </div>
                                </div>

                                <div className="chart">
                                        <p><span>12</span>month</p>
                                        <input type="number" className="price" placeholder="enter amount in RS" onChange={(e)=> setTwelveFee(e.target.value)}/>
                                        <h2>Select the payment category</h2>
                                        <div className="r">
                                        <div className="radio" onClick={()=>setTwelveType("trial")}>Trial</div>
                                        <div className="radio" onClick={()=>setTwelveType("subscription")}>Subscription</div>
                                        </div>
                                        <div className="r">
                                            <img src="/money.png" alt="" />
                                        </div>
                                </div>
                            </div> 
                            <Button className="button" onClick={()=>{incrementNumber()}}>ADD PAYMENT</Button>   
                        </div>
                    ),
                    10 :(
                        <div className="form">
                            <h2>/**These credential information will not be shared with anyone **/</h2>
                            <input type="text" className="input" placeholder="Enter your GST number" onClick={(e)=>setGst(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter your PAN number" onClick={(e)=>setPan(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter your Name connected to Bank Account" onClick={(e)=>setAccountName(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter your Bank Account Number" onClick={(e)=>setAccountNumber(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter your IFSC code" onClick={(e)=>setIfsc(e.target.value)}/>
                            <Button className="button">Request to Publish {`>`}</Button>
                        </div>
                    )
                }[number]
            }
        </div>
    )
}

export default Form
