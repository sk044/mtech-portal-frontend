import React ,{useState , useEffect} from 'react'
import {Container, Row, Col ,Button} from  'react-bootstrap';
import Home from './Home';
import {Link} from 'react-router-dom'
import ChangePassword from './ChangePassword';


export default function Picwindow() { 
    const [home,sethome]=useState(true);
    const [pass,setpass]=useState(false);
    const [log,setlog]=useState(false);




    const funchome = () => {
        sethome(true);
        setpass(false); 
        setlog(false);
   }
   const funcstatus = () => {
    sethome(false);
    setpass(false);
    setlog(false);
   }
   const funcpass = () => {
    sethome(false);
    setpass(true);
    setlog(false);
   }
   const funclog= () => {
    sethome(false);
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
                    <button onClick={funcpass} type='btn' className="pic_btn">Reset Password</button>
                    </Col>
                    <Col md={3}>
                   <Link to="/"> <button onClick={funclog} type='btn' className="pic_btn">Logout</button></Link>
                    </Col>
                  </Row>
                </div>
            {
                home && pass === false && log === false ? 
                (
                    <>
                    <Home />
                    
                    </>
                )
                :home === false && pass && log === false ?
                (   <>
                    <ChangePassword/>
                    
                    </>
                )
                :home === false && pass===false && log ?
                (   <>
                    
                    {/* <h1>ghhab sjmdvfb</h1> */}
                    </>
                )  
                :null
            }
            </div>
            </>
           
    )
}
