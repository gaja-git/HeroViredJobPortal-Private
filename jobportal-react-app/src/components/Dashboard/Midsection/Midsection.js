import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './midsection.css'
import axios from "axios"

export default function Midsection() {
    let [midalljobData, setMidAllJobData] = useState([])
    let [mideligiblejobData, setMidEligibleAllJobData] = useState([])
    let [midAppliedjobData, setMidAppliedAllJobData] = useState([])
    let [midMyApplicationjobData, setMidMyApplicationJobData] = useState([])
    let [midShortlistedjobData, setMidShortlistedJobData] = useState([])
    let [midRejectedjobData, setMidRejectedJobData] = useState([])
    let [midInterviewingjobData, setMidInterviewingJobData] = useState([])
    let [midOfferRecievedjobData, setMidOfferRecievedJobData] = useState([])



    useEffect(() => {
        const fetchData = async () => {
            let res1 = await axios.get("/jobdetails")
            console.log("res-alljobs", res1.data)
            setMidAllJobData(res1.data)


            let res2 = await axios.get("/eligiblejobs")
            console.log("res-eligiblejobs", res2.data)
            setMidEligibleAllJobData(res2.data)
            console.log(mideligiblejobData.length)


            let res3 = await axios.get("/appliedjobs")
            console.log("res-appliedjobs", res3.data)
            setMidAppliedAllJobData(res3.data)


            let res = await axios.get("/myapplications")
            console.log("res-myapplications", res.data)
            setMidMyApplicationJobData(res.data)

            let sfilterData = midMyApplicationjobData.filter(
                (ele) =>
                    ele.candidateapplicationstatus === "shortlisted"
            );
            console.log("sfilterData", sfilterData)

            setMidShortlistedJobData(sfilterData)
            console.log("ShortlistedJobData", midShortlistedjobData)

            let ifilterData = midMyApplicationjobData.filter(
                (ele) =>
                    ele.candidateapplicationstatus === "Interviewing"
            );
            setMidInterviewingJobData(ifilterData)

            let rfilterData = midMyApplicationjobData.filter(
                (ele) =>
                    ele.candidateapplicationstatus === "Rejected"
            );
            setMidRejectedJobData(rfilterData)

            let ofilterData = midMyApplicationjobData.filter(
                (ele) =>
                    ele.candidateapplicationstatus === "OfferRecieved"
            );
            setMidOfferRecievedJobData(ofilterData)



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
                                <img src="/images/Iconbg.png" alt="back_logo" height='45px' width='45px' />
                                <img className="icon_v" src="/images/allJobs.png" alt="HV_logo" height='30px' width='30px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    All Jobs
                                </div >
                                <div className="all_job_text2_gj">
                                    {midalljobData.length}
                                </div>

                            </div>
                            <div className="all_jobs_right_arrow">
                                <Link to="/alljobs">
                                    <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                                </Link>
                            </div>


                        </div>
                    </div>
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/Iconbg.png" alt="HV_logo" height='45px' width='45px' />
                                <img className="icon_v" src="/images/eJobs.png" alt="HV_logo" height='30px' width='30px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    Eligible Jobs
                                </div >
                                <div className="all_job_text2_gj">
                                    {mideligiblejobData.length}
                                </div>
                            </div>
                            <div className="all_jobs_right_arrow">
                                <Link to="/eligiblejobs">
                                    <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/Iconbg.png" alt="back_logo" height='45px' width='45px' />
                                <img className="icon_v" src="/images/appliedJobs.png" alt="HV_logo" height='30px' width='30px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">

                                    Applied jobs

                                </div >
                                <div className="all_job_text2_gj">
                                    {midAppliedjobData.length}
                                </div>
                            </div>
                            <div className="all_jobs_right_arrow">
                                <Link to="/appliedjobs">
                                    <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                                </Link>
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
                                <img src="/images/Iconbg.png" alt="back_logo" height='45px' width='45px' />
                                <img className="icon_v" src="/images/shortlisted.png" alt="HV_logo" height='30px' width='30px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    Shortlisted
                                </div >
                                <div className="all_job_text2_gj">
                                    {midShortlistedjobData.length}
                                </div>
                            </div>
                            <div className="all_jobs_right_arrow">
                                <Link to="/shortlisted">
                                    <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/Iconbg.png" alt="back_logo" height='45px' width='45px' />
                                <img className="icon_v" src="/images/interview.png" alt="HV_logo" height='30px' width='30px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">

                                    Interviewing

                                </div >
                                <div className="all_job_text2_gj">
                                    {midInterviewingjobData.length}
                                </div>
                            </div>
                            <div className="all_jobs_right_arrow">
                                <Link to="/interviewing">
                                    <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/Iconbg.png" alt="back_logo" height='45px' width='45px' />
                                <img className="icon_v" src="/images/reject.png" alt="HV_logo" height='30px' width='30px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    Rejected
                                </div >
                                <div className="all_job_text2_gj">
                                    {midRejectedjobData.length}
                                </div>
                            </div>
                            <div className="all_jobs_right_arrow">
                                <Link to="/rejected">
                                    <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <img src="/images/Iconbg.png" alt="back_logo" height='45px' width='45px' />
                                <img className="icon_v" src="/images/offer.png" alt="HV_logo" height='30px' width='30px' />
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    OfferReceived
                                </div >
                                <div className="all_job_text2_gj">
                                    {midOfferRecievedjobData.length}
                                </div>
                            </div>
                            <div className="all_jobs_right_arrow">
                                <Link to="/offerreceived">
                                    <img src="/images/arrow.png" alt="arrow_logo" height='20px' width='20px' />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div></div>
        </div >

    )
}
