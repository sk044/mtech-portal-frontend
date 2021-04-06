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
        {label:"Not Applicable (NA)", value:"Not Applicable (NA)"},
            ]

    

    return (
        <div>
             <hr></hr>
             {props.inputFields.map((inputField,index)=>(
                 <div className="p-5 si_div" key={index}>
                        <h1>Gate exam info</h1>
                        <p>If you are applying the following category :<br/>
SPONSORED / PROJECT STAFF / PART-TIME category, then GATE score is not mandatory. So please fill the following info in the boxes below.</p>
                        <ol style={{marginBottom:"5%"}}>
                             <li> Registration No. (11 digits) : 10000000000 </li> 
                            <li> Gate Score out of 1000 : 0 </li> 
                            <li> Gate Rank : 0 </li> 
                            <li> Gate coap registration no. : COAP00000000 </li> 
                            <li> Gate Paper Code : Not Applicable (NA) </li> 
                            <li> Gate exam date : 01-01-1965 </li> 
                            <li> Valid Upto : 01-01-1965 </li>
                        </ol>
                        
                        <div className="row">
                            <div className="col-sm-6 text-center">
                                <Label>Registration No.<br/> <span style={{fontSize:"10px"}}>(If your gate registration number is CS20S61226031 then enter ONLY 20S61226031 here)</span> </Label>
                                <TextField className="textfield" name="registrationNo" onBlur={props.handleBlur(index,"registrationNo")} value={inputField.registrationNo} variant="filled" helperText={props.errors.registrationNo} error={Boolean(props.errors.registrationNo)} onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                                <Label>Gate Score out of 1000</Label>
                                <TextField className="textfield" name="gateScore" onBlur={props.handleBlur(index,"gateScore")} value={inputField.gateScore} variant="filled" helperText={props.errors.gateScore} error={Boolean(props.errors.gateScore)} onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-sm-6 text-center">
                                <Label>Gate Paper Code</Label>
                                <TextField select className="textfield" name="gatePaperCode" onBlur={props.handleBlur(index,"gatePaperCode")} value={inputField.gatePaperCode} variant="filled" helperText={props.errors.gatePaperCode} error={Boolean(props.errors.gatePaperCode)} onChange={event=>props.handleChangeInput(index,event)}>
                                {PaperCodeOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                                <Label>Gate Rank</Label>
                                <TextField className="textfield" name="gateRank" onBlur={props.handleBlur(index,"gateRank")} value={inputField.gateRank} variant="filled" helperText={props.errors.gateRank} error={Boolean(props.errors.gateRank)} onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col-sm-6 text-center">
                                <Label>Gate Valid From</Label>
                                <TextField className="textfield" name="examDate" type="date" onBlur={props.handleBlur(index,"examDate")} value={inputField.examDate} variant="filled" helperText={props.errors.examDate} error={Boolean(props.errors.examDate)} onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>

                            <div className="col-sm-6 text-center">
                                <Label>Valid Upto</Label>
                                <TextField className="textfield" name="validUpto" type="date" onBlur={props.handleBlur(index,"validUpto")} value={inputField.validUpto} variant="filled" helperText={props.errors.validUpto} error={Boolean(props.errors.validUpto)} onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            <div className="col-sm-6 text-center">
                                <Label>COAP registration no.</Label>
                                <TextField className="textfield" name="coapRegistrationNo" placeholder="Format: COAP12345678" onBlur={props.handleBlur(index,"coapRegistrationNo")} value={inputField.coapRegistrationNo} variant="filled" helperText={props.errors.coapRegistrationNo} error={Boolean(props.errors.coapRegistrationNo)} onChange={event=>props.handleChangeInput(index,event)}></TextField>
                            </div>
                            
                        </div>

                        <br/>
                        </div>
             ))}

        </div>
    )
}
