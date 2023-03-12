import React from "react"
import "./header.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Header() {
        const navigate = useNavigate();

        function dash_v() {
                navigate('/jobcanvas');
        };
        function profile_v() {
                navigate("/profile");

        }
        function appl_v() {
                navigate("/appliedjobs");

        }
        async function logout_v() {

                let res = await axios.get('/logout');
                console.log(res, "res");
                navigate('/logout');
        }

        return (
                <div className="fullheader_v">
                        <div className="h_section1">
                                <div className="logo">
                                        <img src="/images/HV1.png" alt="HV_logo" height='40px' width='200px' />
                                </div>
                        </div>
                        <div className="h_section2">
                                <div onClick={dash_v}>
                                        {/* <img src="/images/Union.png"  alt="back_logo" height='145px' width='85px' /> */}
                                        Dashboard
                                </div>
                                <div onClick={profile_v}>Application Profile</div>
                                <div onClick={appl_v}>Applied Jobs</div>
                                <div>Activity</div>
                                <div>Job Agent</div>
                                <div onClick={logout_v}>Logout</div>

                        </div>

                        <div className="h_section3">
                                <div className="icon1">
                                        <img src="/images/vid.jpg" alt="Vidhya_logo" height='30px' width='30px' />
                                </div>
                        </div>


                </div>
        )
}
