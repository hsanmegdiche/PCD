import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import "./App.css";
import Home from "./components/Home.js";
import Signup from "./components/Signup";
import Form from "./components/Create_offer";
import Login from "./components/Login.js";
import UserApi from "./components/UserApi";
import AboutThis from "./components/AboutThis.js";
import Anonymous from "./components/Anonymous.js";
import { DataProvider, GlobalState } from "./components/GlobalState";
import Header from "./layout/Header";
import Create_offer from "./components/Create_offer";
import Offer from "./components/Offer.js";
import Footer from "./layout/Footer"
function App() {
  return (
    <DataProvider>
      <Header />
      <Routes>
      <Route path="/continue_signup" element={<Form />} />

        <Route path="/" element={<Home />} />
        <Route path="/getuser" element={<UserApi />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutthis" element={<AboutThis />} />
        <Route path="/anonymous" element={<Anonymous />} />
        <Route path="/create_offer" element={<Create_offer/>} />
        <Route path="/Offres/1" element={<Offer/>} />

      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
