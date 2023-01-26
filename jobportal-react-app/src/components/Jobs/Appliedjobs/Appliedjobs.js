import Header from "../../Dashboard/Header/Header"
import Searchbox from "../../Dashboard/Searchbox/Searchbox"


export default function Appliedjobs() {
    return (
        <div className="appliedjobs">
            <Header />
            <div className="Searchbox">
                <h4>Applied Jobs</h4>
                <Searchbox></Searchbox>
            </div>
            <div className="contents">
                <div className="job_content_gj">
                    <div className="job_title_gj">
                        <p>JPC-169 Developer</p>
                        <button>Apply</button>
                    </div>
                    <div className="job_params_gj">
                        <div className="job_location_gj">
                            <span><i class="fa fa-map-marker"></i> Mumbai,Maharastra</span></div>
                        <div className="job_type_gj"> part time</div>
                        <div className="job_cost_gj">36$</div>
                        <div className="job_comp_gj">CEIPAL</div>
                    </div>
                    <div className="job_details_gj">
                        <p> This job is on full stack development sfdsdfs sfkjirein nvioerjifj sdfsjff
                            sfsjfkfdjf skdjfioerojj</p>
                    </div>

                </div>
            </div>
        </div>
    )
}