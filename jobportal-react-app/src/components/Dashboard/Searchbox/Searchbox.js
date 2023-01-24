import React from "react"
import './searchbox.css'

export default function Searchbox() {
        return (
                <div className="searchbox">
                        <div className="search_v">
                                <input type="text" placeholder='Title,Client,Location...'></input>
                                <button>Search</button>
                        </div>
                        <div className="drop_v">
                                <select name="all_v" id="all_v">
                                        <option value="All Jobs">All Jobs</option>
                                        <option value="Associate">Associate</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="Team Lead">Team Lead</option>
                                        <option value="HR">HR</option>
                                        <option value="Product Manager">Product Manager</option>

                                </select>
                                <select name="ind_v" id="ind_v">
                                        <option value="Industry">Industry</option>
                                        <option value="IT">IT</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Education">Education</option>
                                        <option value="Design">Design</option>
                                        <option value="Research">Research</option>
                                </select>
                                <select name="loc_v" id="loc_v">
                                        <option value="Location">Location</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Gurugram">Gurugram</option>
                                        <option value="Mumbai">Mumbai</option>
                                </select>
                                <select name="jtype_v" id="jtype_v">
                                        <option value="Job Type">Job Type</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Freelancer">Freelancer</option>
                                        <option value="Internship">Internship</option>

                                </select>
                                <select name="date_v" id="date_v">
                                        <option value="Posted Date">Posted Date</option>
                                        <option value="January -March">January -March</option>
                                        <option value="April-June">April-June</option>
                                        <option value="July-September">July-September</option>
                                        <option value="October-December">October-December</option>
                                </select>
                                    
                        </div>
                </div>

        )
}