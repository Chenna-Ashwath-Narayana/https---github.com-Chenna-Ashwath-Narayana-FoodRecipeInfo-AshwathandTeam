import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Content/Home";
import Pizza from "./components/Content/Pizza";
import Pasta from "./components/Content/Pasta";
import About from "./components/Content/About";
import Location from "./components/Content/Location";

var Butt=()=>{
  return (
    <div>
      <Navbar />
        <Home />
        <Pizza />
        <Pasta />
        <About />
        <Location />
        {/* <Login/> */}
    </div>
  )
}

export default Butt;
