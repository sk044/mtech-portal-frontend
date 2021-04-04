import React from 'react'
import logo from '../Login/logo.png'
import './StudentMyProfile.css';

export default function ChangePassword(props) {
    return (
        <div>
            <div className="home">
                <div className="profile">
                    <div className="profile_inner">
                        <div className="profile_img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="name">
                            <h1>Welcome , {!props.data?null:props.data.name}</h1>
                            {/* <h3>Applicant Id: <span>{!props.data?null:props.data._id}</span></h3> */}
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="status">
                        <h4>Reset Your Password</h4>
                        <div className="status_details">
                            <div className="det stu_password">
                                <form action="">
                                    <label htmlFor=""> Current Password <input type="Password" placeholder="Password"/></label>
                                    <label htmlFor=""> New Password <input type="Password" placeholder="Password"/></label>
                                    <label htmlFor=""> Confirm New Password <input type="Password" placeholder="Password"/></label>
                                    <input type="submit" className = "submit_btn" value="Submit"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
