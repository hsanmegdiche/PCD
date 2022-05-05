import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home.js";
import Signup from "./components/Signup";
import Login from "./components/Login.js";
import UserApi from "./components/UserApi";
import AboutThis from "./components/AboutThis.js";
import Anonymous from "./components/Anonymous.js";
import { DataProvider } from "./components/GlobalState";
import Album from "./Album";
import Header from "./layout/Header";

function App() {
  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getuser" element={<UserApi />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutthis" element={<AboutThis />} />
        <Route path="/anonymous" element={<Anonymous />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
