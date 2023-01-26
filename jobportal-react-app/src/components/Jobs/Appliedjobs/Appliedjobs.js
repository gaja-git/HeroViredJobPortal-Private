

import React, { useState, useEffect } from "react"
import Header from "../../Dashboard/Header/Header"
import axios from "axios"
import Searchbox from "../../Dashboard/Searchbox/Searchbox"
import './appliedjobs.css'




export default function Appliedjobs() {
    let [appliedjobData, setAppliedJobData] = useState([])
    const jobs = [
        {
            jobtitle: "Lead Business Analyst",
            jobdescription: "Looking for a highly motivated and experienced Pre-Sales Lead/Architect with retail, corporate and digital banking domain experience. You will be responsible for building the blueprints, proposals, proof-of-concepts, solutions to support the product roadmap and various RFPs at the pre-sales stage.",
            companyname: "Lentra AI",
            location: "Pune",
            jobtype: "Full Time",
            posteddate: '2022-12-22',
            salary: 2200000,
            domain: "Cloud",
            jobcode: "A101",
            skillsrequired: "AWS,Java",
            applicationstatus: "Open"
        },
        {
            jobtitle: "Technical lead",
            jobdescription: "Looking for a highly motivated and experienced technical lead with problem solving mindset.Very strong in communication",
            companyname: "Quest",
            location: "Banglore",
            jobtype: "Full Time",
            posteddate: "2022-12-22",
            salary: 2200000,
            domain: "Testing",
            jobcode: "B102",
            skillsrequired: "c++,c#",
            applicationstatus: "Open"
        }
    ]

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("/appliedjobs")
            console.log("res", res.data)
            setAppliedJobData(res.data)
        }
        fetchData()
    }, [])
    return (
        <div className="appliedjobs">
            <Header />
            <div className="Searchbox">
                <h4>Applied Jobs</h4>
                <Searchbox></Searchbox>
            </div>
            <div className="appliedjobs_job_content_container_gj">
                {jobs.length ? (jobs.map((ele) => (<div className="appliedjobs_job_content_gj">
                    <div className="appliedjobs_job_title_gj">
                        <h3>{ele.jobtitle}</h3>
                        <button>Apply</button>
                    </div>

                    <div className="appliedjobs_job_params_gj">
                        <div className="appliedjobs_job_location_gj">
                            <span><i class="fa fa-map-marker"></i> {ele.location}</span></div>
                        <div className="appliedjobs_job_type_gj"><span> <i class="fa fa-suitcase"></i>{ele.jobtype}</span></div>
                        <div className="appliedjobs_job_cost_gj"><span><i class="fa fa-money"></i>{ele.salary}</span></div>
                        <div className="appliedjobs_job_comp_gj"><span><i class="fa fa-building-o"></i>{ele.companyname}</span></div>

                    </div>
                    <div className="appliedjobs_job_details_gj">
                        <p> {ele.jobdescription}</p>
                    </div>

                </div>))) : (
                    <div>No Job Data</div>
                )}
                {/* <div className="job_content_gj">
                    <div className="job_title_gj">
                        <p>JPC-169 Developer</p>
                        <button>Apply</button>
                    </div>
                    <div className="job_params_gj">
                        <div className="job_location_gj">
                            <span><i class="fa fa-map-marker"></i> Mumbai,Maharastra</span></div>
                        <div className="job_type_gj"> part time</div>
                        <div className="job_cost_gj">36$</div>
                        <div className="job_comp_gj">CEIPAL</div>
                    </div>
                    <div className="job_details_gj">
                        <p> This job is on full stack development sfdsdfs sfkjirein nvioerjifj sdfsjff
                            sfsjfkfdjf skdjfioerojj</p>
                    </div>

                </div> */}
            </div>
        </div>
    )
}