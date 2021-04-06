import React, { Component } from 'react';
import axios from 'axios';

export default class UploadProfilePic extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 

        this.state = {
            image: ''
        }
    }

    onFileChange(e) {
        this.setState({ image: e.target.files })
    }

    onSubmit(e) {
        e.preventDefault()
	
	if(document.getElementById("uploadProfilePic").innerHTML !==null){
            document.getElementById("uploadProfilePic").innerHTML = "Uploading..."
        }
        var formData = new FormData();
        for (const key of Object.keys(this.state.image)) {
            formData.append('image', this.state.image[key])
        }
        axios.post('/backend/applicant/profile/pic/'+this.props.match.params.id , formData, {

            headers: {
                'x-auth-token': localStorage.getItem('authToken'),
                'x-refresh-token': localStorage.getItem('refreshToken'),
            }

        }).then(res => {
            console.log(res.data)
        }).then(res=> {console.log(res);
            window.alert('Upload Successful !!');
			window.location.href="/mtechstuprofile/"+this.props.match.params.id;
			})
        .catch(err => {
            console.log(err);
            console.log(err.response.status);
            console.log(err.response.status);
	    if(document.getElementById("uploadProfilePic").innerHTML !==null){
                document.getElementById("uploadProfilePic").innerHTML = "Upload"
            }
                if(err.response.status == 422){
                    
                    alert("Only png/jpg/jpeg files allowed !! Try again !!");
                }
            
            }   )
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
                    <label>Upload Profile Photo</label>
                        <div className="form-group">
                            <input type="file" name="image" onChange={this.onFileChange} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit" id="uploadProfilePic">Upload</button>
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
