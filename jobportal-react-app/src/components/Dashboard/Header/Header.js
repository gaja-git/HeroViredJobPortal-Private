import React from "react"
import "./header.css"

export default function Header() {
        return (
                <div className="fullheader_v">
                        <div className="h_section1">
                                <div className="logo">
                                        <img src="/images/HV Logo.png" alt="HV_logo" height='40px' width='200px' />
                                </div>
                        </div>
                        <div className="h_section2">
                                <div>Dashboard</div>
                                <div>Application Profile</div>
                                <div>Applied Jobs</div>
                                <div>Activity</div>
                                <div>Job Agent</div>
                        </div>
                        <div className="h_section3">
                                <div className="icon1">
                                <img src="/images/vid.jpg" alt="Vidhya_logo" height='30px' width='30px' />
                                 </div>                        
                         </div>


                </div>
        )
}
