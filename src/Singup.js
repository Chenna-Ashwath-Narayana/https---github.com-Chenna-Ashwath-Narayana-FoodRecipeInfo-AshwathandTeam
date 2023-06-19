import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// import {
//     MDBContainer,
//     MDBInput,
//     MDBCheckbox,
//     MDBBtn,
//     MDBIcon
//   }
//   from 'mdb-react-ui-kit';
  

function Singup() {
    const[sname,setname]=useState("")
    const[mailid,setmail]=useState("")
    const[password1,setPassword]=useState("")
    const navigate=useNavigate();
    function login(){
        navigate("/")
    }
    const save=async(e)=>{
        e.preventDefault();
        if(password1=="")
        alert("enter password")
        else if(sname=="")
        alert("Enter the UserName")
        else if(mailid=="")
        alert("Enter the Mail")
        else {
            let mydata={
                username:sname,
                emailid:mailid,
                password:password1
            }
            let result=await axios.post("http://localhost:8080/postdata",mydata)
            if(result.data=="added"){
                navigate("/butt");
            }
            else{
                alert(result.data)
            }
        } 
    }
  return (
    <div>
      <center>
        <form>
        {/* <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/> */}
           UserName:<input type='text' label value={sname} onChange={(e) => setname(e.target.value)}></input><br/><br/>
           Emailid:<input type='email' label='Email address' value={mailid} onChange={(e) => setmail(e.target.value)}></input><br/><br/>
           Password:<input type='password' value={password1} onChange={(e) => setPassword(e.target.value)}></input><br/><br/>
           <Button variant="contained" onClick={save}>submit</Button>
           <Button variant="contained" href='/login'>SingIn</Button>
        </form>
      </center>
    </div>
  )
}

export default Singup;
