import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './midsection.css'
import axios from "axios"

export default function Midsection() {
    let [midalljobData, setMidAllJobData] = useState([])
    let [midelegiblejobData, setMidEligibleAllJobData] = useState([])
    let [midAppliedjobData, setMidAppliedAllJobData] = useState([])



    useEffect(() => {
        const fetchData = async () => {
            let res1 = await axios.get("/jobdetails")
            console.log("res-alljobs", res1.data)
            setMidAllJobData(res1.data)


            let res2 = await axios.get("/eligiblejobs")
            console.log("res-eligiblejobs", res2.data)
            setMidEligibleAllJobData(res2.data)
            console.log(midelegiblejobData.length)


            let res3 = await axios.get("/appliedjobs")
            console.log("res-appliedjobs", res3.data)
            setMidAppliedAllJobData(res3.data)


        }
        fetchData()
    }, [])

    return (
        <div className="midsection_gj">

            <div className="snapshot_outside_boundary_gj">
                <h5 className="snapshot_gj">Snapshots</h5>
                <div className="snapshot_inner_item_boundary_gj">

                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/allJobs.png" alt="HV_logo" height='40px' width='40px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    <Link to="/alljobs">
                                        All Jobs
                                    </Link>
                                </div >
                                <div className="all_job_text2_gj">
                                    {midalljobData.length}
                                </div>
                                {/* <div className="all_jobs_right_arrow">
                                <button></button>
                                </div> */}
                            </div>


                        </div>
                    </div>
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/eJobs.png" alt="HV_logo" height='40px' width='40px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">

                                    <Link to="/eligiblejobs">
                                        Eligible Jobs
                                    </Link>
                                </div >
                                <div className="all_job_text2_gj">
                                    {midelegiblejobData.length}
                                </div>
                            </div>
                            {/* <div className="all_jobs_right_arrow">
                            </div> */}

                        </div>
                    </div>
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/appliedJobs.png" alt="HV_logo" height='40px' width='40px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    <Link to="/appliedjobs">
                                        Applied jobs
                                    </Link>
                                </div >
                                <div className="all_job_text2_gj">
                                    {midAppliedjobData.length}
                                </div>
                            </div>
                            {/* <div className="all_jobs_right_arrow">
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
            <div className="myapp_outside_boundary_gj">
                <h5 className="myapp_gj"> My Application</h5>
                <div className="myapp_inner_item_boundary_gj">
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/shortlisted.png" alt="HV_logo" height='40px' width='40px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    <Link to="/shortlisted">
                                        Shortlisted
                                    </Link>
                                </div >
                                <div className="all_job_text2_gj">
                                    100
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/interview.png" alt="HV_logo" height='40px' width='40px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    <Link to="/interviewing">
                                        Interviewing
                                    </Link>
                                </div >
                                <div className="all_job_text2_gj">
                                    35
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/shortlisted.png" alt="HV_logo" height='40px' width='40px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    <Link to="/rejected">
                                        Rejected
                                    </Link>
                                </div >
                                <div className="all_job_text2_gj">
                                    100
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/offer.png" alt="HV_logo" height='40px' width='40px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    <Link to="/offerreceived">
                                        OfferReceived
                                    </Link>
                                </div >
                                <div className="all_job_text2_gj">
                                    30
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div></div>
        </div >

    )
}
