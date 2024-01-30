import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Project1 from "./pages/Project1";
const App: React.FC = () => {

  return (
		<>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/explore" element = {<Explore />}/>
        <Route path="/contactus" element = {<ContactUs />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/tezplay" element = {<Project1 />}/>
      </Routes>
		</>
	);
};

export default App;
