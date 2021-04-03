import React,{useState} from 'react'
import Label from '@material-ui/core/InputLabel'
import './StudentApplication.css'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'
export default function ContactDetails(props) {

    
const stateOptions=[
{ label:'Other' ,value:"Other"},
{ label:'Andhra Pradesh' ,value:"Andhra Pradesh"},
{ label:'Andaman and Nicobar Islands' ,value:"Andaman and Nicobar Islands"},
{ label:'Arunachal Pradesh' ,value:"Arunachal Pradesh"},
{ label:'Assam' ,value:"Assam"},
{ label:'Bihar' ,value:"Bihar"},
{ label:'Chandigarh' ,value:"Chandigarh"},
{ label:'Chhattisgarh' ,value:"Chhattisgarh"},
{ label:'Dadar and Nagar Haveli' ,value:"Dadar and Nagar Haveli"},
{ label:'Daman and Diu' ,value:"Daman and Diu"},
{ label:'Delhi' ,value:"Delhi"},
{ label:'Lakshadweep' ,value:"Lakshadweep"},
{ label:'Puducherry' ,value:"Puducherry"},
{ label:'Goa' ,value:"Goa"},
{ label:'Gujarat' ,value:"Gujarat"},
{ label:'Haryana' ,value:"Haryana"},
{ label:'Himachal Pradesh' ,value:"Himachal Pradesh"},
{ label:'Jammu and Kashmir' ,value:"Jammu and Kashmir"},
{ label:'Jharkhand' ,value:"Jharkhand"},
{ label:'Karnataka' ,value:"Karnataka"},
{ label:'Kerala' ,value:"Kerala"},
{ label:'Madhya Pradesh' ,value:"Madhya Pradesh"},
{ label:'Maharashtra' ,value:"Maharashtra"},
{ label:'Manipur' ,value:"Manipur"},
{ label:'Meghalaya' ,value:"Meghalaya"},
{ label:'Mizoram' ,value:"Mizoram"},
{ label:'Nagaland' ,value:"Nagaland"},
{ label:'Odisha' ,value:"Odisha"},
{ label:'Punjab' ,value:"Punjab"},
{ label:'Rajasthan' ,value:"Rajasthan"},
{ label:'Sikkim' ,value:"Sikkim"},
{ label:'Tamil Nadu' ,value:"Tamil Nadu"},
{ label:'Telangana' ,value:"Telangana"},
{ label:'Tripura' ,value:"Tripura"},
{ label:'Uttar Pradesh' ,value:"Uttar Pradesh"},
{ label:'Uttarakhand' ,value:"Uttarakhand"},
{ label:'West Bengal' ,value:"West Bengal"},
    ]

    return (
        <div>
             {props.inputFields.map((inputField,index)=>(
            <div className="p-5 si_div" key={index}>
                <h1 className="text-center si_subhead">Contact Details</h1>
                <div className="row">
                            <div className="col-sm-6 text-center">
                                <Label>Address</Label>
                                <TextField className="textfield" name="address" value={inputField.address} variant="filled" onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                                <Label>State</Label>
                                <TextField className="textfield" select name="state" value={inputField.state} variant="filled" onChange={event=>props.handleChangeInput(index,event)}>
                                {stateOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))} 
                                </TextField>
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col-sm-6 text-center">
                            <Label>PinCode</Label>
                                <TextField className="textfield" name="pincode" value={inputField.pincode} variant="filled" onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                            <Label>Email Id</Label>
                                <TextField className="textfield" type="email" name="email"  value={inputField.email} variant="filled" onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                        </div>
                        <div className="row mt-5">
                            
                            <div className="col-sm-6 text-center">
                                <Label>Phone No.</Label>
                                <TextField className="textfield" name="mobileNo" value={inputField.mobileNo} variant="filled" onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                           
                        </div>
            </div>
             ))}
             <hr/>
        </div>
    )
}
