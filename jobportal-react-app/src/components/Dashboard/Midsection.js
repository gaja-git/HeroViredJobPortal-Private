import React from "react"
import './midsection.css'

export default function Midsection() {
    return (
        <div className="midsection_gj">

            <div className="snapshot_outside_boundary">
                <h5 className="snapshot">Snapshots</h5>
                <div className="snapshot_inner_item_boundary">
                    <div className="all_job_section">
                        <div className="all_job_inner_frame">
                            <div className="all_job_icon_frame all_job_icon_ecllipse">
                                <div className=" all_job_icon_vector">
                                    <div></div>
                                </div>
                            </div>
                            <div className="_all_job_text_display">
                                <div className="all_job_text1">
                                    All Jobs
                                </div >
                                <div className="all_job_text2">
                                    100
                                </div>
                            </div>
                            <div className="all_jobs_right_arrow">

                            </div>

                        </div>
                    </div>
                    <div>Eligible</div>
                    <div>Applied Job</div>
                </div>
            </div>
            <div className="myapp_outside_boundary">
                <h5> My Application</h5>
                <div>ShortListed</div>
                <div>Interviewing</div>
                <div>Rejected</div>
                <div>Offer Recieved</div>
            </div>
            <div></div>
        </div >

    )
}
