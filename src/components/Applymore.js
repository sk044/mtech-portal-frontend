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

    const [touched,setBlur]=useState([
        {applicationCategory:false,rUFromIIT:false,department:false,paymentReferenceNumber:false,paymentMethod:false, amount:false,registrationNo:false,gateScore:false,gatePaperCode:false,gateRank:false,examDate:false,coapRegistrationNo: false,validUpto:false}, 
        
    ])

    const handleChangeInputgateExamInfo=(index,event)=>{
        console.log(index,event.target.name)
        const values=[...gateExamInfo];
        values[index][event.target.name]=event.target.value
        setgateExamInfo(values);
        console.log(gateExamInfo);
    }

    const handleBlur=(index,field)=>(evt)=>{
        console.log(index,field)
        const values=[...touched];
        values[index][field]=true;
        setBlur(values);
        console.log("touched:",touched);
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

    const validate = (applicationCategory,department,rUFromIIT,registrationNo,gateScore,gatePaperCode,gateRank,examDate,validUpto,coapRegistrationNo,paymentReferenceNumber,paymentMethod, amount) => {
        const errors = {
            applicationCategory: '',
            department: '',
            rUFromIIT: '',
            registrationNo: '',
            gateScore: '',
            gatePaperCode: '',
            gateRank: '',
            examDate: '',
            validUpto: '',
            coapRegistrationNo: '',
            paymentReferenceNumber:'',
            paymentMethod:'', 
            amount:''
        };

        if(touched[0].applicationCategory && applicationCategory.length==0)
            errors.applicationCategory = 'Please fill the box';

        if(touched[0].department && department.length==0)
            errors.department = 'Please fill the box';
        
        if(touched[0].rUFromIIT && rUFromIIT.length==0)
            errors.rUFromIIT = 'Please fill the box';

        if(touched[0].paymentReferenceNumber && paymentReferenceNumber.length==0)
            errors.paymentReferenceNumber = 'Please fill the box';

        if(touched[0].paymentMethod && paymentMethod.length==0)
            errors.paymentMethod = 'Please fill the box';
        
        if(touched[0].amount && amount.length==0)
            errors.amount = 'Please fill the box';

        const gateRankreg = /^\d{1,}$/;
        if(touched[0].gateRank && gateRank.length==0)
            errors.gateRank = 'Please fill the box';
        else if(touched[0].gateRank && !gateRankreg.test(gateRank) && gateRank!=-1)
            errors.gateRank = 'Gate Rank should contain only numbers';

        const coapreg = /^COAP\d{8}$/;
        if(touched[0].coapRegistrationNo && coapRegistrationNo.length==0)
            errors.coapRegistrationNo = 'Please fill the box';
        else if(touched[0].coapRegistrationNo && !coapreg.test(coapRegistrationNo) && coapRegistrationNo!=-1)
            errors.coapRegistrationNo = 'Gate coap registration Number format is wrong';

        const registrationNoreg = /^[1-9][0-9][a-zA-Z0-9]{9}$/;
        if(touched[0].registrationNo && registrationNo.length==0)
            errors.registrationNo = 'Please fill the box';
        else if(touched[0].registrationNo && !registrationNoreg.test(registrationNo) && registrationNo!=-1)
            errors.registrationNo = 'Registration Number format is wrong';

        if(touched[0].gateScore && gateScore.length==0)
            errors.gateScore = 'Please fill the box';
        else if(touched[0].gateScore && parseInt(gateScore)>1000 && parseInt(gateScore)<-1)
            errors.gateScore = 'Gate Score should be less than 1000';

        if(touched[0].examDate && examDate.length==0)
            errors.examDate = 'Please fill the box';

        if(touched[0].validUpto && validUpto.length==0)
            errors.validUpto = 'Please fill the box';

        if(touched[0].gatePaperCode && gatePaperCode.length==0)
            errors.gatePaperCode = 'Please fill the box';
            
        return errors;
    }
        
    const errors = validate(inputFields[0].applicationCategory, inputFields[0].department, inputFields[0].rUFromIIT,gateExamInfo[0].registrationNo, gateExamInfo[0].gateScore, gateExamInfo[0].gatePaperCode, gateExamInfo[0].gateRank, gateExamInfo[0].examDate, gateExamInfo[0].validUpto, gateExamInfo[0].coapRegistrationNo,inputFields[0].paymentReferenceNumber,inputFields[0].paymentMethod, inputFields[0].amount);
        
    
    const handleSubmit = () => {
        console.log(inputFields);
        console.log(gateExamInfo);

        if(Object.values(errors).every(x => x == '') && Object.values(touched[0]).every(x => x==true)){
            // console.log(files);
            const address = "/backend/applicant/apply/"+props.match.params.id;
            fetch(address,{
                method:"post",
                headers:{
                    "Content-Type" : "application/json",
                    'x-auth-token': localStorage.getItem('authToken'),
                    'x-refresh-token': localStorage.getItem('refreshToken'),
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
                window.location.href="/mtechstuprofile/"+props.match.params.id;
            })
            .catch(err => console.log(err))
            
            
            
            console.log("success saving details and files");
        }
        else if(!Object.values(touched[0]).every(x => x==true)){
            alert('Please fill all the fields in the form.');
        }else{
            alert('Please resolve all the errors.');
        }
    }
    
    
    console.log("errors",errors);

    return (
        <div className="container">
            <div className="name">
            <button className="mtech_btn" onClick ={()=>{window.location.href = "/mtechstuprofile/"+props.match.params.id}} style={{background:'Salmon',color:"black"}}>Go to Home</button>
            </div>
            <div className="row">
               
                {inputFields.map((inputField,index)=>(
                    <div className="p-5 si_div" key={index}>
                        <h1 className="text-center si_subhead">Mtech Form</h1>
                        
                        <div className="row mt-5">
                        <div className="col-sm-4 text-center">
                            <Label>Application Category</Label>
                                <TextField className="textfield" select name="applicationCategory" onBlur={handleBlur(index,"applicationCategory")} value={inputField.applicationCategory} variant="filled" helperText={errors.applicationCategory} error={Boolean(errors.applicationCategory)} onChange={event=>handleChangeInput(index,event)}>
                                {Applicanttype.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                            <div className="col-sm-4 text-center">
                            <Label>Department:</Label>
                                <TextField className="textfield" select name="department" onBlur={handleBlur(index,"department")} value={inputField.department} variant="filled" helperText={errors.department} error={Boolean(errors.department)} onChange={event=>handleChangeInput(index,event)}>
                                {SubjectOption.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>

                        
                       
                        <div className="col-sm-4 text-center">
                            <Label>Is your BTech from IIT</Label>
                                <TextField className="textfield" select name="rUFromIIT" onBlur={handleBlur(index,"rUFromIIT")} value={inputField.rUFromIIT} variant="filled" helperText={errors.rUFromIIT} error={Boolean(errors.rUFromIIT)} onChange={event=>handleChangeInput(index,event)}>
                                {rufromOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            
                        </div>
                        </div>

                        <GateExamInfo handleChangeInput={handleChangeInputgateExamInfo} inputFields={gateExamInfo} errors={errors} handleBlur={handleBlur} />


                        <hr></hr>
                        
                        <h1>Payment info</h1>
                        <br/>

   
                        <div className="row">
                        <span style={{fontSize: "11.5px", paddingLeft:"10px"}}>      Go to Payment and put the Payment Reference No. after successful Payment!!</span>
                        <div className="text-center declaration">
                
                <button className="submit_btn"><td onClick={()=> window.open("https://www.onlinesbi.sbi/sbicollect/icollecthome.htm", "_blank")}>Go to Payment</td></button>
              </div>
              
                        <div className="col-sm-4 text-center">
                            <Label>Payment Method</Label>
                                <TextField className="textfield" select name="paymentMethod" onBlur={handleBlur(index,"paymentMethod")} value={inputField.paymentMethod} variant="filled" helperText={errors.paymentMethod} error={Boolean(errors.paymentMethod)} onChange={event=>handleChangeInput(index,event)}>
                                {payment.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                            <div className="col-sm-4 text-center">
                            <Label>Payment Reference Number</Label>
                                <TextField className="textfield" name="paymentReferenceNumber" onBlur={handleBlur(index,"paymentReferenceNumber")} value={inputField.paymentReferenceNumber} variant="filled" helperText={errors.paymentReferenceNumber} error={Boolean(errors.paymentReferenceNumber)} onChange={event=>handleChangeInput(index,event)}>
                                
                                </TextField>
                            </div>
                            <div className="col-sm-4 text-center">
                            <Label>Amount</Label>
                                <TextField className="textfield" select name="amount" onBlur={handleBlur(index,"amount")} value={inputField.amount} variant="filled" helperText={errors.amount} error={Boolean(errors.amount)} onChange={event=>handleChangeInput(index,event)}>
                                {amount.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                        </div> 
                        <br/>
                        <br/>
                        <br/>

                         

                        <div className="row text-center">

                   </div>

                        <div className="text-center declaration">


                            <h1 className="text-center">Decalaration:<br/><span style={{fontSize: "11.5px"}}> You can't edit form this later!!</span></h1>
                            <input type="checkbox" className="checkbox" required></input>
                            
                            <span className="my-5">
                                    I hereby declare that the entries made in this application form are correct to the best of my knowledge and belief. If selected for admission, I promise to abide by the rules and regulations of the Institute. The Institute shall have the right to take any action it deems fit, including expulsion, against me at any time after my admission, if it is found that any information furnished by me is incorrect. I note that the decision of the Institute is final in regard to selection for admission and assignment to a particular department and field of study.
                            </span>
                            <br/>
                            <button className="submit_btn" onClick={handleSubmit}>FINAL SUBMIT</button>
                        </div>       
                    </div>
                    
                ))}
            
               
            </div>
            
            
            
            
        </div>
    )
}
