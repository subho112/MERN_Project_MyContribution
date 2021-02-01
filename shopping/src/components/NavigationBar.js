import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function NavigationBar() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  //console.log(authuser)
  if (authuser === 'ADMIN') {
    return (
      <nav class="navbar">
      <label class="logo">Shopping</label>
        <b>
          <Link to="/adminafterlogin">ADMIN HOME </Link> |
              <Link to="/displayall">DISPLAY ALL </Link>|
              <Link to="/search">SEARCH </Link> |
              <Link to="/delete">DELETE </Link>|
              <Link to="/manageemp">MANAGE EMPLOYEE </Link>|
              <Link to="/logout">LOGOUT </Link>
        </b>
      </nav>
    )

  }
  else if (authuser === 'USER') {
    return (
      <nav class="navbar">
      <label class="logo">Shopping</label>
        <b>
          <Link to="/userafterlogin">USER HOME </Link> |
            <Link to="#">VIEW PROFILE </Link>|
            <Link to="/updateprofile">UPDATE PROFILE</Link> |
            <Link to="/logout">LOGOUT </Link>
        </b>
      </nav>
    )
  }
  else {
    return (
      <nav class="navbar">
       <label class="logo">Shopping</label>
        <b>
          <Link to="/">HOME </Link> |
              <Link to="/reg">REG </Link>|
              <Link to="/login">LOGIN </Link> |
              <Link to="/about">ABOUT US </Link> |
              <Link to="/contact">CONTACT US </Link> |
              <Link to="/adminlogin">ADMIN LOGIN </Link>
        </b>
      </nav>
    )
  }
}

export default NavigationBar
