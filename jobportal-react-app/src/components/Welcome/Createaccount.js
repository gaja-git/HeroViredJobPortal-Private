import React, { useState } from "react"
import { Link } from "react-router-dom";
import './createacc.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateAccount() {

  let [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const sendData = async () => {
    // let res = await axios.post("/user", data);
    // console.log(res.data);
    navigate("/profile");
  };

  return (
    <div className="createac_page" >
      <div className="header" >
        <h1 >Hero Vired JobPortal</h1>
      </div>
      <div className="createac_content">
        <img src="/images/resume.jpg" alt="jobimage" />
        <div className="createac_form">
          <h2>Create Account</h2>
          <h5>Please enter your email and password to register to our job portal</h5>
          <form >
            <br></br>
            <br></br>
            <label className="labelcss" for="email" >Email     :</label>
            <input className="inputcss" type="text" id="email" placeholder="useremail" name="email" onChange={handleChange} /> <br></br>
            <label className="labelcss" for="pswd" >Password:</label>
            <input className="inputcss" type="password" id="pswd" placeholder="password" name="password" onChange={handleChange} /><br></br>
            <button onClick={sendData}>Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}