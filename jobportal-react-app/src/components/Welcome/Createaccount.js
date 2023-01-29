import React, { useState } from "react"
import { Link } from "react-router-dom";
import './createacc.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateAccount() {

  let [createAccData, setCreateAccData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCreateAccData({
      ...createAccData,
      [e.target.name]: e.target.value,
      // "usertype": "student"
    });
    console.log(createAccData);
  };
  // const getExistingUserData = () => {
  //   let res = await axios.post("http://127.0.01:3001/useraccount", createAccData);
  //   console.log(res.data);
  // }
  const sendData = async () => {
    console.log("test user creation", createAccData)
    console.log("before axios")
    try {
      let res = await axios.post("/useraccount", createAccData);
      console.log("res", res)
      console.log("user creation after")
      console.log("Navigate to profile");

      // alert("User account is created successfully ! Please login now.")
      navigate("/profile");

    } catch (error) {
      console.log(error);
    }


  };
  return (
    <div className="acc_v">
      <div className="logo_v">
        <img src="/images/HV1.png" alt="HV_logo" height='40px' width='200px' />
        <h1> Welcome to Hero Vired JobPortal!</h1>

      </div>
      <div className="contain_v">
        <h2> Create Account:</h2>
        <div className="acc_details">

          <label> Enter your email address </label><br></br>
          <input type="text" name="email" onChange={handleChange} /><br></br>
          <label> Enter your password </label><br></br>
          <input type="password" name="password" onChange={handleChange} /><br></br>
          <input type="Submit" className="acc_submit" value="Submit" onClick={sendData} />
        </div>
      </div>

    </div>

  )
}