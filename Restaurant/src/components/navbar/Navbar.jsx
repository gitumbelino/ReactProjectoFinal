import React from 'react';
import { GrRestaurant } from "react-icons/gr";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="topnav">
      <div className="topnav-content">
        <div className="brand">
          <GrRestaurant className="logo-icon" />
          <a href="./" className="active">ReactRestaurant</a>
        </div>
        <a href="/menu">Menu</a>
        <a href="/login">Staff </a>
        <a href="/register">Novo registo</a>
      </div>
    </div>
  );
};