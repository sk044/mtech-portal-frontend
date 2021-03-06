import React, { Component } from 'react';
import axios from 'axios';

export default class UploadGate extends Component {

    constructor(props) {
        super(props);
 
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            documentFiles: ''
        }
    }

    onFileChange(e) {
        this.setState({ documentFiles: e.target.files })
    }

    onSubmit(e) {
        e.preventDefault()
	if(document.getElementById("gateScoreCardUpload").innerHTML !==null){
            document.getElementById("gateScoreCardUpload").innerHTML = "Uploading..."
        }
        
        var formData = new FormData();
        for (const key of Object.keys(this.state.documentFiles)) {
            formData.append('documentFiles', this.state.documentFiles[key])
        }
        
        axios.post('/backend/applicant/gateScoreCardUpload/'+this.props.match.params.id , formData, {

            headers: {
                'x-auth-token': localStorage.getItem('authToken'),
                'x-refresh-token': localStorage.getItem('refreshToken'),
            }

            
 
        }).then(res=> {

            if(res.message == "LogIn Required"){
                alert("Invalid token or Token expired !! Redirecting to Login !!");
                window.location.href="/";
                return ;
            }

            console.log("hello");
            window.alert('Upload Successful !!');
			window.location.href="/mtechstuprofile/"+this.props.match.params.id;

        })
        .catch(err => {
        console.log(err);
        console.log(err.response.status);
	    if(document.getElementById("gateScoreCardUpload").innerHTML !==null){
                document.getElementById("gateScoreCardUpload").innerHTML = "Upload"
            }
            if(err.response.status == 500 || err.response.status == 422){
                
                alert("Only PDF files allowed !! Try again !!");
            }
            if(err.response.status == 350 ){
                
                alert("Invalid token or Token expired !! Redirecting to Login !!");
                window.location.href="/";
            }
        
        })
    }


    render() {
        return (
            <div className="container">
              <div className="name">
            <button className="mtech_btn" onClick ={()=>{window.location.href = "/mtechstuprofile/"+this.props.match.params.id}} style={{background:'Salmon',color:"black"}}>Go to Home</button>
            </div>
            <div className="row text-center">
                <div className="col-md-12">
        <h1>Upload the following Documents</h1>
        <hr></hr>
        
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group upload_form ">
                    <label>Gate Score Card <light>(Upload pdf only)</light></label>
                        <div className="form-group">
                            <input type="file" name="documentFiles" onChange={this.onFileChange} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit" id="gateScoreCardUpload">Upload</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
