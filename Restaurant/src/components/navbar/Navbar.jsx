import React from 'react';
import { GrRestaurant } from "react-icons/gr";
import './Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className="topnav">
      <div className="topnav-content">
        <div className="brand">
          <GrRestaurant className="logo-icon" />
          <h1>ReactRestaurant</h1>
        </div>
        <Link to="/menu">Menu</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};