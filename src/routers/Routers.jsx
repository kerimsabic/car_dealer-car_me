
import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from '../pages/Home'
import CarListing from "../pages/CarListing";
import CarDetail from "../pages/CarDetail";
import Login from "../pages/Login"
import PublishCar from "../pages/PublishCar"
import User from "../pages/User"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cars" element={<CarListing />} />
      
      <Route path="/detailCar" element={<CarDetail />} />
      <Route path="/publishCar" element={<PublishCar />} />
      <Route path="/user" element={<User />} />
    </Routes>
  )
}

export default Routers
