

import React, { useState, useEffect } from "react"
import Header from "../../Dashboard/Header/Header"
import axios from "axios"
import Searchbox from "../../Dashboard/Searchbox/Searchbox"
import './appliedjobs.css'




export default function Appliedjobs() {
    let [appliedjobData, setAppliedJobData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("/appliedjobs")
            console.log("res", res.data)
            setAppliedJobData(res.data)
        }
        fetchData()
    }, [])
    return (
        <div className="appliedjobs_v">
            <Header />
            <h4>Applied Jobs</h4>
            {/* <h6> Back to search results </h6> */}
            <Searchbox></Searchbox>
            <div className="appliedjobs_job_content_container_gj">
                {appliedjobData.length ? (appliedjobData.map((ele) => (<div className="appliedjobs_job_content_gj">
                    <div className="appliedjobs_job_title_gj">
                        <h3>{ele.jobtitle}</h3>
                        <div className="app_app">

                            <button>Apply</button>
                        </div>
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