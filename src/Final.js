import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";


import "./All.css";

import Login from "./Login";
import Home from "./Home";
import Newform from "./Newform";
import House from "./House";


function Final() { 
  return (
    <div>
    <div className="App">
<NavLink   className= "NavLink" to={"/"} > <h1>Log-in</h1></NavLink>
<NavLink  className= "NavLink" to={"/candidate"} > <h1>Home</h1></NavLink>
<NavLink  className= "NavLink" to={"/candidate/new"} > <h1>new</h1></NavLink>
<NavLink  className= "NavLink" to={"/candidate/house"} > <h1>new</h1></NavLink>

    </div>
   <Routes>
   <Route exact path="/" element={<div><Login/></div>}></Route>
   <Route exact path="/candidate" element={<div> <Home /></div>}></Route>
 
<Route exact path="/candidate/new" element={<div> <Newform/></div>}></Route>
<Route exact path="/candidate/house" element={<div> <House/></div>}></Route>

   </Routes>
    </div>
  );
}

export default Final;