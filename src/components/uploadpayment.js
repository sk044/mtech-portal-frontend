import React, { Component } from 'react';
import axios from 'axios';

export default class UploadPayment extends Component {

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

        var formData = new FormData();
        for (const key of Object.keys(this.state.documentFiles)) {
            formData.append('documentFiles', this.state.documentFiles[key])
        }
        axios.patch('https://iitp-mtech-portal-backend.herokuapp.com/backend/applicant/paymentReceiptUpload/'+this.props.match.params.id , formData, {
        }).then(res => {
            console.log(res.data)
        }).then(res=> {console.log(res);
            window.alert('Uploading ...');
			window.location.href="https://iitp-mtechportal.herokuapp.com//mtechstuprofile/"+this.props.match.params.id;
			})
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
              <div className="name">
            <button className="mtech_btn" onClick ={()=>{window.location.href = "https://iitp-mtechportal.herokuapp.com//mtechstuprofile/"+this.props.match.params.id}} style={{background:'Salmon',color:"black"}}>Go to Home</button>
            </div>
            <div className="row text-center">
                <div className="col-md-12">
        <h1>Upload the following Documents</h1>
        <hr></hr>
        
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group upload_form ">
                    <label>Payment Recipt</label>
                        <div className="form-group">
                            <input type="file" name="documentFiles" onChange={this.onFileChange} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
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