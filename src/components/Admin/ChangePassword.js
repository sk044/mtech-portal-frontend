import React, { useState } from 'react'
import logo from '../Login/logo.png'
import './AdminWindow.css';
import {Button} from "react-bootstrap";
export default function ChangePassword() {
    const [OldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [CnfPass , setCnfPass] = useState('');
    const handleSubmit=()=>{
        if(newPass.length < 8){

            alert("Password length less than 8");
            return;
        }
        if(CnfPass!=newPass){
            alert("New Password and confirm password are not matching");
            return ;
        }
    

        const address = "/backend/admin/reset-password/"
        fetch(address,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'PATCH',
              body : JSON.stringify({
                  oldPassword : OldPass ,
                  newPassword : newPass
              })               
        }).then(res => {
            if(res.ok)
            return res.json();
        }).then(data => {
            console.log(data);
            console.log("Password is reset");
            window.alert('Password is reset!!');
			// window.location.href="/admin/";
            
        }).catch(err=>{
            console.log(err)
        })
        

    }  
    return (
        <div>
            <div className="home">
                <div className="profile">
                    <div className="profile_inner">
                        <div className="profile_img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="name">
                            <h1>Welcome, Admin</h1>

                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="status">
                        <h4>Reset Your Password</h4>
                        <div className="status_details">
                            <div className="det stu_password">
                            <form action="" onSubmit = {handleSubmit}>
                                    <label htmlFor=""> Current Password <input type="Password" placeholder="Old Password" onChange = {(e)=>{setOldPass(e.target.value); console.log(OldPass)}}/></label>
                                    <label htmlFor=""> New Password <input type="Password" placeholder="New Password " onChange={(e)=>{setNewPass(e.target.value); console.log(newPass)}}/></label>
                                    <label htmlFor=""> Confirm New Password <input type="Password" placeholder="Confirm New Password" onChange = {(e)=>{setCnfPass(e.target.value); console.log(CnfPass)}}/></label>
                                    <span style={{fontSize: "10px"}}>Note: Minimum password length should be 8</span><br/>
                                    <Button role="submit" onClick={handleSubmit}>Submit</Button> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
