import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ContactUs from "./pages/ContactUs";
const App: React.FC = () => {

  return (
		<>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/explore" element = {<Explore />}/>
        <Route path="/contactus" element = {<ContactUs />}/>
      </Routes>
		</>
	);
};

export default App;
