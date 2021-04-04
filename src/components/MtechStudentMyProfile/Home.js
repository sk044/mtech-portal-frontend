import React from 'react'
import logo from '../Login/logo.png'
import {Link} from 'react-router-dom'
import './StudentMyProfile.css';
export default function Home(props) {
    console.log(props);
    console.log(!props.data?null:props.data.personalInfoUploadStatus);

    setTimeout(window.onload =  () => {

        var str = !props.data?null:props.data.personalInfoUploadStatus.toString();
        var edfi = document.getElementById("edfi");
        console.log(str);
        if(str == "true"){
            edfi.innerHTML="Edit Basic Application Form";
        }
    },500);   // error comes if user logouts before .5 seconds due to this

    
    return (
        <div>
            <div className="container">
            <div className="home">
                <div className="profile">
                    <div className="profile_inner">
                        <div className="profile_img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="name">
                            <h1>Welcome , {!props.data?null:props.data.name}</h1>
                            <h3>Applicant Id: <span>{!props.data?null:props.data._id}</span> 
                            <button className="mtech_btn" id="edfi" onClick ={()=>{window.location.href = "/mtechstuinfo/"+props.data._id}} data={props.data}>Fill Basic Application Form</button>
                            <button className="mtech_btn" onClick ={()=>{window.location.href = "/uploadgate/"+props.data._id}} >Upload Gate Score Card</button>
                            <button className="mtech_btn" onClick ={()=>{window.location.href = "/uploadpayment/"+props.data._id}} >Upload Payment Recipt</button>
                            

                            </h3>
                               
                        </div>
                        
                    </div>
                </div>
                <div className="details">
                <button className="mtech_btn" onClick ={()=>{window.location.href = "/applymore/"+props.data._id}} style={{background:'Salmon',color:"black"}}>Apply More</button>
                    <div className="status">
                        <h4>Filled Forms</h4>
                        <br/>

                        <div className="status_details">

                     {!props.data?null:props.data.applications.map((element) => (

                            <div className="det" key={element.applicationId}>
                            <h4 id="bd1">{element.applicationId}</h4>    
                            <h4 id="ad1">{element.department}</h4>
                            <h4 id="bd1">{element.applicationCategory}</h4>
                            </div>

                                ))}

                        </div>
                    </div>

            </div>
            </div>
            </div>
        </div>
    )
}
