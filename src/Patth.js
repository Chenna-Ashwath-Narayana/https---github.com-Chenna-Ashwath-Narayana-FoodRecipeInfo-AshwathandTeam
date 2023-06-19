import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Loooo1';
import Butt from './Butt';
import Menu from './Menu';
import Singup from './Singup';
import Login111 from './Login';
import Biryani from './menu list/Biryani';
import Butter from './menu list/Butter';
import Samosa from './menu list/Samosa';
import Tandoori from './menu list/Tandoori';

function Patth() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/butt" element={<Butt/>}></Route>
          <Route path="/path" element={<Singup/>}></Route>
          <Route path="/menu" element={<Menu/>}/>
          <Route path='/login' element={<Login111/>}/>
          <Route path='/signup' element={<Singup/>}/>
          <Route path='/biryani' element={<Biryani/>}/>
          <Route path='/butter' element={<Butter/>}/>
          <Route path='/curdrice' element={<Samosa/>}/>
          <Route path='/tandoori' element={<Tandoori/>}/>
          
          {/* <Route path="/butterchicken" element={<Butter/>}/> */}
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Patth;
