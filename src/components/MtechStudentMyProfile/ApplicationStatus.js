import React from 'react'
import logo from '../Login/logo.png'
import './StudentMyProfile.css';


export default function ApplicationStatus(props) { 
    return (
        <div>
            <div className="home">
                <div className="profile">
                    <div className="profile_inner">
                        <div className="profile_img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="name">
                            <h1>Welcome , User</h1>
                            {/* <h3>Applicant Id: <span>{props.data._id}</span></h3> */}
                        </div>
                    </div>
                </div>
                <div className="details">

                        <p style={{fontSize:"20px" , color:"red" , fontWeight:"bold" ,padding:"20px"}}>For eligibilty and other details browse the Advertisement:  <a onClick={()=> window.open("https://drive.google.com/file/d/1hm8zubpkHrkWviBom0pAmvuyFNiJO3Jx/view?usp=sharing", "_blank")} style={{fontSize:"16px"  , fontWeight:"bold" , cursor: "pointer"}}> IITP- Mtech_Advertisement</a> </p>
                        

                    <div className="status">
                        <h4>For Help</h4>
                        <div className="status_details">
                            <div className="det">
                                <h4 style={{padding:"20px"}}>In case of any doubt or bug, Please click: <button className="submit_btn"><td onClick={()=> window.open("https://docs.google.com/forms/d/e/1FAIpQLSek72l_2mtCi9Xjfiklqsmdy8EjujEKB6qKDFjzzfIX7q416w/viewform", "_blank")}>Help</td></button> </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
