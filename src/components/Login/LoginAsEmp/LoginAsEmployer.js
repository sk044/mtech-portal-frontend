import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react'
import '../Login.css';

const LoginAsEmployer = () => {
 
    const [emailID, setEmailID] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [touched,setBlur]=React.useState([
        {emailID:false,password:false}, 
    ])
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
 
    function emailIDChange(e){
        setEmailID(e.target.value)
        console.log(emailID)
    }
    function passwordChange(e){
        setPassword(e.target.value) 
        console.log(password)
    }

    const handleBlur=(field)=>(evt)=>{
        console.log(0,field)
        const values=[...touched];
        values[0][field]=true;
        setBlur(values);
        console.log("touched:",touched);
    }

    function handleClick(){ 
        global.header = true;
        sessionStorage.setItem('value', 'employer')
        console.log(sessionStorage.getItem('value'));
        window.open('/','_self')
        // console.log(global.header);
      } 

    const validate = () => {
		const errors = {
			emailID:'',
            password: '',
		};
	
		if(touched[0].password && password.length==0)
			errors.password = 'Please fill the box';
		
		const emailIDreg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
		if(touched[0].emailID && emailID.length==0)
			errors.emailID = 'Please fill the box';
		else if(touched[0].emailID && !emailIDreg.test(emailID))
            errors.emailID = 'Email format is wrong ';
		
			
		return errors;
	}
		
	const errors = validate();


    function OnSubmit(){ 
        console.log(emailID,password)

        if(Object.values(errors).every(x => x=='') && Object.values(touched[0]).every(x => x==true)){


            fetch('/backend/admin/login', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName:emailID,
                    password:password
                })

            }).then((res) => {
                localStorage.setItem('authToken',res.headers.get("x-auth-token"));
                localStorage.setItem('refreshToken',res.headers.get("x-refresh-token"));

                return res.json()
            })
                .then(data => {
                    console.log(data)
                    if (data.AuthErr) {
                        console.log(data.AuthErr)
                    } else {
                        localStorage.setItem("jwt", data.token)
                        localStorage.setItem("user", JSON.stringify(data.user)) 
                        // localStorage.setItem("firstname", data.user.firstname)
                        // console.log(data.user)
                        // console.log(data.user.name)
                        global.header = true;
                        if(data._id != undefined){
                            window.location.href="/admin/"+data._id;
                        }else{
                            alert("Wrong UserName or Password");
                        }
                        sessionStorage.setItem('value', 'employer')
                        console.log(sessionStorage.getItem('value'));
                        if(data.user.companyname){
                            window.open('/login','_self')
                            
                        }
                        else{
                            window.open('/createempprofile','_self') 
                        }
                    
                    }
                }).catch(err => {
                    console.log(err)
                })
        }else if(!Object.values(touched[0]).every(x => x==true)){
            alert('Please fill all the fields.')
        }else{
            alert('Please resolve all the errors.')
        }
        
    }
   
    
    console.log(errors);
  
        return(
            <div className="form_login login_margin">
                <Form.Group widths='equal'>
                    <Form.Field
                        className="form_label"
                        required
                        id='form-input-control-email'
                        control={Input}
                        label='Official Email'
                        >
                            <Form.Input  className="input_field" 
                                value={emailID} 
                                onBlur={handleBlur('emailID')}
                                onChange={(e) => setEmailID(e.target.value)}
                                placeholder='name@gmail.com'
                                error={!Boolean(errors.emailID) ? false : {
                                    content: errors.emailID,
                                    pointing: 'below'
                                }} 
                                type='email'>
                            </Form.Input>
                        </Form.Field>
                    
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        className="form_label"
                        required
                        label='Password'
                        control={Input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                        <Form.Input  className="input_field" 
                        placeholder='Must be more than 6 characters' 
                        type='password'
                        onBlur={handleBlur('password')}
                        value={password} 
                        error={!Boolean(errors.password) ? false : {
                            content: errors.password,
                            pointing: 'below'
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                        >
                        </Form.Input>
                    </Form.Field>
                </Form.Group>
                
                <div>
                    <Form.Field as={Button }
                        className="button_loginsignup"
                        onClick={OnSubmit}
                    >
                        Login
                        
                    </Form.Field>
                    {/* <Link style={{fontSize:'12px'}} className="newuser" to='/signup'>New User ? SignUp</Link> */}
                </div>
                <Link style={{fontSize:'12px'}} to="/user-reset-password">Forgot Password?</Link>
            </div>
        )
    
}
export default LoginAsEmployer
