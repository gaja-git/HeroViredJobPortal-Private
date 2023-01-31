import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
            [e.target.name]: e.target.value
        })
    }
    console.log(info);

    async function sendProfile() {
        console.log("test profile creation", info)
       console.log("before axios")
        let res = await axios.post("/profile", info)
        console.log(res.info);
        // alert("Candidate profile uploaded successfully!")
        navigate("/");

    }
    return (
        <div className="profile_v">
            <div className="plogo">
                <img src="/images/HV1.png" alt="HV_logo" height='40px' width='200px' />
                <h1> Welcome to Hero Vired JobPortal!</h1>
            </div>
            {/* <h2> Create profile: </h2> */}
            <div className ="formes">
                <super>*</super>
                <label for="firstName"> First Name: </label>
                <input type="text" id="firstName" placeholder='firstName' name='firstname' onChange={handleProfile} /><br></br>
                <super className="not_v"> </super>
                <label for="lastName"> Last Name: </label>
                <input type="text" id="lastName" placeholder='lastName' name='lastname' onChange={handleProfile} /><br></br>
                <super>*</super>
                <label for="email"> Email: </label>
                <input type="text" id="email" placeholder='email' name='email' onChange={handleProfile} /><br></br>
                <super>*</super>
                <label for="phone"> Phone number: </label>
                <input type="number" id="phone" placeholder='Phone-number' name='contact' onChange={handleProfile} /><br></br>
                <super>*</super>
                <label for="address"> Address: </label>
                <input type="textarea" id="address" placeholder='address' name='address' onChange={handleProfile} /><br></br>
                <super className="not_v"> </super>
                <label for="about"> About: </label>
                <input type="text" id="about" placeholder='About' name='about' onChange={handleProfile} /><br></br>
                <super>*</super>
                <label for="pic"> Profile pic: </label>
                <input type="text" id="pic" placeholder='Profile pic' name='profilepic' onChange={handleProfile} /><br></br>
                <super className="not_v"> </super>
                <label for="company"> Current Company: </label>
                <input type="text" id="company" placeholder='Company' name='currentcompany' onChange={handleProfile} /><br></br>
                <super className="not_v"> </super>
                <label for="ctc"> Current CTC: </label>
                <input type="number" id="ctc" placeholder='CTC' name='ctc' onChange={handleProfile} /><br></br>
                <super className="not_v"> </super>
                <label for="experience"> Experience: </label>
                <input type="number" id="experience" placeholder='experience' name='experience' onChange={handleProfile} /><br></br>
                <super className="not_v"> </super>
                <label for="role">Current Role: </label>
                <input type="text" id="role" placeholder='Role' name='currentrole' onChange={handleProfile} /><br></br>
                <super>*</super>
                <label for="skill"> Add skills: </label>
                <input type="text" id="skill" placeholder='Add skills' name='skills' onChange={handleProfile} /><br></br>
                <super>*</super>
                <label for="cv"> Upload CV: </label>
                <input type="text" id="cv" placeholder='Upload CV' name='resumelink' onChange={handleProfile} /><br></br>
                <super className="not_v"> </super>
                <label for="expectedSalary"> Expected Salary: </label>
                <input type="text" id="expectedSalary" placeholder='expectedsalary' name='expectedsalary' onChange={handleProfile} /><br></br>
                <super>*</super>
                <label for="preferredLocation"> Preferred Location: </label>
                <input type="text" id="preferredLocation" placeholder='preferredlocation' name='preferredlocation' onChange={handleProfile} /><br></br>


                <input type="submit" className="profile_submit" onClick={sendProfile} />
                {/* <Link to="/JobCanvas">
            <button>Job Canvas - Update later</button>
            </Link> */}
            </div>
        </div>
    );
}

export default Profile;
