import React,{useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './profile.css'
// import image from "../public/images/profile.jpg"


const Profile = () => {
    let [info, setInfo] = useState({});
    const navigate = useNavigate();
    const handleProfile = (e) => {
        setInfo({
            ...info,
         [e.target.name] : e.target.value
     })
    }
    console.log(info);

    async function sendProfile() {
        // let res = await axios.post("http://127.0.0.1:3001/bloguser", info)
        // console.log(res.info);
        alert("Candidate profile uploaded successfully!")
        navigate("/JobCanvas");

    }
    return (
        <div className ="profile_v">
            <h1> Please enter your profile details: </h1>
            <form>
            <label for="phone"> Phone number: </label>
            <input type="number" id="phone" placeholder='Phone-number' name='phone'  onChange={handleProfile}/><br></br>
            <label for="company"> Company: </label>
            <input type="text" id="company" placeholder='Company' name='Company'  onChange={handleProfile}/><br></br>
            <label for="ctc"> Current CTC: </label>
            <input type="number" id="ctc"  placeholder='CTC' name='CTC'  onChange={handleProfile}/><br></br>
            <label for="role"> Role: </label>
            <input type="text" id="role" placeholder='Role' name='Role'  onChange={handleProfile}/><br></br>
            <label for="about"> About: </label>
            <input type="text" id="about" placeholder='About' name='About'  onChange={handleProfile}/><br></br>
            <label for="pic"> Profile pic: </label>
            <input type="text" id="pic" placeholder='Profile pic' name='Profile pic' onChange={handleProfile}/><br></br>
            <label for="cv"> Upload CV: </label>
            <input type="text" id="cv" placeholder='Upload CV' name='Upload CV'  onChange={handleProfile}/><br></br>
            <label for="skill"> Add skills: </label>
            <input type="text" id="skill" placeholder='Add skills' name='Add skills'  onChange={handleProfile}/><br></br>

            <input type="submit" className ="profile_submit" onClick={sendProfile} />
            {/* <Link to="/JobCanvas">
            <button>Job Canvas - Update later</button>
            </Link> */}
            </form>
        </div>
    );
}

export default Profile;
