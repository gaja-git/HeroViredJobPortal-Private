import Header from "../../Dashboard/Header/Header"



export default function Alljobs() {
    return (
        <div className="alljobs">
            <Header />
            <div className="Searchbox">
                <p>Searchbox section</p>
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
                        <div className="job_type_gj"><span> <i class="fa fa-suitcase"></i>full time </span></div>
                        <div className="job_cost_gj"><span><i class="fa fa-money"></i>168$</span></div>
                        <div className="job_comp_gj"><span><i class="fa fa-building-o"></i>CEIPAL</span></div>
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