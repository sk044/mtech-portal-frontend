import React, {Component} from 'react'
import { Card, Form, Button} from 'semantic-ui-react'
import './Login.css';
import LoginAsStudent from './LoginAsStudent/LoginAsStudent';
import LoginAsEmployer from './LoginAsEmp/LoginAsEmployer'

import logo from './logo.png';

class Signup extends Component{ 
    constructor(props){
        super(props);
        this.state = {
          isEmployer: false,
          isStudent: true,
          sButtonActive:true,
          eButtonActive: false
        };
        this.displaycomp = this.displaycomp.bind(this);
        this.toggleToEmployer = this.toggleToEmployer.bind(this);
        this.toggleToStudent = this.toggleToStudent.bind(this);
        console.log(this.state)
      }

    toggleToStudent(){
        this.setState({
            isStudent:true,
            isEmployer:false,
            sButtonActive:true,
            eButtonActive:false,
        })
        // console.log(this.state)
    }

    toggleToEmployer(){
        this.setState({
            isStudent:false,
            isEmployer:true,
            eButtonActive: true,
            sButtonActive:false
        })
        // console.log(this.state)
    }

//   Below is the function for switching between the logn/signup form for students or employers
    displaycomp = () => {
        let isStudent = this.state.isStudent;
        let isEmployer = this.state.isEmployer;
        if(isStudent=== true && isEmployer===false){
            return <LoginAsStudent/>
        }
        else if(isStudent===false && isEmployer=== true){
            return <LoginAsEmployer value={this.states}/>
            }
        }
        
    render(){
    return(
    <div>
        {/* <NavigationBar a={this.toggleToEmployer} value={this.state} /> */}
        <div className="text-center Body">
            <div className="container text-center">
                <div className="col-12 col-md-9 text-center LoginFormDiv">
                    <div className="row">
                        <div className="col-md-4 p-0 padding_0">
                            <div className="text-center loginsignup">
                                <img src={logo} alt="image" className="center logo_form"></img>
                                <h1 style={{marginTop:"50px"}}>IIT Patna</h1>
                                
                            </div>
                        </div>
                        
                        <div className="col-md-8 back_form">
                            <div centered  fluid className="LoginFormCard ">
                                <Form size='big' className="LoginForm">
                                    <div className="LoginPageButtonDiv">
                                    <Button.Group size='large' className="mb-5 StudentOrEmployerTogggle">
                                        <Button onClick={this.toggleToStudent} className={this.state.sButtonActive=== true ? 'activeClass':'normalClass'}>Candidate</Button>
                                        
                                        <Button onClick={this.toggleToEmployer} className={this.state.eButtonActive === true ? 'activeClass':'normalClass'}>Admin</Button>
                                    </Button.Group>
                                    {this.displaycomp()}
                                    </div>
                                </Form>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
            
        </div>
    </div>
)}}
export default Signup
