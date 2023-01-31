import React, { useState, useEffect } from "react"
import './content.css'
import axios from "axios"


export default function Content() {
        let [jobData, setJobData] = useState([])
        let isapplied = true;
        const [isDisabled, setDisabled] = useState(false);

        function updateApplied() {

                setDisabled(true);
        }

        function applied() {
                // let sidebar = document.querySelector(".app")
                // let childsidebar = sidebar.children;
                // for (let i = 0; i < childsidebar.length; i++) {
                //         childsidebar[i].innerText = "Applied"
                // }
        }

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
                // let sidebar = document.querySelector("button");
                // let childsidebar = sidebar.children;
                // for (let i=0; i<childsidebar.length;i++){
                //         childsidebar[i].addEventListener("mouseenter", ()=>{
                //         childsidebar[i].innerText = "Applied"
                //         })
                // }
                const fetchData = async () => {
                        let res = await axios.get("/jobdetails")
                        console.log("res", res.data)
                        setJobData(res.data)
                }
                fetchData()


        }, [])
        return (
                <div className="dashBoard_job_content_container_gj">
                        {jobs.length ? (jobs.map((ele) => (<div className="dashBoard_job_content_gj">
                                <div className="dashBoard_job_title_gj">
                                        <h3>{ele.jobtitle}</h3>
                                        <div className="app">
                                                {isapplied ?
                                                        <button className={isDisabled ? 'hidden' : 'button'} type="button" onClick={updateApplied}>
                                                                <label>Apply</label>
                                                                {/* Apply */}
                                                        </button>
                                                        : <label>Applied</label>}
                                        </div>
                                        <span className={isDisabled ? 'appliedlabel' : 'hidden'}>Applied</span>
                                </div>

                                <div className="dashBoard_job_params_gj">
                                        <div className="dashBoard_job_location_gj">
                                                <span><i class="fa fa-map-marker"></i> {ele.location}</span></div>
                                        <div className="dashBoard_job_type_gj"><span> <i class="fa fa-suitcase"></i>{ele.jobtype}</span></div>
                                        <div className="dashBoard_job_cost_gj"><span><i class="fa fa-money"></i>{ele.salary}</span></div>
                                        <div className="dashBoard_job_comp_gj"><span><i class="fa fa-building-o"></i>{ele.companyname}</span></div>

                                </div>
                                <div className="dashBoard_job_details_gj">
                                        <p> {ele.jobdescription}</p>
                                </div>

                        </div>))) : (
                                <div>No Job Data</div>
                        )}
                        {/* <div className="job_content_gj">
                                <div className="job_title_gj">
                                        <h3>JPC-169 Developer</h3>
                                        <button>Apply</button>
                                </div>

                                <div className="job_params_gj">
                                        <div className="job_location_gj">
                                                <span><i class="fa fa-map-marker"></i> Mumbai,Maharastra</span></div>
                                        <div className="job_type_gj"><span> <i class="fa fa-suitcase"></i>full time </span></div>
                                        <div className="job_cost_gj"><span><i class="fa fa-money"></i>168$</span></div>
                                        <div className="job_comp_gj"><span><i class="fa fa-building-o"></i>CEIPAL</span></div>

                                </div>
                                <div className="job_details_gj">
                                        <p> This job is on full stack development sfdsdfs sfkjirein nvioerjifj sdfsjff
                                                sfsjfkfdjf skdjfioerojj</p>
                                </div>

                        </div> 
                        <div className="job_content_gj">
                                <div className="job_title_gj">
                                        <h3>JPC-169 Developer</h3>
                                        <button>Apply</button>
                                </div>
                                <div className="job_params_gj">
                                        <div className="job_location_gj">
                                                <span><i class="fa fa-map-marker"></i> Mumbai,Maharastra</span></div>
                                        <div className="job_type_gj"><span> <i class="fa fa-suitcase"></i>full time </span></div>
                                        <div className="job_cost_gj"><span><i class="fa fa-money"></i>168$</span></div>
                                        <div className="job_comp_gj"><span><i class="fa fa-building-o"></i>CEIPAL</span></div>
                                </div>
                                <div className="job_details_gj">
                                        <p>This job is on full stack development sfdsdfs sfkjirein nvioerjifj sdfsjff
                                                sfsjfkfdjf skdjfioerojj</p>
                                </div>

                        </div>*/}
                </div>
        )
}