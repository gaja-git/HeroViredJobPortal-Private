import React, { useEffect, useContext } from "react"
import Header from "./Header/Header"
import Midsection from "./Midsection/Midsection"
import Searchbox from "./Searchbox/Searchbox"
import "./jobcanvas.css"
import Content from "./Content/Content"
import axios from "axios"
import DataContext from "../context/DataContext"

export default function Jobcanvas() {
	let ctx = useContext(DataContext)
	useEffect(() => {

		const fetchUserData = async () => {
			let res = await axios.get("/useraccount")
			console.log("res", res.data)
			let userid
			userid = res.data.id
			console.log("userid", userid)
			ctx.setUserId(res.data.id)

			//ctx.setUserData(tempUser.id)
		}
		fetchUserData()
	}, [])
	return (
		<div className="whole">
			<div className="heading">
				<Header />
			</div>
			<div className="sub_header">
				<Midsection />
			</div>
			<div className="searchbox">
				<h4>All Jobs</h4>
				<Searchbox />
			</div>
			<div className="content">
				<Content />
			</div>
		</div>

	)
}