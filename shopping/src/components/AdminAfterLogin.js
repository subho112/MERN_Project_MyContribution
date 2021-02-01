import React from 'react'
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar';

function AdminAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/adminlogin" />)
  }
  else {
    return (
      <div>
        <NavigationBar />
        <br />
        <h1>List of Products</h1>
        
       
        
      </div>
    )
  }
}

export default AdminAfterLogin
