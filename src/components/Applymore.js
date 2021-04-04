import React,{useState} from 'react'
import './StudentApplicationMtech/StudentApplication.css'
import TextField from '@material-ui/core/TextField'
import './MtechStudentMyProfile/StudentMyProfile.css';

import GateExamInfo from './gateExamInfo'

import Label from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
export default function Applymore(props) {
    const [inputFields,setinputField]=useState([
        {applicationCategory:'',rUFromIIT:'',department:'',paymentReferenceNumber:'',paymentMethod:'', amount:''},
        
    ])

    const [gateExamInfo,setgateExamInfo]=useState([
        {registrationNo:'',gateScore:'',gatePaperCode:'',gateRank:'',examDate:'',coapRegistrationNo: '',validUpto:''}, 
        
    ])

    const handleChangeInputgateExamInfo=(index,event)=>{
        console.log(index,event.target.name)
        const values=[...gateExamInfo];
        values[index][event.target.name]=event.target.value
        setgateExamInfo(values);
        console.log(gateExamInfo);
    }


    const SubjectOption = [
        {label:'Mechatronics',value:'Mechatronics'},
        {label:'Mathematics & Computing',value:'Mathematics & Computing'},
        {label:'Computer Science & Engineering',value:'Computer Science & Engineering'},
        {label:'Communication System Engineering',value:'Communication System Engineering'},
        {label:'Mechanical Engineering',value:'Mechnaical Engineering'},
        {label:'Civil Engineering',value:'Civil Engineering'},
        {label:'Material Science & Engineering',value:'Material Science & Engineering'},
        {label:'VLSI & Embedded Sysytem',value:'VLSI & Embedded Sysytem'},
      ]
    const Applicanttype=[
        {label:'Regular & Full-Time',value:'Regular & Full-Time'},
        {label:'Sponsored & Full-Time',value:'Sponsored & Full-Time'},
        {label:'Project-Staff',value:'Project-Staff'},
        {label:'Employed & Part-Time',value:'Employed & Part-Time'},
        
    ]
    const rufromOptions=[
        {label:'Yes',value:true},
        {label:'No',value:false},
    ]

        
    const payment=[
        {label:'SBI Collect',value:'SBI Collect'},
    ]
    const amount=[
        {label:'150',value:'150'},
        {label:'300',value:'300'},
    ]

    const handleChangeInput=(index,event)=>{
        console.log(index,event.target.name)
        const values=[...inputFields];
        values[index][event.target.name]=event.target.value
        setinputField(values);
    }


    const handleSubmit = () => {
        console.log(inputFields);
        console.log(gateExamInfo);

        // console.log(files);
        const address = "https://iitp-mtech-portal-backend.herokuapp.com/backend/applicant/apply/"+props.match.params.id;
        fetch(address,{
            method:"post",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                applicationCategory:inputFields[0].applicationCategory,
                department : inputFields[0].department,
                rUFromIIT : inputFields[0].rUFromIIT,

                gateExamInfo: {
                    
						registrationNo: gateExamInfo[0].registrationNo,
                        gateScore: gateExamInfo[0].gateScore,
                        gatePaperCode: gateExamInfo[0].gatePaperCode,
                        gateRank: gateExamInfo[0].gateRank,
                        examDate: gateExamInfo[0].examDate,
                        coapRegistrationNo: gateExamInfo[0].coapRegistrationNo,
                        validUpto: gateExamInfo[0].validUpto,
                    
                } ,
                    payment: {
                        paymentMethod: inputFields[0].paymentMethod,
                        paymentReferenceNumber: inputFields[0].paymentReferenceNumber,
                        amount: inputFields[0].amount,
                    }

           
                
            })
        }).then(res=>{
            return res.json() 
          })
        .then(res=> {console.log(res);
            window.alert('Submitting Form');
			window.location.href="https://iitp-mtechportal.netlify.app//mtechstuprofile/"+props.match.params.id;
			})
        .catch(err => console.log(err))



        console.log("success saving details and files");
    }




    return (
        <div className="container">
            <div className="name">
            <button className="mtech_btn" onClick ={()=>{window.location.href = "https://iitp-mtechportal.netlify.app//mtechstuprofile/"+props.match.params.id}} style={{background:'Salmon',color:"black"}}>Go to Home</button>
            </div>
            <div className="row">
               
                {inputFields.map((inputField,index)=>(
                    <div className="p-5 si_div" key={index}>
                        <h1 className="text-center si_subhead">Mtech Form</h1>
                        
                        <div className="row mt-5">
                        <div className="col-sm-4 text-center">
                            <Label>Application Category</Label>
                                <TextField className="textfield" select name="applicationCategory" value={inputField.applicationCategory} variant="filled" onChange={event=>handleChangeInput(index,event)}>
                                {Applicanttype.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                            <div className="col-sm-4 text-center">
                            <Label>Department:</Label>
                                <TextField className="textfield" select name="department" value={inputField.department} variant="filled" onChange={event=>handleChangeInput(index,event)}>
                                {SubjectOption.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>

                        
                       
                        <div className="col-sm-4 text-center">
                            <Label>Is your BTech from IIT</Label>
                                <TextField className="textfield" select name="rUFromIIT" value={inputField.rUFromIIT} variant="filled" onChange={event=>handleChangeInput(index,event)}>
                                {rufromOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            
                        </div>
                        </div>

                        <GateExamInfo handleChangeInput={handleChangeInputgateExamInfo} inputFields={gateExamInfo}/>


                        <hr></hr>
                        
                        <h1>Payment info</h1>
                        <br/>

   
                        <div className="row">
                        <div className="col-sm-4 text-center">
                            <Label>Payment Method</Label>
                                <TextField className="textfield" select name="paymentMethod" value={inputField.paymentMethod} variant="filled" onChange={event=>handleChangeInput(index,event)}>
                                {payment.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                            <div className="col-sm-4 text-center">
                            <Label>Payment Reference Number</Label>
                                <TextField className="textfield" name="paymentReferenceNumber" value={inputField.paymentReferenceNumber} variant="filled" onChange={event=>handleChangeInput(index,event)}>
                                
                                </TextField>
                            </div>
                            <div className="col-sm-4 text-center">
                            <Label>Amount</Label>
                                <TextField className="textfield" select name="amount" value={inputField.amount} variant="filled" onChange={event=>handleChangeInput(index,event)}>
                                {amount.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                        </div> 

                        <div className="text-center declaration">
                
                           <button className="mx-auto"><td onClick={()=> window.open("https://www.onlinesbi.sbi/sbicollect/icollecthome.htm", "_blank")}>Go to Payment</td></button>
                         </div> 

                        <div className="row text-center">

                   </div>

                        <div className="text-center declaration">


                            <h1 className="text-center">Decalaration:<br/><span style={{fontSize: "11.5px"}}> You can't edit form this later!!</span></h1>
                            <input type="checkbox" className="checkbox" required></input>
                            
                            <span className="my-5">
                                    I hereby declare that the entries made in this application form are correct to the best of my knowledge and belief. If selected for admission, I promise to abide by the rules and regulations of the Institute. The Institute shall have the right to take any action it deems fit, including expulsion, against me at any time after my admission, if it is found that any information furnished by me is incorrect. I note that the decision of the Institute is final in regard to selection for admission and assignment to a particular department and field of study.
                            </span>
                            <br/>
                            <button className="mx-auto" onClick={handleSubmit}>FINAL SUBMIT</button>
                        </div>       
                    </div>
                    
                ))}
            
               
            </div>
            
            
            
            
        </div>
    )
}
