import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, useNavigate, Link } from "react-router-dom";
import './login.css'

import axios from 'axios';

const Login = () => {
    let [info, setInfo] = useState([]);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    console.log("info", info);

    async function sendLogin() {

        console.log(info);
        let res = await axios.post("/login", info)

        console.log(res, "res");
        if (res.data)
            navigate("/profile");

    }
    async function create_v() {
        // let res = await axios.post("http://127.0.0.1:3001/bloguser", info)
        // console.log(res.info);
        navigate("/createaccount");

    }
    return (

        <div className="login_v">
            <h1> Welcome to Hero Vired JobPortal!!!</h1>
            <h2> Please enter login details here:</h2>

            <div className="login_details">
                <form >
                    <br></br>
                    <br></br>
                    <label for="email"> E-mail ID: </label>
                    <input type="text" id="email" placeholder='email' name='email' onChange={handleLogin} /><br></br>
                    <label for="pass"> Password: </label>
                    <input type="text" id="pass" placeholder='password' name='password' onChange={handleLogin} /><br></br>
                    <input type="submit" className="login_submit" onClick={sendLogin} />
                </form>


                <span className="login_span"> Are you a new job seeker? </span><br></br>
                {/* <span> Please create your account </span><br></br> */}
                {/* <input type="submit" Create Account onClick={create_v}  /> */}
                <button onClick={create_v}>Please Create Account </button>

                {/* <Link to="/createaccount">
                    <button>Create account!</button>
                    </Link> */}
            </div>






        </div>
    );
}

export default Login;
