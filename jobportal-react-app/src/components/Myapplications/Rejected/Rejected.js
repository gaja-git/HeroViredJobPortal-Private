import React, { useState, useEffect } from "react";
import Header from "../../Dashboard/Header/Header";
import Searchbox from "../../Dashboard/Searchbox/Searchbox"
import axios from "axios";

import './rejected.css'

export default function Rejected() {
    let [rejectedJobData, setRejectedJobData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("/myapplications")
            console.log("res", res.data)
            setRejectedJobData(res.data)
        }
        fetchData()
    }, [])

    let filterData = rejectedJobData.filter(
        (ele) =>
            ele.candidateapplicationstatus === "shortlisted"
    );
    return (
        <div className="rejected">
            <Header />
            <h4>Rejected</h4>
            <div className="searchbox">
                <Searchbox></Searchbox>
            </div>
            <table>
                <thead>
                    <tr><th>JOB CODE</th><th>JOB TITLE</th><th>LOCATION</th>
                        <th>POSTED DATE</th><th>APPLIED DATE</th><th>STATUS</th>
                    </tr>
                </thead>
                {filterData.length ? (filterData.map((ele) =>
                (
                    < tbody >
                        <tr><td className="job_code_gj">{ele.jobcode}</td>
                            <td>{ele.jobtitle}</td>
                            <td>{ele.location}</td>
                            <td>{ele.applieddate}</td>
                            <td>{ele.posteddate}</td>
                            <td className="job_status_gj">Rejected</td>
                        </tr>
                    </tbody>
                )
                )) :
                    (<tbody>
                        <tr>
                            <td className="job_code_gj">JPC-2</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td className="job_status_gj">Shortlisted</td>
                        </tr>
                    </tbody >
                    )
                }

                {/* <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_r">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_r">Rejected</td>
                    </tr>
                </tbody> */}

            </table>
        </div>
    )
}