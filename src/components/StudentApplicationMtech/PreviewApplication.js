import React,{useState} from 'react'
import Professional from './Professional'
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import Academics from './Academics'
import ContactDetails from './ContactDetails'
// import Upload from '../upload'

import './StudentApplication.css'

import TextField from '@material-ui/core/TextField'

import Label from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
export default function PreviewApplication(props) {

	const [user , setUser] = useState({});

///for edit data

const setUp =  () => {
	// setTimeout(window.onload =  () => {

	// console.log(props.match.params.id)
	// const id = {props.match.params.id}
 
 
	const id = props.match.params.id;
	const address = "/backend/applicant/profile/"+id;
	fetch(address , {
		method : 'get',
		headers:{
			"Content-Type" : "application/json",
			'x-auth-token': localStorage.getItem('authToken'),
			'x-refresh-token': localStorage.getItem('refreshToken'),
		},
	}).then((res) => {
		if(res.ok)
			return res.json();
	}).then((data)=> {

		console.log(data.applicantDetails.name);
		setUser(data.applicantDetails);
        console.log(user);

	})
// },300);	
};


	React.useEffect(() => {
		setUp();
	},[]);



    return (

        <div className="container">
			<div className="name">
            <button className="mtech_btn" onClick ={()=>{window.location.href = "/mtechstuprofile/"+props.match.params.id}} style={{background:'Salmon',color:"black"}}>Go to Home</button>
            </div>

            <div className="row">
            	
                    <div className="p-5 si_div">
                        <h1 className="text-center si_subhead">Student Information</h1>
                        <div className="row">
                            <div className="col-sm-6 text-center">
                                <Label required>Name of the Applicant:</Label>
                                <TextField className="textfield" name="name" value={user.name} variant="filled" ></TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                            <Label required>Date of Birth: </Label>
                                <TextField className="textfield" name="dob" type="date" value={user.dob} variant="filled" ></TextField>
                            </div>
                            
                        </div>
                        <div className="row mt-5">
                        <div className="col-sm-6 text-center">
                            <Label required>Nationality:</Label>
                                <TextField className="textfield" name="nationality" value={user.nationality} variant="filled" >
                                
                                </TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                            <Label required>Gender:</Label>
                                <TextField className="textfield" name="gender" value={user.gender} variant="filled" >
                               
                                </TextField>
                            </div>
                        </div>
                        <div className="row mt-5">
                            
                            <div className="col-sm-6 text-center">
                            <Label required>Birth Category :</Label>
							<TextField className="textfield" name="birthCategory"  value={user.birthCategory} variant="filled">
                                
                                </TextField>                            
								</div>
                            <div className="col-sm-6 text-center">
                            <Label required>Category:(Physically Handicapped)</Label>
                               
                            <TextField className="textfield" name="physicallyHandicapped" value={user.physicallyHandicapped} variant="filled" >
                                
                                </TextField>
                            </div>
                        </div>
                        <div className="row mt-5">
                            
                            <div className="col-sm-6 text-center">
                            <Label required>Marital Status :</Label>
                                <TextField className="textfield" name="martialStatus" value={user.martialStatus} variant="filled" >
								
								</TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                            <Label required>Father's/Spouse Name :</Label>
                                <TextField className="textfield" name="guardianOrSpouseName"  value={user.guardianOrSpouseName} variant="filled"></TextField>
                            </div>
                           
                        
                        </div>
                        <div className="row mt-5 px-5 mx-auto">
                        </div>
                    </div>

            </div>

            <hr/>

            {user.contactDetails != undefined ? (
            <div className="p-5 si_div">
                <h1 className="text-center si_subhead">Contact Details</h1>
                <div className="row">
                            <div className="col-sm-6 text-center">
                                <Label required>Address</Label>
                                <TextField className="textfield" name="address" value={user.contactDetails.address} variant="filled" ></TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                                <Label required>State</Label>
                                <TextField className="textfield" name="state" value={user.contactDetails.state} variant="filled" >
                                
                                </TextField>
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col-sm-6 text-center">
                            <Label required>PinCode</Label>
                                <TextField className="textfield" name="pincode" value={user.contactDetails.pincode} variant="filled" ></TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                            <Label required>Email Id</Label>
                                <TextField className="textfield" type="email" name="email" value={user.contactDetails.email} variant="filled"></TextField>
                            </div>
                        </div>
                        <div className="row mt-5">
                            
                            <div className="col-sm-6 text-center">
                                <Label required>Phone No.</Label>
                                <TextField className="textfield" name="mobileNo"  value={user.contactDetails.mobileNo} variant="filled" ></TextField>
                            </div>
                           
                </div>
                
            </div>
            ) :null}
            <hr/>
        	{
             user.academicQualification!=undefined ? (
            <div className="p-5 si_div">
                <h1 className="text-center si_subhead">Academic Qualifications </h1>
                
                {user.academicQualification.map(quals => {

                return (
                    <>
                    <form>
                       
                            <div>
                            	<Label>Education Level</Label>
                                <TextField className="textfield" value={quals.educationLevel} variant="filled" ></TextField>
                                
                                <Label>Degree Specialization</Label>
                                <TextField className="textfield" value={quals.degree} variant="filled" ></TextField>
                                <Label>School/College</Label>
                                <TextField className="textfield" value={quals.schoolOrCollege} variant="filled" ></TextField>
                                <Label>University/Board</Label>
                                <TextField className="textfield" value={quals.boardOrUniversity} variant="filled" ></TextField>
                                <Label>(Expected) Year Of Passing</Label>
                                <TextField className="textfield" value={quals.yearOfPassing} variant="filled" ></TextField>
                                <Label>Percentage/CGPA/CPI</Label>
                                <TextField className="textfield" value={quals.percentageOrCgpa} variant="filled" ></TextField>
                             	<Label>Out Of</Label>
                                <TextField className="textfield" value={quals.outOf} variant="filled" ></TextField>
                             	<Label>Status</Label>
                                <TextField className="textfield" value={quals.currentStatus} variant="filled" ></TextField>
                                
                             </div>
                        </form>
                        <hr width="75%"/>
                    </>
                
                )
             })}
             </div>
            ):null}


         {
             user.professionalExperience!=undefined ? (
            <div className="p-5 si_div">
                <h1 className="text-center si_subhead">Professional Experience </h1>
                
                {user.professionalExperience.map(experience => {

                return (
                    <>
                    <form>
                       
                            <div>
                            	<Label>Work Experience Type</Label>
                                <TextField className="textfield" value={experience.experienceType} variant="filled" ></TextField>
                                
                                <Label>Organization Name</Label>
                                <TextField className="textfield" value={experience.organization} variant="filled" ></TextField>
                                <Label>Position</Label>
                                <TextField className="textfield" value={experience.positionHeld} variant="filled" ></TextField>
                                <Label>From Date</Label>
                                <TextField className="textfield" value={experience.fromDate} variant="filled" ></TextField>
                                <Label>To Date</Label>
                                <TextField className="textfield" value={experience.toDate} variant="filled" ></TextField>
                                <Label>Experience Duration</Label>
                                <TextField className="textfield" value={experience.experienceDuration} variant="filled" ></TextField>
                             	<Label>Nature of Work</Label>
                                <TextField className="textfield" value={experience.natureOfWork} variant="filled" ></TextField>
                             	<Label>Current Job</Label>
                                <TextField className="textfield" value={experience.isCurrentJob} variant="filled" ></TextField>
                                
                             </div>
                        </form>
                        <hr width="75%"/>
                    </>
                
                )
             })}
             </div>
            ):null}
            

        </div>

       )

}