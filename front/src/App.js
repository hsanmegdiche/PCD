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
import UserProfile from "./Profile/UserProfile";
import TableList from "./TableList/TableList";
import Footer from "./layout/Footer";
import Upload from "./components/sousComponents/Upload";
function App() {
  return (
    <DataProvider>
      <Header />
      <Routes>
      <Route path="/upload" element={<Upload />} />

        <Route path="/offer" element={<Form />} />
        <Route path="/classement" element={<TableList />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/" element={<Home />} />
        <Route path="/getuser" element={<UserApi />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutthis" element={<AboutThis />} />
        <Route path="/anonymous" element={<Anonymous />} />
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
