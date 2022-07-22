import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Park = () => {

	let {parkId} = useParams()
	const [coasters,setCoasters] = useState([])

useEffect(()=>{
	async function getCoasters(){
		const res = axios.get(`http://localhost:3001/park/coaster/${parkId}`).then((res)=>{
			console.log(res.data)
			console.log(parkId +'1234')
			setCoasters(res.data)
		})
	}
	getCoasters()
},[parkId])

	return (


	<div className = 'parkPage'>
		<main >
				{coasters.map((coaster)=>{
					<p>{coaster.name}</p>
				})}
			<h1>Park Name </h1>
			<img className = 'parkImg' src='https://media.gettyimages.com/photos/in-this-aerial-view-from-a-drone-rides-sit-idle-at-six-flags-kingdom-picture-id1219052377?s=612x612'></img>
			<h3>City, State</h3>
			<p>Coaster Count</p>
		</main>		
	</div>
	);
};
export default Park;
