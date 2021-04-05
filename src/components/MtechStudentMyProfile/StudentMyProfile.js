import React ,{useState , useEffect} from 'react'
import {Container, Row, Col ,Button} from  'react-bootstrap';
import Home from './Home';
import {Link} from 'react-router-dom'
import ApplicationStatus from './ApplicationStatus';
import ChangePassword from './ChangePassword';


export default function StudentmyProfile(props) {
    const [home,sethome]=useState(true);
    const [status,setstatus]=useState(false);
    const [pass,setpass]=useState(false);
    const [log,setlog]=useState(false);
    const [data,setData] = useState({});
    const [aid,setaid] = useState('');


        useEffect(() => {
         console.log(props.match.params.id)
        // const id = {props.match.params.id}
        setaid(props.match.params.id);
        console.log(aid);
        const id = props.match.params.id;
        const address = "/backend/applicant/profile/"+id;
        console.log(address);
        fetch(address , {
            method : 'get'
        }).then((res) => {
            if(res.ok)
                return res.json();
        }).then((data)=> {
            console.log(data);
            setData(data);
        }).catch(err=>console.log(err))
        },[]);

    const funchome = () => {
        sethome(true);
        setstatus(false);
        setpass(false);
        setlog(false);
   }
   const funcstatus = () => {
    sethome(false);
    setstatus(true);
    setpass(false);
    setlog(false);
   }
   const funcpass = () => {
    sethome(false);
    setstatus(false);
    setpass(true);
    setlog(false);
   }
   const funclog= () => {
    sethome(false);
    setstatus(false);
    setpass(false);
    setlog(true);
   }
    return (
        <>
    <div className="container margintop">
        <div className="mb-5 tab_btn_section">
                  <Row>
                    <Col md={3}>
                         {
                              home ? 
                              <button onClick={funchome} type='btn' className="active tab_btn pic_btn">Home</button> : 
                              <button onClick={funchome} type='btn' className="pic_btn">Home</button>
                         }
                      
                    </Col>
                    <Col md={3}>
                    <button onClick={funcstatus} type='btn' className="pic_btn">Help</button>
                    </Col>
                    <Col md={3}>
                    <button onClick={funcpass} type='btn' className="pic_btn">Reset Password</button>
                    </Col>
                    <Col md={3}>
                   <Link to="/"> <button onClick={funclog} type='btn' className="pic_btn">Logout</button></Link>
                    </Col>
                  </Row>
                </div>
            {
                home && status === false && pass === false && log === false ? 
                (
                    <>
                    <Home data={data.applicantDetails}/>
                    
                    </>
                )
                :home === false && status && pass === false && log === false ?
                (<>
                    <ApplicationStatus data={data.applicantDetails}/>
                    
                    </>
                )
                :home === false && status===false && pass && log === false ?
                (   <>
                    <ChangePassword data={data.applicantDetails}/>
                    
                    </>
                )
                :home === false && status===false && pass===false && log ?
                (   <>
                    
                    <h1>ghhab sjmdvfb</h1>
                    </>
                )  
                :null
            }
            </div>
            </>
           
    )
}
