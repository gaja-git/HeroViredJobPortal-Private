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
        <div>
          <img src="/images/HV Logo.png" alt="HV_logo" height='40px' width='200px' />
        </div>
        <div className="header_content">
          <h5>Hero Vired Job Portal</h5>
        </div>
        {/* <div className="header_content">

        </div> */}
      </div>
      <div className="createac_content">
        {/* <img src="/images/resume.jpg" alt="jobimage" /> */}
        <div className="createac_form">
          <h2>Create your Account</h2>
          <h4>Please enter your email and password to register to our job portal:</h4>
          <form >
            <label className="labelcss" for="email" >Email     :</label>
            <input className="inputcss" type="text" id="email" placeholder="useremail" name="email" onChange={handleChange} /> <br></br>
            <label className="labelcss" for="pswd" >Password:</label>
            <input className="inputcss" type="password" id="pswd" placeholder="password" name="password" onChange={handleChange} /><br></br>
            {/* <button onClick={sendData}>Submit</button> */}
            <input type="submit" className="createacc_submit" onClick={sendData} />
          </form>
        </div>
      </div>
    </div>

  )
}