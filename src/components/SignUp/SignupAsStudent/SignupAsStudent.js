import React from 'react'
import { useHistory , Link } from 'react-router-dom';
import { Form, Input, Button, Select } from 'semantic-ui-react'
import '../Signup.css';
import logo from '../logo.png';
const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const SignupAsStudent = (props) => {
    const history = useHistory();

    const [firstName,setFirstName] = React.useState('');
    const [lastName,setLastName] = React.useState('');
    const [emailID,setEmailID] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [touched,setBlur]=React.useState([
        {firstName:false,lastName:false,emailID:false,password:false,phone:false}, 
    ])
    const [stumessage, setStuMessage] = React.useState('');
    const [signupStuSuccess, setSignupStuSuccess] = React.useState(false)

    const handleBlur=(field)=>(evt)=>{
        console.log(0,field)
        const values=[...touched];
        values[0][field]=true;
        setBlur(values);
        console.log("touched:",touched);
    }
    function firstNameChange(e){
        setFirstName(e.target.value)
        console.log(firstName)
    }
    function lastNameChange(e){
        setLastName(e.target.value)
        console.log(lastName)
    }
    function emailIDChange(e){
        setEmailID(e.target.value)
        console.log(emailID)
    }
    function passwordChange(e){
        setPassword(e.target.value) 
        console.log(password)
    }

    function phoneChange(e){
        setPhone(e.target.value)
        console.log(phone)
    }

    const validate = () => {
		const errors = {
            firstName: '',
            lastName: '',
			emailID:'',
            password: '',
            phone: '',
		};
	
        const passwordreg = /^.{8,}$/;
		if(touched[0].password && password.length==0)
			errors.password = 'Please fill the box';
        else if((touched[0].password || password.length!=0) && !passwordreg.test(password))
            errors.password = 'Password should have 8 or more characters';

        if(touched[0].firstName && firstName.length==0)
			errors.firstName = 'Please fill the box';

        if(touched[0].lastName && lastName.length==0)
			errors.lastName = 'Please fill the box';

        const phonereg = /^\d{10}$/;
        if(touched[0].phone && phone.length==0)
			errors.phone = 'Please fill the box';
        else if((touched[0].phone || phone.length!=0) && !phonereg.test(phone))
            errors.phone = 'Phone Number should have 10 digits';
		
		const emailIDreg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
		if(touched[0].emailID && emailID.length==0)
			errors.emailID = 'Please fill the box';
		else if((touched[0].emailID || emailID.length!=0) && !emailIDreg.test(emailID))
            errors.emailID = 'Email format is wrong ';
		
			
		return errors;
	}
		
	const errors = validate();

    const onSubmit = () => {
        console.log(firstName)
        console.log(lastName)
        console.log(emailID)
        console.log(password)
        console.log(phone)

        const errors = validate();
		if(Object.values(errors).every(x => x=='') && firstName.length!=0 && lastName.length!=0 && emailID.length!=0 && password.length!=0 && phone.length!=0){

            fetch('/backend/applicant/registration', {
                method: "post",
                headers: {
                    "Accept" : "application/json",
                    "Content-Type": "application/json", 
                    'x-auth-token': localStorage.getItem('authToken'),
                    'x-refresh-token': localStorage.getItem('refreshToken'),
                },
                body:JSON.stringify({
                    userName:emailID,
                    password:password,
                    name:`${firstName} ${lastName}`,
                    mobileNo:phone 
                })
            }).then(data => {
                console.log(data);         
                // console.log(data.status)
                if(data.status == 422){
                    alert("User with this emailID already exists or Password length is less than 8 or Phone No. should be exactly 10 digits !!")
                }else{
                    alert("Successfully Registered !!");
                    window.location.href="/";
                }
                }).catch(error => console.log(error))
        }else if(!firstName.length!=0 || !lastName.length!=0 || !emailID.length!=0 || !password.length!=0 || !phone.length!=0){
            alert("Please keep all the boxes filled.");
        }else {
            alert("Please resolve all the errors.");
        }
    }

 
    return(
        <div>
            <div className="text-center Body">
                   <div className="container text-center">
                       <div className="col-12 col-md-9 text-center  LoginFormDiv">
                           <div className="row">
                               <div className="col-md-4 p-0 padding_0" >
                                <div className="text-center .d-none loginsignup">
                                    <img src={logo} alt="image" className="center logo_form"></img>
                                    <h1 style={{marginTop:"50px"}}>IIT Patna</h1>
                                </div>
                               </div>
                               <div className="col-md-8 back_form signup_form">
                               <div centered raised fluid >
                                <Form onSubmit={onSubmit}>
                                    <h2>Candidate Signup</h2>
                                <div className="form_login">  
        <Form.Group widths='equal'>
            <Form.Field
                required
                id='form-input-control-first-name'
                control={Input}
                label='First name'
                className="form_label"
            >
                <Form.Input className="input_field" 
                    placeholder='First name' 
                    type="text"
                    value={firstName}
                    onBlur={handleBlur('firstName')}
                    onChange={firstNameChange}
                    error={!Boolean(errors.firstName) ? false : {
                        content: errors.firstName,
                        pointing: 'below'
                    }}
                    />
            </Form.Field>
            <Form.Field
                required
            id='form-input-control-last-name'
            control={Input}
            className="form_label"
            label='Last name'
            
            >
               <Form.Input className="input_field" 
               placeholder='Last name' 
               type="text"
               value={lastName}
               onBlur={handleBlur('lastName')}
                onChange={lastNameChange}
                error={!Boolean(errors.lastName) ? false : {
                    content: errors.lastName,
                    pointing: 'below'
                }}
               /> 
            </Form.Field>
            
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Field 
                className="form_label"
                required
                control={Input}
                label='Phone number'
                
            >
                <Form.Input className="input_field" 
                placeholder='10 digit mobile number' 
                type="number"
                value={phone}
                onBlur={handleBlur('phone')}
                onChange={phoneChange}
                error={!Boolean(errors.phone) ? false : {
                    content: errors.phone,
                    pointing: 'below'
                }}
                /> 
            </Form.Field>
        
            <Form.Field
            className="form_label"
            control={Select}
            options={genderOptions}
            label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
            placeholder='Gender'
            search
            searchInput={{ id: 'form-select-control-gender' }}
            />
            
            </Form.Group>
        <Form.Group widths='equal'>
            <Form.Field
                className="form_label"
                required
                id='form-input-control-email'
                control={Input}
                label='Email'
                placeholder='name@gmail.com'  
                
            >
                <Form.Input className="input_field" 
                    placeholder="name@gmail.com" 
                    type="email" 
                    onBlur={handleBlur('emailID')}
                    value={emailID}
                    error={!Boolean(errors.emailID) ? false : {
                        content: errors.emailID,
                        pointing: 'below'
                    }}
                    onChange={emailIDChange}>
                </Form.Input>
            </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Field
                required
                className="form_label"
                label='Password'
                control={Input}
            > 
            <Form.Input className="input_field" 
                placeholder='Must be more than 8 characters' 
                type='password'
                value={password}
                onBlur={handleBlur('password')}
                error={!Boolean(errors.password) ? false : {
                    content: errors.password,
                    pointing: 'below'
                }}
                onChange={passwordChange}>
            </Form.Input>
            </Form.Field>
        </Form.Group>
        <div>
        <Form.Field as={Button}
            
            className="mb-5 button_loginsignup"
            
            
        >Register
        </Form.Field> 
        <Link style={{fontSize:'12px'}} className="newuser" to='/'>Go to Login</Link>
        </div>
        </div>
                                    
                                </Form>
                                </div> 
                               </div>
                           </div>
                       </div>
                   </div>
                
            </div>
        </div>















    
)
}
export default SignupAsStudent
