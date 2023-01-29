import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
import './login.css'

import axios from 'axios';

const Login = () => {
    let [ldata, setLdata] = useState({});
    const navigate = useNavigate();

    function handleLogin(e) {
        setLdata({
            ...ldata,
            [e.target.name]: e.target.value
        });
    }
    console.log("ldata", ldata);

    async function sendLogin() {

        console.log(ldata);
        let res = await axios.post("/login", ldata)
        console.log(res, "res");
        // if (res.data)
        navigate('/jobcanvas');

    }
    function create_v() {
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

                <div className="login_details">

                    <br></br>
                    <br></br>
                    <label> E-mail ID: </label>
                    <input type="text" id="email" placeholder='email' name='email' onChange={handleLogin} /><br></br>
                    <label> Password: </label>
                    <input type="password" id="pass" placeholder='password' name='password' onChange={handleLogin} /><br></br>
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
