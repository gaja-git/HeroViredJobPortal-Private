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
            <label for="firstName"> First Name: </label>
            <input type="text" id="firstName" placeholder='firstName' name='firstName'  onChange={handleProfile}/><br></br>
            <label for="lastName"> Last Name: </label>
            <input type="text" id="lastName" placeholder='lastName' name='lastName'  onChange={handleProfile}/><br></br>
            <label for="email"> Email: </label>
            <input type="text" id="email" placeholder='email' name='email'  onChange={handleProfile}/><br></br>
            <label for="phone"> Phone number: </label>
            <input type="number" id="phone" placeholder='Phone-number' name='contact'  onChange={handleProfile}/><br></br>
            <label for="address"> Address: </label>
            <input type="textarea" id="address" placeholder='address' name='address'  onChange={handleProfile}/><br></br>
            <label for="about"> About: </label>
            <input type="text" id="about" placeholder='About' name='about'  onChange={handleProfile}/><br></br>
            <label for="pic"> Profile pic: </label>
            <input type="text" id="pic" placeholder='Profile pic' name='profilePic' onChange={handleProfile}/><br></br>
            <label for="company"> Current Company: </label>
            <input type="text" id="company" placeholder='Company' name='currentCompany'  onChange={handleProfile}/><br></br>
            <label for="ctc"> Current CTC: </label>
            <input type="number" id="ctc"  placeholder='CTC' name='ctc'  onChange={handleProfile}/><br></br>
            <label for="experience"> Experience: </label>
            <input type="number" id="experience"  placeholder='experience' name='experience'  onChange={handleProfile}/><br></br>
            <label for="role">Current Role: </label>
            <input type="text" id="role" placeholder='Role' name='currentRole'  onChange={handleProfile}/><br></br>
            <label for="skill"> Add skills: </label>
            <input type="text" id="skill" placeholder='Add skills' name='skills'  onChange={handleProfile}/><br></br>
            <label for="cv"> Upload CV: </label>
            <input type="text" id="cv" placeholder='Upload CV' name='resumeLink'  onChange={handleProfile}/><br></br>
            <label for="expectedSalary"> Expected Salary: </label>
            <input type="text" id="expectedSalary" placeholder='expectedSalary' name='expectedSalary'  onChange={handleProfile}/><br></br>
            <label for="preferredLocation"> Preferred Location: </label>
            <input type="text" id="preferredLocation" placeholder='preferredLocation' name='preferredLocation'  onChange={handleProfile}/><br></br>
           

            <input type="submit" className ="profile_submit" onClick={sendProfile} />
            {/* <Link to="/JobCanvas">
            <button>Job Canvas - Update later</button>
            </Link> */}
            </form>
        </div>
    );
}

export default Profile;
