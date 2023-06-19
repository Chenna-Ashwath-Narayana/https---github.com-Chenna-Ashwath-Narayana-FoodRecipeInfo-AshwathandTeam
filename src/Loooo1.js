import { Button } from '@mui/material';
import React from 'react'
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Butt from './Butt';

var Login1=()=> {
  return (
    <div>
      <div>
      <br></br><br></br><center>
        <h1>This Website is Updated and Redirecting...</h1>
        <h3>To port 3000...</h3>
        {/* <a href="https://www.flaticon.com/free-icons/redirect" title="redirect icons"></a> */}

        {/* <img src='1.png'/> */}
      <Button variant="contained" href="/butt ">Login</Button>   
        </center>
        </div>
    </div>
  )
}

export default Login1;
