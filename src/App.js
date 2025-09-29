import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import Reservation from "./pages/Reservation.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ListReservation from "./pages/ListReservation.jsx";
import "./pages/Home/Home.css";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/ListReservation" element={<ListReservation />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;