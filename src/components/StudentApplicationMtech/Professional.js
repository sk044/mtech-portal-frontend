import React,{useState}  from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

const useStyles=makeStyles((theme)=>({
    root:{
       '& .MuiTextField-root':{
           margin:theme.spacing(1),
       }
    }
}))




export default function Professional(props) {
    const classes=useStyles();
    

    function durationCalc(fromDate , toDate){
       
    var year1 = Number(fromDate.split('-')[0]);
    var year2 = Number(toDate.split('-')[0]);
    var month1 = Number(fromDate.split('-')[1]);
    var month2 = Number(toDate.split('-')[1]);


    var diff = year2 - year1;
    diff = diff * 12;
    diff = diff + month2;
    diff = diff - month1;

    console.log(diff)
    return diff;



}

    
    
    const typeOptions=[
        {label:'teaching',value:'teaching'},
        {label:'research',value:'research'},
        {label:'industry',value:'industry'},
        {label:'others',value:'others'}
    ]
    const currentOptions=[
        {label:'Yes',value: true},
        {label:'No',value: false}
    ]
    return (
        <Container>
            <h1 className="my-5">Work Experience</h1>
            
            <form className={classes.root}>
                {props.inputFields.map((inputField,index)=>(
                    <div key={index}>
                        <TextField
                        select
                        className="textfield2"
                        name="experienceType"
                        label="Work Experience Type"
                        value={inputField.experienceType}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>
                             {typeOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                        </TextField>
                        <TextField
                        name="organization"
                        label="Organization Name"
                        value={inputField.organization}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>

                        </TextField>
                        <TextField
                        name="positionHeld"
                        label="Position"
                        value={inputField.positionHeld}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>

                        </TextField>
                        <TextField
                        name="fromDate"
                        label="From Date"
                        type="date"
                        value={inputField.fromDate}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>

                        </TextField>
                        <br/>    
                        <TextField
                        name="toDate"
                        label="To Date"
                        type="date"
                        value={inputField.toDate}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}                        
                        >
                                               
                    </TextField>

                    <TextField
                        name="experienceDuration"
                        label="Experience Duration (Click)"
                        value={durationCalc(inputField.fromDate , inputField.toDate)+ " " + "Months"}
                        variant="filled"                     
                        onClick={event=>props.handleChangeInput(index,event)}
                        ></TextField>


                     <TextField
                        name="natureOfWork"
                        label="Nature of Work"
                        value={inputField.natureOfWork}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>

                        </TextField>
                        <TextField
                        select
                        className="textfield2"
                        name="isCurrentJob"
                        label="Current Job"
                        value={inputField.isCurrentJob}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>
                            {currentOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                        </TextField>
                        <br/>
                        { (index >0) &&
                        <IconButton onClick={()=>props.handleRemoveFields(index)}>
                            <RemoveIcon/>
                        </IconButton>
                        }
                        { (index <4) &&
                        <IconButton onClick={()=>props.handleAddFields()}>
                            <AddIcon/>
                        </IconButton>
                        }
                    </div>
                ))}

            <p style={{fontSize:"13px"}}>Note: If you are editing the form , Please fill this section again.</p>
            </form>
            <hr/> 
        </Container>
    )
}