import React from "react";
import Header from "../Dashboard/Header/Header";
import './shortlisted.css'

export default function Shortlisted() {
    return (
        <div className="shortlisted">
            <Header />
            <div className="searchbox"> <p>Search box section</p></div>
            <table>
                <thead>
                    <tr><th>JOB CODE</th><th>JOB TITLE</th><th>LOCATION</th>
                        <th>POSTED DATE</th><th>APPLIED DATE</th><th>STATUS</th>
                    </tr>
                </thead>
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
            </table>
        </div>
    )
}