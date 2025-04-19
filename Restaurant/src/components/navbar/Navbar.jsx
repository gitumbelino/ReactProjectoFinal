import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { GrRestaurant } from "react-icons/gr";
import './Navbar.css'


export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  
  return (
    <div className="topnav">
      <div className="topnav-content">
        <div className="brand">
          <GrRestaurant className="logo-icon" />
          <Link to="/home">ReactRestaurant</Link>
        </div>
        <Link to="/menu">Menu</Link>
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
        <Link to="/logout">Logout</Link>
        
      </div>
    </div>
  );
};