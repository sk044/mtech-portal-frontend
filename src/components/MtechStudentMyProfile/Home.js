import React from 'react'
import logo from '../Login/logo.png'
import {Link} from 'react-router-dom'
import './StudentMyProfile.css';
export default function Home(props) {
    console.log(props);
    console.log(!props.data?null:props.data.personalInfoUploadStatus);
    console.log(!props.data?null:props.data.gateScoreCard);
    // console.log(!props.data?null:props.data.paymentReceipt);
    
    

    setTimeout(window.onload =  () => {
            
        if(!props.data)
        {
            var i = 0;
            while(!props.data)
            {
                console.log(i);
                i = i+1;
            }
        }
        //for scorecard
        var str2 = !props.data?null:props.data.gateScoreCard;
        if(str2 != null){
            var ad8 = document.getElementById("ad8");
            ad8.innerHTML="Uploaded";
        }

        //for status of application
        var str = !props.data?null:props.data.personalInfoUploadStatus.toString();
        var edfi = document.getElementById("edfi");

        console.log(str);
        if(str == "true"){
            edfi.innerHTML="Edit Basic Application Form";
        }

        //for apply more
        var apply = document.getElementById("apply");
        // if(str=="false")
        // {
        //     document.getElementById('apply').style.visibility = 'hidden';
        // }
        // else 
        if(str=="false")
        {
            document.getElementById('apply').style.visibility = 'hidden';
        }
        else if(str == "true" && (!props.data?null:props.data.applications.length <= 0)){
            document.getElementById('apply').style.visibility = 'visible';
            apply.innerHTML="Apply";
        }
        else if(!props.data?null:props.data.applications.length > 0){
            document.getElementById('apply').style.visibility = 'visible';
            apply.innerHTML="Apply More";
        }



    },100);   // error comes if user logouts before .5 seconds due to this

    
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
                            {/* Applicant Id: <span>{!props.data?null:props.data._id} */}
                            <h3>
                            <button className="mtech_btn" id="edfi" onClick ={()=>{window.location.href = "/mtechstuinfo/"+props.data._id}} data={props.data}>Fill Basic Application Form</button>
                            <button className="mtech_btn" onClick ={()=>{window.location.href = "/uploadgate/"+props.data._id}} >Upload Gate Score Card</button>
                            <button className="mtech_btn" onClick ={()=>{window.location.href = "/uploadprofilepic/"+props.data._id}} >Upload Profile Pic</button>
                            

                            </h3>
                               
                        </div>
                        
                    </div>
                </div>
                <div className="details">
                <button className="mtech_btn" id="apply" onClick ={()=>{window.location.href = "/applymore/"+props.data._id}} style={{background:'Salmon',color:"black"}}>Apply</button>
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

                    <div className="status">
                        <h4>Document Upload Status</h4>
                        <br/>

                        <div className="status_details">

                        <div className="det">
                            <h4 id="bd1">Gate Score Card</h4>    
                            <h4 id="ad8">Not Uploaded</h4>
                            <h4 ><a href={!props.data?null:props.data.gateScoreCard}>Download</a></h4>
                            </div>

                            {/* <div className="det">
                            <h4 id="bd1">Payment Receipt</h4>    
                            <h4 id="ad9">Not Uploaded </h4>
                            <h4 ><a href={!props.data?null:props.data.paymentReceipt}>Download</a></h4>
                            </div> */}

                        </div>
                    </div>

            </div>
            </div>
            </div>
        </div>
    )
}
