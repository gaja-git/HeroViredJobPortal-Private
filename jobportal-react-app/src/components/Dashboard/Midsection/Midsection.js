import React from "react"
import { Link } from "react-router-dom"
import './midsection.css'

export default function Midsection() {
    let [midalljobData, setMidAllJobData] = useState([])
    let allJobCount, eligibleJobCount, appliedJobCount
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
            let res1 = await axios.get("/jobdetails")
            console.log("res-alljobs", res1.data)
            setMidAllJobData(res1.data)
            allJobCount = midalljobData.length

            let res2 = await axios.get("/eligiblejobs")
            console.log("res-eligiblejobs", res2.data)
            setMidAllJobData(res2.data)
            eligibleJobCount = midalljobData.length

            let res3 = await axios.get("/appliedjobs")
            console.log("res-appliedjobs", res3.data)
            setMidAllJobData(res3.data)
            allJobCount = midalljobData.length

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
                                <i className="fa fa-user-circle" ></i>
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    <Link to="/alljobs">
                                        All Jobs
                                    </Link>
                                </div >
                                <div className="all_job_text2_gj">
                                    100
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
                                <i class="fa fa-user-circle" ></i>
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">

                                    <Link to="/eligiblejobs">
                                        Eligible Jobs
                                    </Link>
                                </div >
                                <div className="all_job_text2_gj">
                                    100
                                </div>
                            </div>
                            {/* <div className="all_jobs_right_arrow">
                            </div> */}

                        </div>
                    </div>
                    <div className="all_job_section_gj">
                        <div className="all_job_inner_frame_gj">
                            <div className="all_job_icon_frame_gj">
                                <i class="fa fa-user-circle" ></i>
                            </div>
                            <div className="all_job_text_display_gj">
                                <div className="all_job_text1_gj">
                                    <Link to="/appliedjobs">
                                        Applied jobs
                                    </Link>
                                </div >
                                <div className="all_job_text2_gj">
                                    50
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
                                <i class="fa fa-user-circle" ></i>
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
                                <i class="fa fa-user-circle" ></i>
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
                                <i class="fa fa-user-circle" ></i>
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
                                <i class="fa fa-user-circle" ></i>
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
