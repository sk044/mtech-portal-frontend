import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react'
import '../Login.css';

const LoginAsEmployer = () => {
 
    const [emailID, setEmailID] = React.useState('')
    const [password, setPassword] = React.useState('')
    function emailIDChange(e){
        setEmailID(e.target.value)
        console.log(emailID)
    }
    function passwordChange(e){
        setPassword(e.target.value) 
        console.log(password)
    }

    function handleClick(){ 
        global.header = true;
        sessionStorage.setItem('value', 'employer')
        console.log(sessionStorage.getItem('value'));
        window.open('/','_self')
        // console.log(global.header);
      } 

    function OnSubmit(){ 
        console.log(emailID,password)

        fetch('https://iitp-mtech-portal-backend.herokuapp.com/backend/admin/login', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName:emailID,
                password:password
            })

        }).then(res => res.json())
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
                    window.location.href="https://iitp-mtechportal.herokuapp.com//admin/"+data._id;
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
        
    }
   
    

  
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
                            <Input  className="input_field" 
                                value={emailID} 
                                onChange={(e) => setEmailID(e.target.value)}
                                placeholder='name@gmail.com' 
                                type='email'>
                            </Input>
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
                        <Input  className="input_field" 
                        placeholder='Must be more than 6 characters' 
                        type='password'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        >
                        </Input>
                    </Form.Field>
                </Form.Group>
                
                <div>
                    <Form.Field as={Button }
                        className="button_loginsignup"
                        onClick={OnSubmit}
                    >
                        Login
                        
                    </Form.Field>
                    <Link style={{fontSize:'12px'}} className="newuser" to='/signup'>New User ? SignUp</Link>
                </div>
                <Link style={{fontSize:'12px'}} to="/user-reset-password">Forgot Password?</Link>
            </div>
        )
    
}
export default LoginAsEmployer
