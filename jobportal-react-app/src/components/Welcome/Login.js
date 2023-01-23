import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const Login = () => {
    let [info, setInfo] = useState({});
    const navigate = useNavigate();
    const handleLogin = (e) => {
        setInfo({
            ...info,
         [e.target.name] : e.target.value
     })
    }
    console.log(info);

    async function sendLogin() {
        // let res = await axios.post("http://127.0.0.1:3001/bloguser", info)
        // console.log(res.info);
        navigate("/profile");

    }
    return (
        <div>
            <h1> Welcome to Job Portal Page GAVI!!!</h1>
            <h2> Please enter login details here:</h2>


            <input type="text" placeholder='email' name='email'  onChange={handleLogin}/>
            <input type="text" placeholder='password' name='password' onChange={handleLogin}/>
            <input type="submit" onClick={sendLogin} />
            {/* <Link to="/profile">
            <button>Please create your profile</button>
            </Link> */}

            <p> Are you a candidate searching for job? </p>
                <p> Please create your account </p>
            <Link to="/createaccount">
            <button>Create account!</button>
            </Link>
            
        </div>
    );
}

export default Login;
