import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import './style.css';

function Delete() {
  const [eemail, setEmpEmail] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeEmpEmail = (e) => {
    setEmpEmail(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log(`Form submitted:`);
    //console.log(`EMAIL ID: ${eemail}`);

    axios.delete('http://localhost:4500/emp/remove/' + eemail)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setEmpEmail('')
  }

  return (
    <div>
      <NavigationBar />
      <br />
      <a class="id">
      <p class="delete" >ENTER EMAIL ID FOR DELETE</p>
      <b style={{ color: "red" }}>{msg}</b>
      <form onSubmit={handleSubmit}>
        <input type="email" value={eemail}
          onChange={onChangeEmpEmail}
          placeholder="EMAIL ID"
          required />
        <br />
        <br />
        <input type="submit" value="DELETE EMPLOYEE" className="btn btn-danger" />
      </form>
      </a>
    </div>
  )
}


export default Delete
