import React,{useState} from 'react'
import Label from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'
export default function GateExamInfo(props) {

    const PaperCodeOptions=[
        {label:"Aerospace Engineering (AE)", value:"Aerospace Engineering (AE)"},
        {label:"Agricultural Engineering (AG)", value:"Agricultural Engineering (AG)"},
        {label:"Architecture and Planning (AR)", value:"Architecture and Planning (AR)"},
        {label:"Biomedical (BM)", value:"Biomedical (BM)"},
        {label:"Biotechnology (BT)", value:"Biotechnology (BT)"},
        {label:"Civil Engineering (CE)", value:"Civil Engineering (CE)"},
        {label:"Chemical Engineering (CH)", value:"Chemical Engineering (CH)"},
        {label:"Computer Science and Information Technology (CS)", value:"Computer Science and Information Technology (CS)"},
        {label:"Chemistry (CY)", value:"Chemistry (CY)"},
        {label:"Electronics and Communication Engineering (EC)", value:"Electronics and Communication Engineering (EC)"},
        {label:"Electrical Engineering (EE)", value:"Electrical Engineering (EE)"},
        {label:"Environmental Science and Engineering (ES)", value:"Environmental Science and Engineering (ES)"},
        {label:"Ecology and Evolution (EY)", value:"Ecology and Evolution (EY)"},
        {label:"Geology and Geophysics (GG)", value:"Geology and Geophysics (GG)"},
        {label:"Instrumentation Engineering (IN)", value:"Instrumentation Engineering (IN)"},
        {label:"Mathematics (MA)", value:"Mathematics (MA)"},
        {label:"Mechanical Engineering (ME)", value:"Mechanical Engineering (ME)"},
        {label:"Mining Engineering (MN)", value:"Mining Engineering (MN)"},
        {label:"Metallurgical Engineering (MT)", value:"Metallurgical Engineering (MT)"},
        {label:"Petroleum Engineering (PE)", value:"Petroleum Engineering (PE)"},
        {label:"Physics (PH)", value:"Physics (PH)"},
        {label:"Production and Industrial Engineering (PI)", value:"Production and Industrial Engineering (PI)"},
        {label:"Textile Engineering and Fiber Science (TF)", value:"Textile Engineering and Fiber Science (TF)"},
        {label:"Engineering Sciences (XE)", value:"Engineering Sciences (XE)"},
        {label:"Life Sciences (XL)", value:"Life Sciences (XL)"},
        {label:"Humanities and Social Sciences (XH)", value:"Humanities and Social Sciences (XH)"},
        {label:"Statistics (ST)", value:"Statistics (ST)"},
                
            ]

    

    return (
        <div>
             <hr></hr>
             {props.inputFields.map((inputField,index)=>(
                 <div className="p-5 si_div" key={index}>
                        <h1>Gate exam info</h1>
                        <div className="row">
                            <div className="col-sm-6 text-center">
                                <Label>Registration No.</Label>
                                <TextField className="textfield" name="registrationNo" value={inputField.registrationNo} variant="filled" onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                                <Label>Gate Score out of 100</Label>
                                <TextField className="textfield" name="gateScore" value={inputField.gateScore} variant="filled" onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-sm-6 text-center">
                                <Label>Gate Paper Code</Label>
                                <TextField select className="textfield" name="gatePaperCode" value={inputField.gatePaperCode} variant="filled" onChange={event=>props.handleChangeInput(index,event)}>
                                {PaperCodeOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                                <Label>Gate Rank</Label>
                                <TextField className="textfield" name="gateRank" value={inputField.gateRank} variant="filled" onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col-sm-6 text-center">
                                <Label>Gate exam date</Label>
                                <TextField className="textfield" name="examDate" type="date" value={inputField.examDate} variant="filled" onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>

                            <div className="col-sm-6 text-center">
                                <Label>Valid Upto</Label>
                                <TextField className="textfield" name="validUpto" type="date" value={inputField.validUpto} variant="filled" onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                                <Label>Gate coap registration no.</Label>
                                <TextField className="textfield" name="coapRegistrationNo" value={inputField.coapRegistrationNo} variant="filled" onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            
                        </div>

                        <br/>
                        </div>
             ))}

        </div>
    )
}
