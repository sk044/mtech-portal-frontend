import React from 'react'
import logo from '../Login/logo.png'
import {Link} from 'react-router-dom'
import './StudentMyProfile.css';
export default function Home(props) {
    console.log(props);
    console.log(!props.data?null:props.data.personalInfoUploadStatus);
    console.log(!props.data?null:props.data.gateScoreCard);
    // console.log(!props.data?null:props.data.paymentReceipt);
    
    

    console.log("Hello"+props.data);
    // console.log(localStorage.getItem('authToken'));

    if(props.data!==undefined){
        var str2 = props.data===null?null:props.data.gateScoreCard;
        if(document.getElementById("ad8") !== null && document.getElementById('ugsc') !== null){
        if(str2 != null){
            var ad8 = document.getElementById("ad8");
            ad8.innerHTML="Uploaded";
        }

        //for image
       
        var str11 = props.data===null?null:props.data.image;
        // if(document.getElementById("ad9") !== null){
        if(str11 != null){
            var ad9 = document.getElementById("ad9");
            ad9.innerHTML="Uploaded";
        }
    // }

        //for status of application
        var str = props.data?null:props.data.personalInfoUploadStatus.toString(); 
        document.getElementById('edfi').style.visibility = 'visible';
        document.getElementById('ugsc').style.visibility = 'visible';
        document.getElementById('upp').style.visibility = 'visible';
            
        var edfi = document.getElementById("edfi");

        console.log(str);
        if(props.data.personalInfoUploadStatus){
            edfi.innerHTML="Edit Basic Application Form";
        }

        //for apply more
        var apply = document.getElementById("apply");
        var applyhelper = document.getElementById("applyhelper");
        // if(str=="false")
        // {
        //     document.getElementById('apply').style.visibility = 'hidden';
        // }
        // else 
        console.log(!props.data.personalInfoUploadStatus);
        if(!props.data.personalInfoUploadStatus)
        {
            console.log("Hidden");
            document.getElementById('apply').style.visibility = 'hidden';
        }
        else if(props.data.personalInfoUploadStatus && (!props.data?null:props.data.applications.length <= 0)){
            document.getElementById('apply').style.visibility = 'visible';
            apply.innerHTML="Apply";

            document.getElementById('applyhelper').style.visibility = 'visible';
            applyhelper.innerHTML="Thank You for submitting the Basic Information, now please fill your MTECH application by clicking the Apply button.";
            
            if(document.getElementById("preview") !== null){
                document.getElementById('preview').style.visibility = 'visible';
            }
        }
        else if(!props.data?null:props.data.applications.length > 0){
            document.getElementById('apply').style.visibility = 'visible';
            apply.innerHTML="Apply More";

            document.getElementById('applyhelper').style.visibility = 'visible';
            applyhelper.innerHTML="For applying to another department/category, Please click Apply More button:";
            if(document.getElementById("preview") !== null){
                document.getElementById('preview').style.visibility = 'visible';
            }
        }
    }
    }
    else
    {
        if(document.getElementById("edfi") !== null){
            document.getElementById('edfi').style.visibility = 'hidden';
        }
        if(document.getElementById("ugsc") !== null){
            document.getElementById('ugsc').style.visibility = 'hidden';
        }
        if(document.getElementById("upp") !== null){
            document.getElementById('upp').style.visibility = 'hidden';
        }
        if(document.getElementById("preview") !== null){
            document.getElementById('preview').style.visibility = 'hidden';
        }
    }

    
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
                            <h3>
                            <button className="mtech_btn" id="edfi" onClick ={()=>{window.location.href = "/mtechstuinfo/"+props.data._id}} data={props.data} style={{}}>Fill Basic Application Form</button>
                            <button className="mtech_btn" id="preview" onClick ={()=>{window.location.href = "/previewapplication/"+props.data._id}} style={{}}>Preview Basic Application Form</button>                           

                            <button className="mtech_btn" id="ugsc" onClick ={()=>{window.location.href = "/uploadgate/"+props.data._id}} style={{}}>Upload Gate Score Card</button>
                            <button className="mtech_btn" id="upp" onClick ={()=>{window.location.href = "/uploadprofilepic/"+props.data._id}} style={{}}>Upload Profile Pic</button>                           

                            </h3>                              
                        </div>     
                    </div>
                </div>
                <div className="details">
                <p id="applyhelper" style={{color: "blue" , paddingLeft:"20px"}}></p>
                <button className="mtech_btn" id="apply" onClick ={()=>{window.location.href = "/applymore/"+props.data._id}} style={{background:'Salmon',color:"black", visibility:'hidden'}}>Apply</button>
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
                            <h4 ><a href={!props.data?null:props.data.gateScoreCard} download="GateScoreCard.pdf">Download</a></h4>
                            </div>

                            <div className="det">
                            <h4 id="bd1">Profile Photo</h4>    
                            <h4 id="ad9">Not Uploaded </h4>
                            <h4 ><a href={!props.data?null:props.data.image}>Download</a></h4>
                            </div>

                        </div>
                    </div>

            </div>
            </div>
            </div>
        </div>
    )

}