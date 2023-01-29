import React, { useState, useEffect } from "react"
import Header from "../../Dashboard/Header/Header"
import axios from "axios"
import Searchbox from "../../Dashboard/Searchbox/Searchbox"
import "./alljobs.css"


export default function Alljobs() {
    let [alljobData, setAllJobData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("/jobdetails")
            console.log("res", res.data)
            setAllJobData(res.data)
        }
        fetchData()
    }, [])
    return (
        <div className="alljobs">
            <div className="alljobs_header">
                <Header />
            </div>
            <div className="alljobs_Searchbox">
                <h4>Jobs in Domain</h4>
                <Searchbox></Searchbox>
            </div>
            <div className="alljobs_job_content_container_gj">
                {alljobData.length ? (alljobData.map((ele) => (<div className="alljobs_job_content_gj">
                    <div className="alljobs_job_title_gj">
                        <h3>{ele.jobtitle}</h3>
                        <div className="app_all">

                        <button>Apply</button>
                        </div>

                    </div>

                    <div className="alljobs_job_params_gj">
                        <div className="alljobs_job_location_gj">
                            <span><i class="fa fa-map-marker"></i> {ele.location}</span></div>
                        <div className="alljobs_job_type_gj"><span> <i class="fa fa-suitcase"></i>{ele.jobtype}</span></div>
                        <div className="alljobs_job_cost_gj"><span><i class="fa fa-money"></i>{ele.salary}</span></div>
                        <div className="alljobs_job_comp_gj"><span><i class="fa fa-building-o"></i>{ele.companyname}</span></div>

                    </div>
                    <div className="alljobs_job_details_gj">
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
                        <div className="job_type_gj"><span> <i class="fa fa-suitcase"></i>full time </span></div>
                        <div className="job_cost_gj"><span><i class="fa fa-money"></i>168$</span></div>
                        <div className="job_comp_gj"><span><i class="fa fa-building-o"></i>CEIPAL</span></div>
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