import React from "react"

export default function Searchbox(){
	return(
        <div>
            <div className="searchbox">
                  <input type="text" placeholder='Search'></input>
                  <i className="fa fa-search"></i>
               </div>
        </div>
	)
}