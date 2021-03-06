import React from 'react'
import logo from '../Login/logo.png'
import {Link} from 'react-router-dom'
import './AdminWindow.css';
import { ExportToCsv } from 'export-to-csv';


export default function Home() {

        const getReport = async function(dept){
            const jsonUrl = '/backend/admin/exportToCSV' //write url

            const json = await fetch(jsonUrl , {
                method : 'post',
                headers: {
                    "Content-Type": "application/json",
                    'x-auth-token': localStorage.getItem('authToken'),
                    'x-refresh-token': localStorage.getItem('refreshToken'),
                },
                body:JSON.stringify({
                department: dept,
                })  
            }).then((res) => {

                if(res.message == "LogIn Required"){
                    alert("Invalid token or Token expired !! Redirecting to Login !!");
                    window.location.href="/";
                    return ;
                }


            if(res.ok)
                return res.json();
        }).catch(err=>console.log(err));


             const options = { 
                fieldSeparator: ',',
                filename : dept,
                quoteStrings: '"',
                decimalSeparator: '.',
                showLabels: true, 
                showTitle: true,
                title: dept+" M.Tech. Applications",
                useTextFile: false,
                useBom: true,
                useKeysAsHeaders: true,
                // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
              };
             
            const csvExporter = new ExportToCsv(options);


            if(json.applicantDetails.length > 0){
                csvExporter.generateCsv(json.applicantDetails)
            }else{
                alert("No Applications Received Yet")
            }


        };


        const exportAll = async function(){
            const jsonUrl1 = '/backend/admin/exportAllToCSV' //write url

            const json1 = await fetch(jsonUrl1 , {
                method : 'get',
                headers: {
                    "Content-Type": "application/json",
                    'x-auth-token': localStorage.getItem('authToken'),
                    'x-refresh-token': localStorage.getItem('refreshToken'),
                }  
            }).then((res) => {

                if(res.message == "LogIn Required"){
                    alert("Invalid token or Token expired !! Redirecting to Login !!");
                    window.location.href="/";
                    return ;
                }


            if(res.ok)
                return res.json();
        }).catch(err=>console.log(err));


             const options = { 
                fieldSeparator: ',',
                filename : "Export ALL",
                quoteStrings: '"',
                decimalSeparator: '.',
                showLabels: true, 
                showTitle: true,
                title: " M.Tech. Applications",
                useTextFile: false,
                useBom: true,
                useKeysAsHeaders: true,
                // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
              };
             
            const csvExporter = new ExportToCsv(options);


            if(json1.applicantDetails.length > 0){
                csvExporter.generateCsv(json1.applicantDetails)
            }else{
                alert("No Applications Received Yet")
            }


        };

       

    return (

        <div>
            <div className="container">
            <div className="home">
                <div className="profile">
                    <div className="profile_inner">
                        <div className="profile_img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="name">
                            <h1>Welcome , Admin </h1>
                             
                               
                        </div>
                        
                    </div>
                </div>
                <div className="details">
                    <div className="status">
                        <h4>Department</h4>
                        <div className="status_details">
                            <div className="det">
                                <h3>Mechatronics</h3>
                                <button onClick={() => getReport("Mechatronics")} >Download CSV</button>
                            </div>
                            <div className="det">
                                <h3>Mathematics & Computing</h3>
                                <button onClick={() => getReport("Mathematics & Computing")}>Download CSV</button>
                            </div>
                            <div className="det">
                                <h3>Computer Science & Engineering</h3>
                                <button onClick={() => getReport("Computer Science & Engineering")}>Download CSV</button>
                            </div>
                            <div className="det">
                                <h3>Communication System Engineering</h3>
                                <button onClick={() => getReport("Communication System Engineering")}>Download CSV</button>
                            </div>
                            <div className="det">
                                <h3>Mechanical Engineering</h3>
                                <button onClick={() => getReport("Mechanical Engineering")}>Download CSV</button>
                            </div>
                            <div className="det">
                                <h3>Civil Engineering</h3>
                                <button onClick={() => getReport("Civil Engineering")}>Download CSV</button>
                            </div>
                            <div className="det">
                                <h3>Materials Science & Engineering</h3>
                                <button onClick={() => getReport("Materials Science & Engineering")}>Download CSV</button>
                            </div>
                            <div className="det">
                                <h3>VLSI & Embedded Systems</h3>
                                <button onClick={() => getReport("VLSI & Embedded Systems")}>Download CSV</button>
                            </div>
                            <div className="det">
                                <h3>******************************************</h3>
                            </div>
                            <div className="det">
                                <h3>Export All</h3>
                                <button onClick={() => exportAll()}>Download CSV</button>
                            </div>
                            
                        </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
