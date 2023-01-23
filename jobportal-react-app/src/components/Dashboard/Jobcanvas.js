import React from "react"
import Header from "./Header"
import Midsection from "./Midsection"
import Searchbox from "./Searchbox"
import "./jobcanvas.css"
import Content from "./Content"
export default function Jobcanvas() {
	return (
		<div className ="whole">
			<div className="heading">
				<Header />
			</div>
			<div className="sub_header">
				<Midsection />
			</div>
			<div className="searchbox">
				<Searchbox />
			</div>
			<div className="content"> 
				<Content />
			</div>
		</div>

	)
}