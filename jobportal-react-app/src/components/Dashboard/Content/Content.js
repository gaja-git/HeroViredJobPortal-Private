import React, { useState, useEffect, useRef, useContext } from "react"
import './content.css'
import axios from "axios"
import DataContext from "../../context/DataContext";


export default function Content() {
        let [jobData, setJobData] = useState([])
        let [applyText, setApplyText] = useState("Apply")
        const applyref = useRef("Apply")
        let ctx = useContext(DataContext);

        useEffect(() => {
                console.log("contents-useeffect")
                const fetchData = async () => {
                        let res = await axios.get("/jobdetails")
                        console.log("res-jobdetails", res.data)
                        setJobData(res.data)
                }
                fetchData()

        }, [])

        function onApplyClick() {
                console.log("inside onclick")
                // if (applyText === "Apply")
                setApplyText("Applied");
                // if (applyref.current) {
                //         console.log("inside apply ref")
                //         // applyref.current.innerText = "Applied"
                //         console.log("after applied")
                // }
                // let sidebar = document.querySelector(".app")
                // let childsidebar = sidebar.children;
                // for (let i = 0; i < childsidebar.length; i++) {
                //         childsidebar[i].innerText = "Applied"
                // }
                //console.log("appjob", appjob)
                //SetAppliedData(appjob)
        }

        // const SetAppliedData = async (appjobdata) => {
        //         let today = new Date()
        //         //let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()
        //         let date = today.getFullYear() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getDate()
        //         console.log(date)
        //         let candAppData = {
        //                 jobid: appjobdata.id,
        //                 userid: ctx.userId,
        //                 jobcoode: appjobdata.jobcode,
        //                 applieddate: date,
        //                 candidateapplicationstatus: "Shortlisted",
        //                 location: appjobdata.location,
        //                 posteddate: appjobdata.location
        //         }
        //         console.log("candAppData", candAppData)
        //         let res = await axios.post("/candidateapplication", candAppData)
        //         console.log("resCanApplied data", res.data)

        // }
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



        return (
                <div className="dashBoard_job_content_container_gj">
                        {jobs.length ? (jobs.map((ele) => (<div className="dashBoard_job_content_gj">
                                <div className="dashBoard_job_title_gj">
                                        <h3>{ele.jobtitle}</h3>
                                        <div className="app">
                                                <button onClick={onApplyClick()}>{applyText}</button>
                                        </div>
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