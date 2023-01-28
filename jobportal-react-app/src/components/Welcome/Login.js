import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, useNavigate, Link } from "react-router-dom";
// import './login.css'

import axios from 'axios';

const Login = () => {
    let [info, setInfo] = useState({});
    const navigate = useNavigate();

    function handleLogin(e) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    }
    console.log("info", info);

    async function sendLogin() {

        console.log("infodata", info);
        let res = await axios.post('/login', info)
        console.log("infodata-Aft", info);
        // console.log(res, "res");
        //if (res.data)
        navigate('/jobcanvas');

    }
    async function create_v() {
        // let res = await axios.post("/useraccount", info)
        // console.log(res.info);
        navigate("/createaccount");

    }
    return (

        <div className="login_v">
            <div className="logo">
                <img src="/images/HV1.png" alt="HV_logo" height='40px' width='200px' />
                <h1> Welcome to Hero Vired JobPortal!</h1>

            </div>
            <div className="container_v">
                <h2> Login details:</h2>

                {/* <div className="login_details"> */}
                <div >
                    <br></br>
                    <br></br>
                    <label htmlFor="email"> E-mail ID: </label>
                    <input type="text" id="email" placeholder='email' name='email' onChange={handleLogin} /><br></br>
                    <label htmlFor="pass"> Password: </label>
                    <input type="text" id="pass" placeholder='password' name='password' onChange={handleLogin} /><br></br>
                    <input type="submit" className="login_submit" onClick={sendLogin} />
                </div>


                <span className="login_span"> Are you a new job seeker? </span><br></br>
                {/* <span> Please create your account </span><br></br> */}
                {/* <input type="submit" Create Account onClick={create_v}  /> */}
                <button onClick={create_v}>Please Create Account </button>


            </div>



        </div>
    );
}

export default Login;
