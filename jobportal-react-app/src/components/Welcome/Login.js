import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './login.css'

import axios from 'axios';

const Login = () => {
    let [info, setInfo] = useState({});
    const navigate = useNavigate();
    const handleLogin = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    console.log(info);

    async function sendLogin() {
        // let res = await axios.post("http://127.0.0.1:3001/bloguser", info)
        // console.log(res.info);
        navigate("/profile");

    }
    async function create_v() {
        // let res = await axios.post("http://127.0.0.1:3001/bloguser", info)
        // console.log(res.info);
        navigate("/createaccount");

    }
    return (
        
        <div className ="login_v"> 
            <h1> Welcome to Hero Vired JobPortal!!!</h1>
            <h2> Please enter login details here:</h2>
           
                    <div className="login_details">
                    <form >
                        <br></br>
                        <br></br>
                        <label for="email"> E-mail ID: </label>
                        <input type="text" id="email" placeholder='email' name='email' onChange={handleLogin} /><br></br>
                        <label for="pass"> Password: </label>
                        <input type="text" id="p" placeholder='password' name='password' onChange={handleLogin} /><br></br>
                        <input type="submit" onClick={sendLogin} />
                    </form>
            
            
                    <span> Are you a candidate searching for job? </span><br></br>
                    <span> Please create your account </span><br></br>
                    {/* <input type="submit" Create Account onClick={create_v}  /> */}
                    <button onClick={create_v}>Create Account </button>

                    {/* <Link to="/createaccount">
                    <button>Create account!</button>
                    </Link> */}
                    </div>
            
                
            
            

        
        </div>
    );
}

export default Login;
