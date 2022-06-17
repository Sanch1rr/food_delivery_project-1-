import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Login from "./components/modals/Login";
import Register from "./components/Register";
import Delivery_zone from "./components/Delivery_zone";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/menu/*" element={<Menu />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/deliveryZone" element={<Delivery_zone />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
