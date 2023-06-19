import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Content/Home";
import Pizza from "./components/Content/Pizza";
import Pasta from "./components/Content/Pasta";
import About from "./components/Content/About";
import Location from "./components/Content/Location";
// import IconMenu from "./components/Content/Login";

import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
// import Login from "./Loooo1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Butt from "./Butt";
// import { Menu } from "@mui/material";
// import Menu from "./Menu";
// import Butter from "./menu list/Butter";
// import Signup from "./Singup";
// import Home1 from "./Singup";
import Patth from "./Patth";


let theme = createTheme({
  typography: {
    fontSize: 10
  }
});
theme = responsiveFontSizes(theme, {factor: 1});
console.log(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <Login/> */}
    
         <Patth/>
        {/* <Home1/> */}
        {/* <button type="text">submit</button> */}
       {/* <Butt/> */}
        {/* <Navbar />
        <Home />
        <Pizza />
        <Pasta />
        <About />
        <Location /> */}
        {/* <Login/> */}
      </div>
    </ThemeProvider>

    
  );
}

export default App;
