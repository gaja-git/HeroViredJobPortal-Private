import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './midsection.css'
import axios from "axios"

export default function Midsection() {
    let [midalljobData, setMidAllJobData] = useState([])
    let [midelegiblejobData, setEligibleAllJobData] = useState([])
    let [midAppliedjobData, setAppliedAllJobData] = useState([])

    // const jobs = [
    //     {
    //         jobtitle: "Lead Business Analyst",
    //         jobdescription: "Looking for a highly motivated and experienced Pre-Sales Lead/Architect with retail, corporate and digital banking domain experience. You will be responsible for building the blueprints, proposals, proof-of-concepts, solutions to support the product roadmap and various RFPs at the pre-sales stage.",
    //         companyname: "Lentra AI",
    //         location: "Pune",
    //         jobtype: "Full Time",
    //         posteddate: '2022-12-22',
    //         salary: 2200000,
    //         domain: "Cloud",
    //         jobcode: "A101",
    //         skillsrequired: "AWS,Java",
    //         applicationstatus: "Open"
    //     },
    //     {
    //         jobtitle: "Technical lead",
    //         jobdescription: "Looking for a highly motivated and experienced technical lead with problem solving mindset.Very strong in communication",
    //         companyname: "Quest",
    //         location: "Banglore",
    //         jobtype: "Full Time",
    //         posteddate: "2022-12-22",
    //         salary: 2200000,
    //         domain: "Testing",
    //         jobcode: "B102",
    //         skillsrequired: "c++,c#",
    //         applicationstatus: "Open"
    //     }
    // ]

    useEffect(() => {
        const fetchData = async () => {
            let res1 = await axios.get("/jobdetails")
            console.log("res-alljobs", res1.data)
            setMidAllJobData(res1.data)


            let res2 = await axios.get("/eligiblejobs")
            console.log("res-eligiblejobs", res2.data)
            setEligibleAllJobData(res2.data)
            console.log(midelegiblejobData.length)


            let res3 = await axios.get("/appliedjobs")
            console.log("res-appliedjobs", res3.data)
            setAppliedAllJobData(res3.data)


        }
        fetchData()
    }, [])

    return (
        <div className="midsection_gj">

            <div className="snapshot_outside_boundary_gj">
                <h4 className="snapshot_gj">Snapshots</h4>
                <div className="snapshot_inner_item_boundary_gj">

                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                            <img src="/images/Iconbg.png"  alt="back_logo" height='45px' width='45px' />
                            <img className = "icon_v" src="/images/allJobs.png" alt="HV_logo" height='30px' width='30px' />
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
                              
                            </div>
                            <div className="all_jobs_right_arrow">
                                <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                            </div>


                        </div>
                    </div>
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                            <img src="/images/Iconbg.png"  alt="HV_logo" height='45px' width='45px' />
                            <img className = "icon_v" src="/images/eJobs.png" alt="HV_logo" height='30px' width='30px' />
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
                            <div className="all_jobs_right_arrow">
                                <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />

                            </div>

                        </div>
                    </div>
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                            <img src="/images/Iconbg.png"  alt="back_logo" height='45px' width='45px' />
                            <img className = "icon_v" src="/images/appliedJobs.png" alt="HV_logo" height='30px' width='30px' />
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
                            <div className="all_jobs_right_arrow">
                            <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="myapp_outside_boundary_gj">
                <h4 className="myapp_gj"> My Application</h4>
                <div className="myapp_inner_item_boundary_gj">
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                             <img src="/images/Iconbg.png"  alt="back_logo" height='45px' width='45px' />
                             <img className = "icon_v" src="/images/shortlisted.png" alt="HV_logo" height='30px' width='30px' />
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
                            <div className="all_jobs_right_arrow">
                            <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                            </div>
                        </div>
                    </div>

                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                            <img src="/images/Iconbg.png"  alt="back_logo" height='45px' width='45px' />
                            <img className = "icon_v" src="/images/interview.png" alt="HV_logo" height='30px' width='30px' />
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
                            <div className="all_jobs_right_arrow">
                            <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                            </div>
                        </div>
                    </div>
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                            <img src="/images/Iconbg.png"  alt="back_logo" height='45px' width='45px' />
                            <img className = "icon_v" src="/images/reject.png" alt="HV_logo" height='30px' width='30px' />
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
                            <div className="all_jobs_right_arrow">
                            <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                            </div>
                        </div>
                    </div>

                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                            <img src="/images/Iconbg.png"  alt="back_logo" height='45px' width='45px' />
                            <img className = "icon_v" src="/images/offer.png" alt="HV_logo" height='30px' width='30px' />
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
                            <div className="all_jobs_right_arrow">
                            <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div></div>
        </div >

    )
}
