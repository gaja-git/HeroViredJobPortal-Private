import React, { useState, useEffect } from "react";
import Header from "../../Dashboard/Header/Header";
import Searchbox from "../../Dashboard/Searchbox/Searchbox"
import axios from "axios";

import './shortlisted.css'

export default function Shortlisted() {

    let [shortlistedJobData, setShortlistedJobData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("/myapplications")
            console.log("res", res.data)
            setShortlistedJobData(res.data)
        }
        fetchData()
    }, [])

    let filterData = shortlistedJobData.filter(
        (ele) =>
            ele.candidateapplicationstatus === "shortlisted"
    );

    return (
        <div className="shortlisted">
            <Header />
            <h4>Shortlisted</h4>
            <Searchbox></Searchbox>

            {/* <div className="searchbox"> <p>Search box section</p></div> */}
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
                            <td className="job_status_gj">Shortlisted</td>
                        </tr>
                    </tbody>
                    // { setshortlisted(true) }

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

                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj">Shortlisted</td>
                    </tr>
                </tbody> */}
            </table >
        </div >
    )
}