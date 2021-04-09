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
export default function Academics(props) {
    const classes=useStyles();
    
    const degreeOptions=[
        {label:"10th/equivalent",value:"10th/equivalent"},
        {label:"inter/equivalent",value:"inter/equivalent"},
        {label:"UG",value:"UG"},
        {label:"PG",value:"PG"},
        
    ]

    const tenthOptions=[
        {label:"10th/equivalent",value:"10th/equivalent"},
    ]

    const interOptions=[
        {label:"inter/equivalent",value:"inter/equivalent"},
    ]

    const ugOptions=[
        {label:"Associate Member of the Institution Engineers India(AMIE)",value:"Associate Member of the Institution Engineers India(AMIE)"},
        {label:"B.Arch (B.Arch)",value:"B.Arch (B.Arch)"},
        {label:"B.SC(Engg.) in Mechanical Engg.",value:"B.SC(Engg.) in Mechanical Engg."},
        {label:"B.Tech  ENVIRONMENTAL ENGINEERING",value:"B.Tech  ENVIRONMENTAL ENGINEERING"},
        {label:"B.Tech AEROSPACE ENGINEERING",value:"B.Tech AEROSPACE ENGINEERING"},
        {label:"B.Tech APPLIED ELECTRONICS AND INSTRUMENTATION",value:"B.Tech in APPLIED ELECTRONICS AND INSTRUMENTATION"},
        {label:"B.Tech Biotechnology (B.Tech Bio)",value:"B.Tech Biotechnology (B.Tech Bio)"},
        {label:"B.Tech Ceramic Technology",value:"B.Tech Ceramic Technology"},
        {label:"B.Tech Chemical Engineering  (BTECH_CH)",value:"B.Tech Chemical Engineering  (BTECH_CH)"},
        {label:"B.Tech Civil Engineering  (BTECH_CE)",value:"B.Tech Civil Engineering  (BTECH_CE)"},
        {label:"B.Tech Computer Science and Engineering (BTECH_CSE)",value:"B.Tech Computer Science and Engineering (BTECH_CSE)"},
        {label:"B.Tech CONSTRUCTION ENGINEERING",value:"B.Tech in CONSTRUCTION ENGINEERING"},
        {label:"B.Tech Electrical and Electronics Engineering (BTECH_EEE)",value:"B.Tech Electrical and Electronics Engineering (BTECH_EEE)"},
        {label:"B.Tech Electrical Engineering (BTECH_EE )",value:"B.Tech Electrical Engineering (BTECH_EE )"},
        {label:"B.Tech Electronics & Communication Engineering (BTECH_ECE)",value:"B.Tech Electronics & Communication Engineering (BTECH_ECE)"},
        {label:"B.Tech Electronics and Computer engineering",value:"B. Tech Electronics and Computer engineering"},
        {label:"B.Tech ELECTRONICS AND TELECOMMUNICATION",value:"B.Tech ELECTRONICS AND TELECOMMUNICATION"},
        {label:"B.Tech Engineering Physics (BTECH_EP)",value:"B.Tech Engineering Physics (BTECH_EP)"},
        {label:"B.Tech Engineering Science (BTECH_ES)",value:"B.Tech Engineering Science (BTECH_ES)"},
        {label:"B.Tech Industrial and Systems Engineering (ISE)",value:"B.Tech Industrial and Systems Engineering (ISE)"},
        {label:"B.Tech Information and Communication Technology with minor in Computational Science",value:"B.Tech Information and Communication Technology with minor in Computational Science"},
        {label:"B.Tech Information Science and Engineering",value:"B.Tech Information Science and Engineering"},
        {label:"B.Tech Information Technology (BTECH_IT)",value:"B. Tech Information Technology (BTECH_IT)"},
        {label:"B.Tech Mechanical Engineering (BTECH_ME)",value:"B.Tech Mechanical Engineering (BTECH_ME)"},
        {label:"B.Tech Mechatronics Engineering",value:"B.Tech Mechatronics Engineering"},
        {label:"B.Tech Metallurgical and Materials Engineering",value:"B.Tech Metallurgical and Materials Engineering"},
        {label:"B.Tech Petrochemical Engineering (BTECH_PE )",value:"B.Tech Petrochemical Engineering (BTECH_PE )"},
        {label:"B.Tech Production Engineering",value:"B.Tech Production Engineering"},
        {label:"B.Tech_Material science and Engineering (BTECH_MSE)",value:"B.Tech_Material science and Engineering (BTECH_MSE)"},
        {label:"Bachelor of Arts (BA)",value:"Bachelor of Arts (BA)"},
        {label:"Bachelor of Commerce  (BCOM)",value:"Bachelor of Commerce  (BCOM)"},
        {label:"Bachelor of Computer Applications (BCA)",value:"Bachelor of Computer Applications (BCA)"},
        {label:"Bachelor of Dental Surgery (BDS)",value:"Bachelor of Dental Surgery (BDS)"},
        {label:"Bachelor of Design (B.Des)",value:"Bachelor of Design (B.Des)"},
        {label:"Bachelor of EDUCATION (B.Ed.)",value:"Bachelor of EDUCATION (B.Ed.)"},
        {label:"Bachelor of Engineering (BE)",value:"Bachelor of Engineering (BE)"},
        {label:"Bachelor of mass communication (BMC)",value:"Bachelor of mass communication (BMC)"},
        {label:"Bachelor Of Mass Media (BMM)",value:"Bachelor Of Mass Media (BMM)"},
        {label:"Bachelor of Mgmt Studies (BMS)",value:"Bachelor of Mgmt Studies (BMS)"},
        {label:"Bachelor of Science (BSC)",value:"Bachelor of Science (BSC)"},
        {label:"Bachelor of Technology (BTECH)",value:"Bachelor of Technology (BTECH)"},
        {label:"Bachelor of Veterinary Science (BVSc)",value:"Bachelor of Veterinary Science (BVSc)"},
        {label:"BE AEROSPACE ENGINEERING",value:"BE AEROSPACE ENGINEERING"},
        {label:"BE APPLIED ELECTRONICS AND INSTRUMENTATION",value:"BE in APPLIED ELECTRONICS AND INSTRUMENTATION"},
        {label:"BE Biotechnology (BE Bio)",value:"BE Biotechnology (BE Bio)"},
        {label:"BE Ceramic Technology",value:"BE Ceramic Technology"},
        {label:"BE Chemical Engineering (BE_CH )",value:"BE Chemical Engineering (BE_CH )"},
        {label:"BE Civil Engineering (BE_CE)",value:"BE Civil Engineering (BE_CE)"},
        {label:"BE Computer Science and Engineering (BE_CSE )",value:"BE Computer Science and Engineering (BE_CSE )"},
        {label:"BE CONSTRUCTION ENGINEERING",value:"BE in CONSTRUCTION ENGINEERING"},
        {label:"BE Electrical and Electronics Engineering (BE_EEE )",value:"BE Electrical and Electronics Engineering (BE_EEE )"},
        {label:"BE Electrical Engineering (BE_EE )",value:"BE Electrical Engineering (BE_EE )"},
        {label:"BE Electronics & Communication Engineering (BE_ECE)",value:"BE Electronics & Communication Engineering (BE_ECE)"},
        {label:"BE Electronics and Computer engineering",value:"BE Electronics and Computer engineering"},
        {label:"BE ELECTRONICS AND TELECOMMUNICATION",value:"BE ELECTRONICS AND TELECOMMUNICATION"},
        {label:"BE Engineering Physics (BE_EP)",value:"BE Engineering Physics (BE_EP)"},
        {label:"BE Engineering Science (BE_ES)",value:"BE Engineering Science (BE_ES)"},
        {label:"BE ENVIRONMENTAL ENGINEERING",value:"BE  ENVIRONMENTAL ENGINEERING"},
        {label:"BE Industrial and Systems Engineering (ISE)",value:"BE Industrial and Systems Engineering (ISE)"},
        {label:"BE Information and Communication Technology with minor in Computational Science",value:"BE Information and Communication Technology with minor in Computational Science"},
        {label:"BE Information Science and Engineering",value:"BE Information Science and Engineering"},
        {label:"BE Information Technology (BTECH_IT)",value:"B. E. Information Technology (BTECH_IT)"},
        {label:"BE Material science and Engineering (BE_MSE )",value:"BE_Material science and Engineering (BE_MSE )"},
        {label:"BE Mechanical Engineering (BE_ME)",value:"BE Mechanical Engineering (BE_ME)"},
        {label:"BE Mechatronics Engineering",value:"BE Mechatronics Engineering"},    
        {label:"BE Metallurgical and Materials Engineering",value:"BE Metallurgical and Materials Engineering"},
        {label:"BE Petrochemical Engineering (BE_PE )",value:"BE Petrochemical Engineering (BE_PE )"},
        {label:"BE Production Engineering",value:"BE Production Engineering"},
        {label:"BFA (Bachelor of Fine Art)",value:"BFA (Bachelor of Fine Art)"},
        {label:"Degree in Graphics Design (GDArt )",value:"Degree in Graphics Design (GDArt )"},
        {label:"Dual Degree (B.Sc+M.Sc.)",value:"Dual Degree (B.Sc+M.Sc.)"},
        {label:"Dual Degree BTECH,MTECH Electronics and Communication ",value:"Dual Degree BTECH,MTECH Electronics and Communication "},
        {label:"Master in CS/IT  (M.sc.(CS/IT))",value:"Master in CS/IT  (M.sc.(CS/IT))"},
        {label:"Master of Arts (MA)",value:"Master of Arts (MA)"},
        {label:"Master of Computer Applications (MCA)",value:"Master of Computer Applications (MCA)"},
        {label:"MBBS (MBBS)",value:"MBBS (MBBS)"},
        {label:"PGDiploama(NID/CEPT)(PGD(N/C) )",value:"PGDiploama(NID/CEPT)(PGD(N/C) )"},
        {label:"OTHER",value:"OTHER"},

    ]

        // {label:"B.Tech XI124",value:"B.Tech XI124"},
        // {label:"B.Tech XI125",value:"B.Tech XI125"},
        // {label:"B.Tech XI126",value:"B.Tech XI126"},
        // {label:"B.Tech XI127",value:"B.Tech XI127"},
        // {label:"BE XI124",value:"BE XI124"},
        // {label:"BE XI125",value:"BE XI125"},
        // {label:"BE XI126",value:"BE XI126"},
        // {label:"BE XI127",value:"BE XI127"},


    const pgOptions=[
        {label:"B.Tech_Material science and Engineering (MTECH_MSE)",value:"B.Tech_Material science and Engineering (MTECH_MSE)"},
        {label:"Dual Degree(B.Sc+M.Sc)",value:"Dual Degree(B.Sc+M.Sc)"},
        {label:"Dual Degree(B.Tech+M.Tech)",value:"Dual Degree(B.Tech+M.Tech)"},
        {label:"M.S (M.S)",value:"M.S (M.S)"},
        {label:"M.Tech Bio Medical Engineering (MTECH_BM)",value:"M.Tech Bio Medical Engineering (MTECH_BM)"},
        {label:"M.Tech Bio Technology (MTECH_BO)",value:"M.Tech Bio Technology (MTECH_BO)"},
        {label:"M.Tech Chemical Engineering (MTECH_CH)",value:"M.Tech Chemical Engineering (MTECH_CH)"},
        {label:"M.Tech Civil Engineering (MTECH_CE)",value:"M.Tech Civil Engineering (MTECH_CE)"},
        {label:"M.Tech Computer Science and Engineering (MTECH_CSE)",value:"M.Tech Computer Science and Engineering (MTECH_CSE)"},
        {label:"M.Tech Electrical Engineering (MTECH_EE)",value:"M.Tech Electrical Engineering (MTECH_EE)"},
        {label:"M.Tech Electronics & Communication Engineering (MTECH_ECE)",value:"M.Tech Electronics & Communication Engineering (MTECH_ECE)"},
        {label:"M.Tech Mechanical Engineering (MTECH_ME)",value:"M.Tech Mechanical Engineering (MTECH_ME)"},
        {label:"Master of Architecture (M.Arch)",value:"Master of Architecture (M.Arch)"},
        {label:"Master of Arts (MA)",value:"Master of Arts (MA)"},
        {label:"Master of Arts in Liberal Studies (MA-LS)",value:"Master of Arts in Liberal Studies (MA-LS)"},
        {label:"Master of Business Administration (MBA)",value:"Master of Business Administration (MBA)"},
        {label:"Master of Commerce (MCOM)",value:"Master of Commerce (MCOM)"},
        {label:"Master of Computer Applications (MCA)",value:"Master of Computer Applications (MCA)"},
        {label:"Master of Design (M.Des)",value:"Master of Design (M.Des)"},
        {label:"Master of Engineering (M.E)",value:"Master of Engineering (M.E)"},
        {label:"Master of Fine Arts (MFA)",value:"Master of Fine Arts (MFA)"},
        {label:"Master of Philosophy (MPHIL)",value:"Master of Philosophy (MPHIL)"},
        {label:"Master of Science (MSC)",value:"Master of Science (MSC)"},
        {label:"Master of Technology (MTECH)",value:"Master of Technology (MTECH)"},
        {label:"OTHERS (Others)",value:"OTHERS (Others)"},

    ]

    const currentOptions=[
        {label:'Completed',value: "Completed"},
        {label:'Ongoing',value: "Ongoing"}
    ]

    const schlyrOptions=[
        {label:"1981",value:"1981"},
        {label:"1982",value:"1982"},
        {label:"1983",value:"1983"},
        {label:"1984",value:"1984"},
        {label:"1985",value:"1985"},
        {label:"1986",value:"1986"},
        {label:"1987",value:"1987"},
        {label:"1988",value:"1988"},
        {label:"1989",value:"1989"},
        {label:"1990",value:"1990"},
        {label:"1991",value:"1991"},
        {label:"1992",value:"1992"},
        {label:"1993",value:"1993"},
        {label:"1994",value:"1994"},
        {label:"1995",value:"1995"},
        {label:"1996",value:"1996"},
        {label:"1997",value:"1997"},
        {label:"1998",value:"1998"},
        {label:"1999",value:"1999"},    
        {label:"2000",value:"2000"},
        {label:"2001",value:"2001"},
        {label:"2002",value:"2002"},
        {label:"2003",value:"2003"},
        {label:"2004",value:"2004"},
        {label:"2005",value:"2005"},
        {label:"2006",value:"2006"},
        {label:"2007",value:"2007"},
        {label:"2008",value:"2008"},
        {label:"2009",value:"2009"},
        {label:"2010",value:"2010"},
        {label:"2011",value:"2011"},
        {label:"2012",value:"2012"},
        {label:"2013",value:"2013"},
        {label:"2014",value:"2014"},
        {label:"2015",value:"2015"},
        {label:"2016",value:"2016"},
        {label:"2017",value:"2017"},
        {label:"2018",value:"2018"},
        {label:"2019",value:"2019"},
        {label:"2020",value:"2020"},
        {label:"2021",value:"2021"},
        {label:"2022",value:"2022"},
        {label:"2023",value:"2023"},
        {label:"2024",value:"2024"},
        // {label:"2025",value:"2025"},
        // {label:"2026",value:"2026"},
              
    ]
    return (
        <Container>
            <h1 className="my-5">Academic Qualifications</h1>
            <form className={classes.root}>
                {props.inputFields.map((inputField,index)=>(
                    <div key={index}>
                        <TextField
                        className="textfield2"
                        select
                        name="educationLevel"
                        label="educationLevel"
                        value={inputField.educationLevel}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}
                        >
                            {degreeOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                        </TextField>
                        
                        <TextField
                        select
                        name="degree"
                        label="Degree"
                        value={inputField.degree}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>
                               
                        
                            
                        {     
                            inputField.educationLevel.localeCompare("10th/equivalent") === 0 ?
                            (tenthOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                )))
                            : inputField.educationLevel.localeCompare("inter/equivalent") === 0 ?
                            (interOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                )))
                            : inputField.educationLevel.localeCompare("UG") === 0 ?
                            (ugOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                )))
                            : (pgOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                )))

                        }

                        </TextField>
                        <TextField
                        name="schoolOrCollege"
                        label="School/College"
                        value={inputField.schoolOrCollege}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>

                        </TextField>
                        <TextField
                        name="boardOrUniversity"
                        label="Board/University"
                        value={inputField.boardOrUniversity}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>

                        </TextField>
                        <br/><TextField
                        className="textfield2"
                        select
                        name="yearOfPassing"
                        label="(Expected) Year of Passing"
                        value={inputField.yearOfPassing}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>
                             {schlyrOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                        </TextField>
                        <TextField
                        name="percentageOrCgpa"
                        label="Percentage/CGPA"
                        value={inputField.percentageOrCgpa}
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>

                        </TextField>
                        <TextField
                        name="outOf"
                        label="Out Of (If %, then enter 100, for CGPA it is 4 or 10)"
                        value={inputField.outOf} 
                        variant="filled"
                        onChange={event=>props.handleChangeInput(index,event)}>

                        </TextField>
                        <TextField
                        select
                        className="textfield2"
                        name="currentStatus"
                        label="Status"
                        value={inputField.currentStatus}
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
                   {    (index <4) &&
                        <IconButton onClick={()=>props.handleAddFields()}>
                            <AddIcon/>
                        </IconButton>
                    }
                    
                    </div>
                    
                ))}
                <p style={{fontSize:"13px"}}>Note: <li>If you have selected <span style={{fontSize:"16px" , fontWeight:"bold", color:"red" }}>Other </span> in <span style={{fontSize:"16px" , fontWeight:"bold" }}>UG/PG </span> qualification, please fill out this <a onClick={()=> window.open("https://docs.google.com/forms/d/e/1FAIpQLScgdnQzNjZa8l3AL13Xtxy4boANEO2NuvDEqSQQd6dTowQi9Q/viewform?usp=sf_link", "_blank")} style={{fontSize:"16px"  , fontWeight:"bold" }}> Google form </a> </li> 
                <li  style={{fontWeight:"bold"}}> Please fill the educational details in chronological order, first 10th, 12th equivalent, UG, then PG etc. </li> 
                <li  style={{fontWeight:"bold"}}>If you had done Dual Degree(B.Tech+M.Tech or B.Sc+M.Sc), then add this qualification in both UG and PG.</li> 
                            <li> If you are editing the form , Please fill all entries of the Academic section again. </li> 
                            </p>
            </form>
            <hr/>
        </Container>
    )
}
