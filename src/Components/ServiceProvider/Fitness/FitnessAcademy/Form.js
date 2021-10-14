import React, {useState} from 'react'
import {Button, RadioGroup} from '@material-ui/core';
import UploadIcon from '@material-ui/icons/CloudUpload';


function Form({MainCategory, FitnessCategory}) {

    const [number, setNumber] = useState(0);

    const incrementNumber = ()=>{
        setNumber(number+1);
    }

    const decrementNumber = ()=>{
        setNumber(number-1);
    }

    const[applicantname, setApplicantname] = useState("");
    const[applicantemail, setApplicantemail] = useState("");
    const[applicantcontact, setApplicantcontact] = useState("");
    const[applicantwebsite, setApplicantwebsite] = useState("");
    const[academyname, setAcademyname] = useState("");
    const[location, setLocation] = useState("");
    const[yearsofestablishment, setYearsofestablishment]= useState("");
    const[parkingSpace, setParkingSpace] = useState("")
    const[Volunteer, setVolunteer] = useState("");
    const[coachesexpertise, setCoachesexpertise] = useState("");
    const[infrastructure, setInfrastructure] = useState("");
    const[preferedworkout, setPreferedworkout] = useState("");
    const[specialites, setSpecialites] = useState("");
    const[timing, setTiming] = useState([]);
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
    const[DO, setDO] = useState("");
    const[DONT, setDONT] = useState("")

    const[Start, setStart] = useState("");
    const[End, setEnd] = useState("");

    const FixTiming = async()=>{
        console.log(Start + "," + End );
        const arr = {start: Start, end: End};
        await setTiming([...timing, arr]);
        console.log(timing);
    }
    return (
        <div>
            {
                {
                    0 :(
                       <div className="form">
                            <input type="text" onChange={(e)=>setApplicantname(e.target.value)} className="input" placeholder="Enter your Applicant Name"/>
                            <input type="email" onChange={(e)=>setApplicantemail(e.target.value)} className="input" placeholder="Enter your Email Address"/>
                            <input type="tel" onChange={(e)=>setApplicantcontact(e.target.value)} className="input" placeholder="Enter your Contact Number"/>
                            <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                            <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>
                       </div>
                    ),

                    1 :(
                        <div className="form">
                            <input type="text" className="input" placeholder="Enter name of Academy" onChange={(e)=>setAcademyname(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter location of Academy" onChange={(e)=>setLocation(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter year of Establishment of Academy" onChange={(e)=>setYearsofestablishment(e.target.value)}/>
                            <input type="text" className="input" placeholder="Parking Space Available" onChange={(e)=>setParkingSpace(e.target.value)}/>
                            <input type="text" className="input" placeholder="No. of Volunteer" onChange={(e)=>setVolunteer(e.target.value)}/>
                            
                            <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                            <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>
                        </div>
                    ),

                    2 :(
                        <div className="form">
                            <h3>Trainer and their expertise</h3>
                            <textarea className="texthere" placeholder="Number of Trainers and their level of expertise"  onChange={(e)=>setCoachesexpertise(e.target.value)}/>
                            <h3>Describe your Infrastructure</h3>
                            <textarea className="texthere" placeholder="Describe your Infrastructure"  onChange={(e)=>setInfrastructure(e.target.value)}/>
                            <h3>Prefered Workout</h3>
                            <textarea className="texthere" placeholder="Tell us about your prefered workout" onChange={(e)=>setPreferedworkout(e.target.value)} />
                            <h3>Specialites</h3>
                            <textarea className="texthere" placeholder="Tell us about your Specialites"  onChange={(e)=>setSpecialites(e.target.value)}/>
                            <h3>Facilites / Services</h3>
                            <textarea className="texthere" placeholder="Tell us about your Facilites & services"  onChange={(e)=>setSpecialites(e.target.value)}/>
                            <h3>Terms and Conditions</h3>
                            <textarea className="texthere" placeholder="Tell us about your Terms and Condition of academy" onChange={(e)=>setTC(e.target.value)} />
                            <h3>DOs</h3>
                            <textarea className="texthere" placeholder="Tell us about dos of academy" onChange={(e)=>setDO(e.target.value)} />
                            <h3>DON'Ts</h3>
                            <textarea className="texthere" placeholder="Tell us about don'ts of academy" onChange={(e)=>setDONT(e.target.value)} />
                             <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                             <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>
                        </div>
                    ),

                    3 :(
                       <div className="form">
                           <label className="label" for="logo"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="logo" />
                           <p>Upload Logo</p>
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                           <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>
                       </div>
                    ),

                    4 :(
                        <div className="form">
                           <label className="label" for="award"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="award" />
                           <p>Award and reward images</p>

                           <textarea className="texthere" placeholder="enter the detail of award and rewards" onChange={(e)=> setAwardDetail(e.target.value)} />
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                           <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>
                       </div>
                    ),

                    5 :(
                        <div className="form">
                           <label className="label" for="idcard"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="idcard" />
                           <p>Identification card of applicant</p>
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                           <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>
                       </div>
                    ),

                    6 :(
                        <div className="form">
                           <label className="label" for="idacademy"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="idacademy" />
                           <p>Recognization cretificate / License of Academy / Afficiation</p>
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                           <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>
                       </div>
                    ),

                    7: (
                        <div className="form">
                           <label className="label" for="coach"><UploadIcon className="icon" /></label>
                           <input className="imageupload" type="file" id="coach" />
                           <p>IMAGES OF ACADEMY</p>
                           <Button className="button" onClick={incrementNumber}>NEXT {`>`}</Button>
                           <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>
                       </div>
                       
                    ),

                    8 :(
                        <div className="form">
                            <h2>ADD SUBSCRIPTION PRICE HERE</h2>
                            <div className="priceChart">
                                <div className="chart">
                                        <p><span>1</span>month</p>
                                        <input type="number" className="price" placeholder="enter amount in RS" onChange={(e)=> setMonthlyFee(e.target.value)}/>
                                        <h2>Select the payment category</h2>
                                        
                                        <div className="r">
                                            <img src="/money.png" alt="" />
                                        </div>
                                </div>

                                <div className="chart">
                                        <p><span>6</span>month</p>
                                        <input type="number" className="price" placeholder="enter amount in RS" onChange={(e)=>{setSixFee(e.target.value)}} />
                                        <h2>Select the payment category</h2>
                                        
                                        <div className="r">
                                            <img src="/money.png" alt="" />
                                        </div>
                                </div>

                                <div className="chart">
                                        <p><span>12</span>month</p>
                                        <input type="number" className="price" placeholder="enter amount in RS" onChange={(e)=> setTwelveFee(e.target.value)}/>
                                        <h2>Select the payment category</h2>
                                        
                                        <div className="r">
                                            <img src="/money.png" alt="" />
                                        </div>
                                </div>
                            </div> 
                            <Button className="button" onClick={()=>{incrementNumber()}}>ADD PAYMENT</Button>
                            <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>   
                        </div>
                    ),
                    9 :(
                        <div className="form">
                            <h2>/**These credential information will not be shared with anyone **/</h2>
                            <input type="text" className="input" placeholder="Enter your GST number" onChange={(e)=>setGst(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter your PAN number" onChange={(e)=>setPan(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter your Name connected to Bank Account" onChange={(e)=>setAccountName(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter your Bank Account Number" onChange={(e)=>setAccountNumber(e.target.value)}/>
                            <input type="text" className="input" placeholder="Enter your IFSC code" onChange={(e)=>setIfsc(e.target.value)}/>
                            <Button className="button" onClick={(e)=>incrementNumber()}>Next {`>`}</Button>
                            <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>
                        </div>
                    ),

                    10 :(<div className="form">
                    <h2>Select the timing slots for online and offline mode both</h2>
                    <div className="timing">
                        <div><label for="start">Starting Time</label><input type="time" className="input" id="start" onChange={(e)=>setStart(e.target.value)}/></div>
                        <div><label for="end">Ending Time</label><input type="time" className="input" id="end" onChange={(e)=>setEnd(e.target.value)}/></div>
                        
                        <Button className="button" onClick={()=>FixTiming()}>ADD</Button>
                    </div>
                    {timing.length ? (<div className="show">
                        {timing.map(element => (
                            <div className="timehere">
                                <h4>{element.start + ' - ' + element.end}</h4>
                            </div>
                        ))}
                    </div>) : <></>}
                    <Button className="button" onClick={decrementNumber}>Back {`<`}</Button>
                    <Button className="button">Request to Publish</Button>
                </div>
            )
                }[number]
            }
        </div>
    )
}

export default Form
