import React,{useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


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
        navigate("/JobCanvas");

    }
    return (
        <div>
            <input type="number" placeholder='Phone-number' name='phone'  onChange={handleProfile}/>
            <input type="text" placeholder='Company' name='Company'  onChange={handleProfile}/>
            <input type="number" placeholder='CTC' name='CTC'  onChange={handleProfile}/>
            <input type="text" placeholder='Role' name='Role'  onChange={handleProfile}/>
            <input type="text" placeholder='About' name='About'  onChange={handleProfile}/>
            <input type="text" placeholder='Profile pic' name='Profile pic' onChange={handleProfile}/>
            <input type="text" placeholder='Upload CV' name='Upload CV'  onChange={handleProfile}/>
            <input type="text" placeholder='Add skills' name='Add skills'  onChange={handleProfile}/>

            <input type="submit" onClick={sendProfile} />
            {/* <Link to="/JobCanvas">
            <button>Job Canvas - Update later</button>
            </Link> */}
            
        </div>
    );
}

export default Profile;
