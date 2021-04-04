import React from 'react'
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import LogIn from "./components/Login/Login"
import Landing from './components/Landing/Landing';
import Admin from './components/Admin/AdminWindow';
import SignupAsStudent from './components/SignUp/SignupAsStudent/SignupAsStudent';
import SignupAsEmployer from './components/SignUp/SignUpAsEmp/SignupAsEmployer';
import studentinformationMtech from './components/StudentApplicationMtech/StudentinformationMtech';
import mtechstuprofile from './components/MtechStudentMyProfile/StudentMyProfile';
import applymore from './components/Applymore';
import UploadGate from './components/uploadgate';
import UploadPayment from './components/uploadpayment';
import userResetPassword from './components/Login/LoginAsStudent/userResetPassword'
import resetPassword from './components/Login/LoginAsStudent/resetPassword'
const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        
        <Switch>
          {/* <Route exact path="/" component={Landing}/> */}
           <Route exact path="/" component={LogIn}/>
            <Route exact path="/signup" component={SignupAsStudent} />
            <Route exact path="/signstu" component={SignupAsStudent}/>
            <Route exact path="/signemp" component={SignupAsEmployer}/>
            <Route exact path="/admin/:id" component={Admin}/>
            <Route exact path="/mtechstuinfo/:id" component={studentinformationMtech}/>
            <Route exact path="/mtechstuprofile/:id" component={mtechstuprofile}/>
            <Route exact path="/applymore/:id" component={applymore}/>
            <Route exact path="/uploadgate/:id" component={UploadGate}/>
            <Route exact path="/uploadpayment/:id" component={UploadPayment}/>
            <Route path="/user-reset-password" component = {userResetPassword} />
            <Route path="/resetPassword/:token" component = {resetPassword} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

  // "proxy": "https://iitp-mtech-portal-backend.herokuapp.com",proxy for package.json

