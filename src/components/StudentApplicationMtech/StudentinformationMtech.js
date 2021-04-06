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
export default function StudentinformationMtech(props) {
    const [inputFields,setinputField]=useState([
        {name:'',dob:'',nationality:'',gender:'',birthCategory:'',martialStatus:'',physicallyHandicapped:'',guardianOrSpouseName:''},
        
    ])


	const [contactDetails,setContactDetails]=useState([
        {address:'',state:'',pincode:'',email:'',mobileNo:''}, 
        
    ])

	const [academicQual,setAcademicQual]=useState([
        {educationLevel:'',degree:'',schoolOrCollege:'',boardOrUniversity:'',yearOfPassing:'',percentageOrCgpa:'',outOf:'',currentStatus:'' },
        
    ])

	const [professionalExp,setProfessionalExp]=useState([
        {experienceType:'',organization:'',positionHeld:'',fromDate:'',toDate:'',natureOfWork:'',isCurrentJob:'',experienceDuration:'0'},
        
    ])

	const [touched,setBlur]=useState([
        {name:false,dob:false,nationality:false,gender:false,birthCategory:false,martialStatus:false,physicallyHandicapped:false,guardianOrSpouseName:false,address:false,state:false,pincode:false,email:false,mobileNo:false}, 
        
    ])

	const handleBlur=(index,field)=>(evt)=>{
        console.log(index,field)
        const values=[...touched];
        values[index][field]=true;
        setBlur(values);
        console.log("touched:",touched);
    }

    const genderOptions = [
        {  label: 'Male', value: 'Male' },
        {  label: 'Female', value: 'Female' },
        {  label: 'Other', value: 'Other' },
      ]
    const handiOptions=[
        {label:'Yes',value: true},
        {label:'No',value: false},
    ]

	const categoryOptions=[

        {  label: 'Other', value: 'other' },
		{  label: 'Scheduled Castes', value: 'Scheduled Castes' },
        {  label: 'Scheduled Tribes', value: 'Scheduled Tribes' },	
		{  label: 'OBC(Non Creamy)', value: 'OBC(Non Creamy)' },	
		{  label: 'General/OBC(Creamy Layer)', value: 'General/OBC(Creamy Layer)' },
		{  label: 'Economically Weaker Sections', value: 'Economically Weaker Sections' },


	]

	const martialStatusOptions=[

		{  label: 'Married', value: 'Married' },
		{  label: 'Unmarried', value: 'Unmarried' },

	]



    const nationoptions=[  
	{ label:"Afghanistan", value:"Afghanistan"},
	{ label:"Aland Islands", value:"Aland Islands"},
	{ label:"Albania", value:"Albania"},
	{ label:"Algeria", value:"Algeria"},
	{ label:"American Samoa", value:"American Samoa"},
	{ label:"Andorra", value:"Andorra"},
	{ label:"Angola", value:"Angola"},
	{ label:"Anguilla", value:"Anguilla"},
	{ label:"Antarctica", value:"Antarctica"},
	{ label:"Antigua and Barbuda", value:"Antigua and Barbuda"},
	{ label:"Argentina", value:"Argentina"},
	{ label:"Armenia", value:"Armenia"},
	{ label:"Aruba", value:"Aruba"},
	{ label:"Australia", value:"Australia"},
	{ label:"Austria", value:"Austria"},
	{ label:"Azerbaijan", value:"Azerbaijan"},
	{ label:"Bahamas", value:"Bahamas"},
	{ label:"Bahrain", value:"Bahrain"},
	{ label:"Bangladesh", value:"Bangladesh"},
	{ label:"Barbados", value:"Barbados"},
	{ label:"Belarus", value:"Belarus"},
	{ label:"Belgium", value:"Belgium"},
	{ label:"Belize", value:"Belize"},
	{ label:"Benin", value:"Benin"},
	{ label:"Bermuda", value:"Bermuda"},
	{ label:"Bhutan", value:"Bhutan"},
	{ label:"Bolivia", value:"Bolivia"},
	{ label:"Bonaire, Sint Eustatius and Saba", value:"Bonaire, Sint Eustatius and Saba"},
	{ label:"Bosnia and Herzegovina", value:"Bosnia and Herzegovina"},
	{ label:"Botswana", value:"Botswana"},
	{ label:"Bouvet Island", value:"Bouvet Island"},
	{ label:"Brazil", value:"Brazil"},
	{ label:"British Indian Ocean Territory", value:"British Indian Ocean Territory"},
	{ label:"Brunei Darussalam", value:"Brunei Darussalam"},
	{ label:"Bulgaria", value:"Bulgaria"},
	{ label:"Burkina Faso", value:"Burkina Faso"},
	{ label:"Burundi", value:"Burundi"},
	{ label:"Cambodia", value:"Cambodia"},
	{ label:"Cameroon", value:"Cameroon"},
	{ label:"Canada", value:"Canada"},
	{ label:"Cape Verde", value:"Cape Verde"},
	{ label:"Cayman Islands", value:"Cayman Islands"},
	{ label:"Central African Republic", value:"Central African Republic"},
	{ label:"Chad", value:"Chad"},
	{ label:"Chile", value:"Chile"},
	{ label:"China", value:"China"},
	{ label:"Christmas Island", value:"Christmas Island"},
	{ label:"Cocos (Keeling) Islands", value:"Cocos (Keeling) Islands"},
	{ label:"Colombia", value:"Colombia"},
	{ label:"Comoros", value:"Comoros"},
	{ label:"Congo", value:"Congo"},
	{ label:"Congo, the Democratic Republic of the", value:"Congo, the Democratic Republic of the"},
	{ label:"Cook Islands", value:"Cook Islands"},
	{ label:"Costa Rica", value:"Costa Rica"},
	{ label:"Cote D'Ivoire", value:"Cote D'Ivoire"},
	{ label:"Croatia", value:"Croatia"},
	{ label:"Cuba", value:"Cuba"},
	{ label:"Curacao", value:"Curacao"},
	{ label:"Cyprus", value:"Cyprus"},
	{ label:"Czech Republic", value:"Czech Republic"},
	{ label:"Denmark", value:"Denmark"},
	{ label:"Djibouti", value:"Djibouti"},
	{ label:"Dominica", value:"Dominica"},
	{ label:"Dominican Republic", value:"Dominican Republic"},
	{ label:"Ecuador", value:"Ecuador"},
	{ label:"Egypt", value:"Egypt"},
	{ label:"El Salvador", value:"El Salvador"},
	{ label:"Equatorial Guinea", value:"Equatorial Guinea"},
	{ label:"Eritrea", value:"Eritrea"},
	{ label:"Estonia", value:"Estonia"},
	{ label:"Ethiopia", value:"Ethiopia"},
	{ label:"Falkland Islands (Malvinas)", value:"Falkland Islands (Malvinas)"},
	{ label:"Faroe Islands", value:"Faroe Islands"},
	{ label:"Fiji", value:"Fiji"},
	{ label:"Finland", value:"Finland"},
	{ label:"France", value:"France"},
	{ label:"French Guiana", value:"French Guiana"},
	{ label:"French Polynesia", value:"French Polynesia"},
	{ label:"French Southern Territories", value:"French Southern Territories"},
	{ label:"Gabon", value:"Gabon"},
	{ label:"Gambia", value:"Gambia"},
	{ label:"Georgia", value:"Georgia"},
	{ label:"Germany", value:"Germany"},
	{ label:"Ghana", value:"Ghana"},
	{ label:"Gibraltar", value:"Gibraltar"},
	{ label:"Greece", value:"Greece"},
	{ label:"Greenland", value:"Greenland"},
	{ label:"Grenada", value:"Grenada"},
	{ label:"Guadeloupe", value:"Guadeloupe"},
	{ label:"Guam", value:"Guam"},
	{ label:"Guatemala", value:"Guatemala"},
	{ label:"Guernsey", value:"Guernsey"},
	{ label:"Guinea", value:"Guinea"},
	{ label:"Guinea-Bissau", value:"Guinea-Bissau"},
	{ label:"Guyana", value:"Guyana"},
	{ label:"Haiti", value:"Haiti"},
	{ label:"Heard Island and Mcdonald Islands", value:"Heard Island and Mcdonald Islands"},
	{ label:"Holy See (Vatican City State)", value:"Holy See (Vatican City State)"},
	{ label:"Honduras", value:"Honduras"},
	{ label:"Hong Kong", value:"Hong Kong"},
	{ label:"Hungary", value:"Hungary"},
	{ label:"Iceland", value:"Iceland"},
	{ label:"India", value:"India"},
	{ label:"Indonesia", value:"Indonesia"},
	{ label:"Iran, Islamic Republic of", value:"Iran, Islamic Republic of"},
	{ label:"Iraq", value:"Iraq"},
	{ label:"Ireland", value:"Ireland"},
	{ label:"Isle of Man", value:"Isle of Man"},
	{ label:"Israel", value:"Israel"},
	{ label:"Italy", value:"Italy"},
	{ label:"Jamaica", value:"Jamaica"},
	{ label:"Japan", value:"Japan"},
	{ label:"Jersey", value:"Jersey"},
	{ label:"Jordan", value:"Jordan"},
	{ label:"Kazakhstan", value:"Kazakhstan"},
	{ label:"Kenya", value:"Kenya"},
	{ label:"Kiribati", value:"Kiribati"},
	{ label:"Korea, Democratic Peoples Republic of", value:"Korea, Democratic Peoples Republic of"},
	{ label:"Korea, Republic of", value:"Korea, Republic of"},
	{ label:"Kosovo", value:"Kosovo"},
	{ label:"Kuwait", value:"Kuwait"},
	{ label:"Kyrgyzstan", value:"Kyrgyzstan"},
	{ label:"Lao People's Democratic Republic", value:"Lao People's Democratic Republic"},
	{ label:"Latvia", value:"Latvia"},
	{ label:"Lebanon", value:"Lebanon"},
	{ label:"Lesotho", value:"Lesotho"},
	{ label:"Liberia", value:"Liberia"},
	{ label:"Libyan Arab Jamahiriya", value:"Libyan Arab Jamahiriya"},
	{ label:"Liechtenstein", value:"Liechtenstein"},
	{ label:"Lithuania", value:"Lithuania"},
	{ label:"Luxembourg", value:"Luxembourg"},
	{ label:"Macao", value:"Macao"},
	{ label:"Macedonia, the Former Yugoslav Republic of", value:"Macedonia, the Former Yugoslav Republic of"},
	{ label:"Madagascar", value:"Madagascar"},
	{ label:"Malawi", value:"Malawi"},
	{ label:"Malaysia", value:"Malaysia"},
	{ label:"Maldives", value:"Maldives"},
	{ label:"Mali", value:"Mali"},
	{ label:"Malta", value:"Malta"},
	{ label:"Marshall Islands", value:"Marshall Islands"},
	{ label:"Martinique", value:"Martinique"},
	{ label:"Mauritania", value:"Mauritania"},
	{ label:"Mauritius", value:"Mauritius"},
	{ label:"Mayotte", value:"Mayotte"},
	{ label:"Mexico", value:"Mexico"},
	{ label:"Micronesia, Federated States of", value:"Micronesia, Federated States of"},
	{ label:"Moldova, Republic of", value:"Moldova, Republic of"},
	{ label:"Monaco", value:"Monaco"},
	{ label:"Mongolia", value:"Mongolia"},
	{ label:"Montenegro", value:"Montenegro"},
	{ label:"Montserrat", value:"Montserrat"},
	{ label:"Morocco", value:"Morocco"},
	{ label:"Mozambique", value:"Mozambique"},
	{ label:"Myanmar", value:"Myanmar"},
	{ label:"Namibia", value:"Namibia"},
	{ label:"Nauru", value:"Nauru"},
	{ label:"Nepal", value:"Nepal"},
	{ label:"Netherlands", value:"Netherlands"},
	{ label:"Netherlands Antilles", value:"Netherlands Antilles"},
	{ label:"New Caledonia", value:"New Caledonia"},
	{ label:"New Zealand", value:"New Zealand"},
	{ label:"Nicaragua", value:"Nicaragua"},
	{ label:"Niger", value:"Niger"},
	{ label:"Nigeria", value:"Nigeria"},
	{ label:"Niue", value:"Niue"},
	{ label:"Norfolk Island", value:"Norfolk Island"},
	{ label:"Northern Mariana Islands", value:"Northern Mariana Islands"},
	{ label:"Norway", value:"Norway"},
	{ label:"Oman", value:"Oman"},
	{ label:"Pakistan", value:"Pakistan"},
	{ label:"Palau", value:"Palau"},
	{ label:"Palestinian Territory, Occupied", value:"Palestinian Territory, Occupied"},
	{ label:"Panama", value:"Panama"},
	{ label:"Papua New Guinea", value:"Papua New Guinea"},
	{ label:"Paraguay", value:"Paraguay"},
	{ label:"Peru", value:"Peru"},
	{ label:"Philippines", value:"Philippines"},
	{ label:"Pitcairn", value:"Pitcairn"},
	{ label:"Poland", value:"Poland"},
	{ label:"Portugal", value:"Portugal"},
	{ label:"Puerto Rico", value:"Puerto Rico"},
	{ label:"Qatar", value:"Qatar"},
	{ label:"Reunion", value:"Reunion"},
	{ label:"Romania", value:"Romania"},
	{ label:"Russian Federation", value:"Russian Federation"},
	{ label:"Rwanda", value:"Rwanda"},
	{ label:"Saint Barthelemy", value:"Saint Barthelemy"},
	{ label:"Saint Helena", value:"Saint Helena"},
	{ label:"Saint Kitts and Nevis", value:"Saint Kitts and Nevis"},
	{ label:"Saint Lucia", value:"Saint Lucia"},
	{ label:"Saint Martin", value:"Saint Martin"},
	{ label:"Saint Pierre and Miquelon", value:"Saint Pierre and Miquelon"},
	{ label:"Saint Vincent and the Grenadines", value:"Saint Vincent and the Grenadines"},
	{ label:"Samoa", value:"Samoa"},
	{ label:"San Marino", value:"San Marino"},
	{ label:"Sao Tome and Principe", value:"Sao Tome and Principe"},
	{ label:"Saudi Arabia", value:"Saudi Arabia"},
	{ label:"Senegal", value:"Senegal"},
	{ label:"Serbia", value:"Serbia"},
	{ label:"Serbia and Montenegro", value:"Serbia and Montenegro"},
	{ label:"Seychelles", value:"Seychelles"},
	{ label:"Sierra Leone", value:"Sierra Leone"},
	{ label:"Singapore", value:"Singapore"},
	{ label:"Sint Maarten", value:"Sint Maarten"},
	{ label:"Slovakia", value:"Slovakia"},
	{ label:"Slovenia", value:"Slovenia"},
	{ label:"Solomon Islands", value:"Solomon Islands"},
	{ label:"Somalia", value:"Somalia"},
	{ label:"South Africa", value:"South Africa"},
	{ label:"South Georgia and the South Sandwich Islands", value:"South Georgia and the South Sandwich Islands"},
	{ label:"South Sudan", value:"South Sudan"},
	{ label:"Spain", value:"Spain"},
	{ label:"Sri Lanka", value:"Sri Lanka"},
	{ label:"Sudan", value:"Sudan"},
	{ label:"Suriname", value:"Suriname"},
	{ label:"Svalbard and Jan Mayen", value:"Svalbard and Jan Mayen"},
	{ label:"Swaziland", value:"Swaziland"},
	{ label:"Sweden", value:"Sweden"},
	{ label:"Switzerland", value:"Switzerland"},
	{ label:"Syrian Arab Republic", value:"Syrian Arab Republic"},
	{ label:"Taiwan, Province of China", value:"Taiwan, Province of China"},
	{ label:"Tajikistan", value:"Tajikistan"},
	{ label:"Tanzania, United Republic of", value:"Tanzania, United Republic of"},
	{ label:"Thailand", value:"Thailand"},
	{ label:"Timor-Leste", value:"Timor-Leste"},
	{ label:"Togo", value:"Togo"},
	{ label:"Tokelau", value:"Tokelau"},
	{ label:"Tonga", value:"Tonga"},
	{ label:"Trinidad and Tobago", value:"Trinidad and Tobago"},
	{ label:"Tunisia", value:"Tunisia"},
	{ label:"Turkey", value:"Turkey"},
	{ label:"Turkmenistan", value:"Turkmenistan"},
	{ label:"Turks and Caicos Islands", value:"Turks and Caicos Islands"},
	{ label:"Tuvalu", value:"Tuvalu"},
	{ label:"Uganda", value:"Uganda"},
	{ label:"Ukraine", value:"Ukraine"},
	{ label:"United Arab Emirates", value:"United Arab Emirates"},
	{ label:"United Kingdom", value:"United Kingdom"},
	{ label:"United States", value:"United States"},
	{ label:"United States Minor Outlying Islands", value:"United States Minor Outlying Islands"},
	{ label:"Uruguay", value:"Uruguay"},
	{ label:"Uzbekistan", value:"Uzbekistan"},
	{ label:"Vanuatu", value:"Vanuatu"},
	{ label:"Venezuela", value:"Venezuela"},
	{ label:"Viet Nam", value:"Viet Nam"},
	{ label:"Virgin Islands, British", value:"Virgin Islands, British"},
	{ label:"Virgin Islands, U.s.", value:"Virgin Islands, U.s."},
	{ label:"Wallis and Futuna", value:"Wallis and Futuna"},
	{ label:"Western Sahara", value:"Western Sahara"},
	{ label:"Yemen", value:"Yemen"},
	{ label:"Zambia", value:"Zambia"},
	{ label:"Zimbabwe", value:"Zimbabwe"},

]


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


		if(data.applicantDetails.personalInfoUploadStatus == true){

			inputFields[0].name = data.applicantDetails.name;
			inputFields[0].dob = data.applicantDetails.dob;			
			inputFields[0].nationality = data.applicantDetails.nationality;
			inputFields[0].gender = data.applicantDetails.gender;
			inputFields[0].birthCategory = data.applicantDetails.birthCategory;
			inputFields[0].martialStatus = data.applicantDetails.martialStatus;
			inputFields[0].physicallyHandicapped = data.applicantDetails.physicallyHandicapped;
			inputFields[0].guardianOrSpouseName = data.applicantDetails.guardianOrSpouseName;
			
			contactDetails[0] = data.applicantDetails.contactDetails;
			// academicQual[0] = data.applicantDetails.academicQualification[0];
			const values=[...inputFields];
			setinputField(values);

			Object.keys(touched[0]).forEach(x => touched[0][x]=true);
			console.log(touched[0]);

		}
	})
// },300);	
};


	React.useEffect(() => {
		setUp();
	},[]);

////




    const handleChangeInput=(index,event)=>{
        console.log(index,event.target.name)
        const values=[...inputFields];
        values[index][event.target.name]=event.target.value
        setinputField(values);
    }


	const handleChangeInputContact=(index,event)=>{
        console.log(index,event.target.name)
        const values=[...contactDetails];
        values[index][event.target.name]=event.target.value
        setContactDetails(values);
        console.log(contactDetails);
    }

	const handleChangeInputAcademics=(index,event)=>{
        console.log(index,event.target.name)
        const values=[...academicQual];
        values[index][event.target.name]=event.target.value
        setAcademicQual(values);
        console.log(academicQual);
    }

	const handleAddFieldsAcads=()=>{
        setAcademicQual([...academicQual,{educationLevel:'',degree:'',schoolOrCollege:'',boardOrUniversity:'',yearOfPassing:'',percentageOrCgpa:'',outOf:''}])
    }

	const handleRemoveFieldsAcads=(index)=>{
        const values=[...academicQual];
        values.splice(index,1);
        setAcademicQual(values);
    }

	const handleChangeInputProfessional=(index,event)=>{ 
        console.log(index,event.target.name)
        const values=[...professionalExp];
        values[index][event.target.name]=event.target.value
        setProfessionalExp(values);
        console.log(professionalExp)
    }

	


	const handleAddFieldsProfessional=()=>{
        setProfessionalExp([...professionalExp,{experienceType:'',organization:'',positionHeld:'',fromDate:'',toDate:'',natureOfWork:'',isCurrentJob:'',experienceDuration:''}])
    }
    const handleRemoveFieldsProfessional=(index)=>{
        const values=[...professionalExp];
        values.splice(index,1);
        setProfessionalExp(values);
    }
	
	const validate = () => {
		const errors = {
			name:'',
			dob:'',
			nationality:'',
			gender:'',
			birthCategory:'',
			martialStatus:'',
			physicallyHandicapped:'',
			guardianOrSpouseName:'',
			address:'',
			state:'',
			pincode:'',
			email:'',
			mobileNo:''
		};
	
		if(touched[0].name && inputFields[0].name.length==0)
			errors.name = 'Please fill the box';
	
		if(touched[0].dob && inputFields[0].dob.length==0)
			errors.dob = 'Please fill the box';
		
		if(touched[0].nationality && inputFields[0].nationality.length==0)
			errors.nationality = 'Please fill the box';
	
		if(touched[0].gender && inputFields[0].gender.length==0)
			errors.gender = 'Please fill the box';
	
		if(touched[0].birthCategory && inputFields[0].birthCategory.length==0)
			errors.birthCategory = 'Please fill the box';
	
		if(touched[0].martialStatus && inputFields[0].martialStatus.length==0)
			errors.martialStatus = 'Please fill the box';
	
		if(touched[0].physicallyHandicapped && inputFields[0].physicallyHandicapped.length==0)
			errors.physicallyHandicapped = 'Please fill the box';
	
		if(touched[0].guardianOrSpouseName && inputFields[0].guardianOrSpouseName.length==0)
			errors.guardianOrSpouseName = 'Please fill the box';
	
		if(touched[0].address && contactDetails[0].address.length==0)
			errors.address = 'Please fill the box';
	
		if(touched[0].state && contactDetails[0].state.length==0)
			errors.state = 'Please fill the box';
	
		if(touched[0].pincode && contactDetails[0].pincode.length==0)
			errors.pincode = 'Please fill the box';
		
		const emailreg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
		if(touched[0].email && contactDetails[0].email.length==0)
			errors.email = 'Please fill the box';
		else if(touched[0].email && !emailreg.test(contactDetails[0].email))
            errors.email = 'Email format is wrong ';
	
		const mobileNoreg = /^\d{10}$/;
		if(touched[0].mobileNo && contactDetails[0].mobileNo.length==0)
			errors.mobileNo = 'Please fill the box';
		else if(touched[0].mobileNo && !mobileNoreg.test(contactDetails[0].mobileNo))
            errors.mobileNo = 'Phone Number should have 10 digits';
			
		return errors;
	}
		
	const errors = validate();
		
	
	


	    // ending handling file upload 
		const handleSubmit = (e) => {
			e.preventDefault();
			console.log(touched[0]);
			console.log(inputFields);
			console.log(contactDetails);
			console.log(academicQual);
			console.log(professionalExp);
			
			if(document.getElementById("basicInformationSubmit").innerHTML !==null){
            			document.getElementById("basicInformationSubmit").innerHTML = "Submitting..."
        		}
			
			if(Object.values(errors).every(x => x=='') && Object.values(inputFields[0]).every(x => x!='') && Object.values(contactDetails[0]).every(x => x!='')){
				// console.log(files);
				const address = "/backend/applicant/saveDetails/"+props.match.params.id;
				fetch(address,{
					method:"post",
					headers:{
						"Content-Type" : "application/json",
						'x-auth-token': localStorage.getItem('authToken'),
						'x-refresh-token': localStorage.getItem('refreshToken'),
						
					},
					body:JSON.stringify({
						name:inputFields[0].name,
						dob : inputFields[0].dob,
						nationality : inputFields[0].nationality,
						gender: inputFields[0].gender,
						birthCategory: inputFields[0].birthCategory,
						martialStatus: inputFields[0].martialStatus,
						physicallyHandicapped:inputFields[0].physicallyHandicapped,
						guardianOrSpouseName: inputFields[0].guardianOrSpouseName,

						contactDetails: {
							address: contactDetails[0].address,
							state: contactDetails[0].state,
							pincode: contactDetails[0].pincode,
							email: contactDetails[0].email,
							mobileNo: contactDetails[0].mobileNo,
					},  


					academicQualification : academicQual.map((fields)=>{
						const obj = {
							educationLevel:fields.educationLevel,
							degree : fields.degree,
							schoolOrCollege : fields.schoolOrCollege,
							boardOrUniversity : fields.boardOrUniversity,
							yearOfPassing:fields.yearOfPassing,
							percentageOrCgpa:fields.percentageOrCgpa,
							outOf : fields.outOf,
							currentStatus: fields.currentStatus,

						}
						return obj;
					}) ,

					professionalExperience : professionalExp.map((fields)=>{
						const obj = {
							experienceType:fields.experienceType ? fields.experienceType : null,
							organization : fields.organization ? fields.organization : null,
							positionHeld : fields.positionHeld ? fields.positionHeld : null,
							fromDate : fields.fromDate ? fields.fromDate : null,
							toDate:fields.toDate ? fields.toDate : null,
							natureOfWork:fields.natureOfWork ? fields.natureOfWork : null,
							isCurrentJob : fields.isCurrentJob ? fields.isCurrentJob : null,
							experienceDuration : fields.experienceDuration ? fields.experienceDuration : null,

						}
						return obj;
					}) ,
					
						
					})
				}).then(res=>{
					return res.json() 
				})
				.then(res=> {console.log(res);
					console.log(res.message);

					if(res.message == "LogIn Required"){
						alert("Invalid token or Token expired !! Redirecting to Login !!");
						window.location.href="/";
						return ;
					}


					if(res.message == "Something went wrong ! try again later"){
						if(document.getElementById("basicInformationSubmit").innerHTML !==null){
			             		   document.getElementById("basicInformationSubmit").innerHTML = "Submit"
			            		}
						alert("Please fill all the details !!");
					}else{
				window.alert('Basic Information Successfully Submitted !!');	
				window.location.href="/mtechstuprofile/"+props.match.params.id;
				}
				})
				.catch(err => {console.log(err);

					if(err.response.status == 350 ){
                
						alert("Invalid token or Token expired !! Redirecting to Login !!");
						window.location.href="/";
					}
				
				
				})
		
		
				console.log("success saving details ");
			}else if(!Object.values(inputFields[0]).every(x => x!='') || !Object.values(contactDetails[0]).every(x => x!='')){
				alert("Please keep all the boxes filled.");
			}else {
				alert("Please resolve all the errors.");
			}
		}


    return (
        <div className="container">
			<div className="name">
            <button className="mtech_btn" onClick ={()=>{window.location.href = "/mtechstuprofile/"+props.match.params.id}} style={{background:'Salmon',color:"black"}}>Go to Home</button>
            </div>
			{/* <div className="name">
            <button className="mtech_btn" onClick ={()=>editapplication()}>Load Previous Data</button>
            </div> */}
            <div className="row">
               
                {inputFields.map((inputField,index)=>(
                    <div className="p-5 si_div" key={index}>
                        <h1 className="text-center si_subhead">Student Information</h1>
						<p style={{marginBottom:"5%",textAlign:"center"}}>* After editing, please fill the Academic Qualifications and Work Experience before submitting.</p>
                        <div className="row">
                            <div className="col-sm-6 text-center">
                                <Label required>Name of the Applicant:</Label>
                                <TextField className="textfield" name="name" 
								value={inputField.name}	onBlur={handleBlur(index,"name")}			
								variant="filled" helperText={errors.name} error={Boolean(errors.name)} onChange={event=>handleChangeInput(index,event)} ></TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                            <Label required>Date of Birth: </Label>
                                <TextField className="textfield" name="dob" type="date" onBlur={handleBlur(index,"dob")} value={inputField.dob} variant="filled" helperText={errors.dob} error={Boolean(errors.dob)} onChange={event=>handleChangeInput(index,event)}></TextField>
                            </div>
                            
                        </div>
                        <div className="row mt-5">
                        <div className="col-sm-6 text-center">
                            <Label required>Nationality:</Label>
                                <TextField className="textfield" select name="nationality" onBlur={handleBlur(index,"nationality")} value={inputField.nationality} variant="filled" helperText={errors.nationality} error={Boolean(errors.nationality)} onChange={event=>handleChangeInput(index,event)}>
                                {nationoptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                            <Label required>Gender:</Label>
                                <TextField className="textfield" select name="gender" onBlur={handleBlur(index,"gender")} value={inputField.gender} variant="filled" helperText={errors.gender} error={Boolean(errors.gender)} onChange={event=>handleChangeInput(index,event)}>
                                {genderOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                        </div>
                        <div className="row mt-5">
                            
                            <div className="col-sm-6 text-center">
                            <Label required>Birth Category :</Label>
							<TextField className="textfield" select name="birthCategory" onBlur={handleBlur(index,"birthCategory")} value={inputField.birthCategory} variant="filled" helperText={errors.birthCategory} error={Boolean(errors.birthCategory)} onChange={event=>handleChangeInput(index,event)}>
                                {categoryOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>                            
								</div>
                            <div className="col-sm-6 text-center">
                            <Label required>Category:(Physically Handicapped)</Label>
                               
                            <TextField className="textfield" select name="physicallyHandicapped" onBlur={handleBlur(index,"physicallyHandicapped")} value={inputField.physicallyHandicapped} variant="filled" helperText={errors.physicallyHandicapped} error={Boolean(errors.physicallyHandicapped)} onChange={event=>handleChangeInput(index,event)}>
                                {handiOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                        </div>
                        <div className="row mt-5">
                            
                            <div className="col-sm-6 text-center">
                            <Label required>Marital Status :</Label>
                                <TextField className="textfield" select name="martialStatus" onBlur={handleBlur(index,"martialStatus")} value={inputField.martialStatus} variant="filled" helperText={errors.martialStatus} error={Boolean(errors.martialStatus)} onChange={event=>handleChangeInput(index,event)}>
								{martialStatusOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
								</TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                            <Label required>Father's/Spouse Name :</Label>
                                <TextField className="textfield" name="guardianOrSpouseName" onBlur={handleBlur(index,"guardianOrSpouseName")} value={inputField.guardianOrSpouseName} variant="filled" helperText={errors.guardianOrSpouseName} error={Boolean(errors.guardianOrSpouseName)} onChange={event=>handleChangeInput(index,event)}></TextField>
                            </div>
                           
                        
                        </div>
                        <div className="row mt-5 px-5 mx-auto">
                        </div>
                    </div>
                ))}
                      <hr/>
                    <ContactDetails handleChangeInput={handleChangeInputContact} inputFields={contactDetails} errors={errors} handleBlur={handleBlur}/>
                
            </div>
            
            <div className="row text-center">
                <div className="col-md-12 py-5"><br/> 
                    <Academics handleChangeInput={handleChangeInputAcademics} inputFields={academicQual} handleAddFields={handleAddFieldsAcads} handleRemoveFields={handleRemoveFieldsAcads}/>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-12 py-5"><br/>
                    <Professional handleChangeInput={handleChangeInputProfessional}  inputFields={professionalExp} handleAddFields={handleAddFieldsProfessional} handleRemoveFields={handleRemoveFieldsProfessional}/>
                </div>
            </div>


			<div className="col-md-12">
                          <br/>
                        {/* <Upload onSuccess={onSuccess} onFail={onFail} files ={files}/> */}
                       </div>
            
            <div className="declaration">
                <br/>
                <button onClick={handleSubmit} id="basicInformationSubmit" >Submit</button>
            </div>
        </div>
    )
}
