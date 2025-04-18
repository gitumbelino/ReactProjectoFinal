import React from 'react';
import { GrRestaurant } from "react-icons/gr";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="topnav">
      <div className="topnav-content">
        <div className="brand">
          <GrRestaurant className="logo-icon" />
          <a href="#home" className="active">ReactRestaurant</a>
        </div>
        <a href="#news">Pratos</a>
        <a href="#contact">Staff</a>
      </div>
    </div>
  );
};