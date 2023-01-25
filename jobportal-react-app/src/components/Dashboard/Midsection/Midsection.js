import React from "react"
import { Link } from "react-router-dom"
import './midsection.css'

export default function Midsection() {
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
                                        Eligiblejobs
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
