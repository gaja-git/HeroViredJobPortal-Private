import React, { useState, useEffect } from "react";
import Header from "../../Dashboard/Header/Header";
import Searchbox from "../../Dashboard/Searchbox/Searchbox"
import axios from "axios";

import './offerreceived.css'

export default function Offerreceived() {

    let [offerReceivedJobData, setOfferReceivedJobData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("/myapplications")
            console.log("res", res.data)
            setOfferReceivedJobData(res.data)
        }
        fetchData()
    }, [])

    let filterData = offerReceivedJobData.filter(
        (ele) =>
            ele.candidateapplicationstatus === "OfferRecieved"
    );

    return (
        <div className="offer">
            <Header />
            <h4>Offer Received</h4>
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
                            <td className="job_status_gj">OfferReceived</td>
                        </tr>
                    </tbody>
                )
                )) :
                    (<tbody>
                        <tr>
                            <td className="job_code_gj">No Data</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td className="job_status_gj">No Data</td>
                        </tr>
                    </tbody >
                    )
                }
                {/* <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr><td className="job_code_gj_o">JPC-2</td>
                        <td>Production Manager</td>
                        <td>Banglore</td>
                        <td>08 Jan 2022</td>
                        <td>09 Jan 2022</td>
                        <td className="job_status_gj_o">Offerreceived</td>
                    </tr>
                </tbody> */}
            </table>
        </div>
    )
}