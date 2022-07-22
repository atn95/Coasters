import React from 'react';
import Search from './Search';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Park = () => {

	let {parkId} = useParams()

const [coaster,setCoaster] = useState([])

useEffect(()=>{
	async function getCoasters(){
		const res = axios.get('http://localhost:3001/park/coaster/:id').then((res)=>{
			console.log(res.data)
			console.log(parkId +'1234')
			setCoaster(res.data)
		})
	}
	getCoasters()
},[parkId])

	return (
	<div className = 'parkPage'>
		<main >
			<h1>Park Name </h1>
			<img className = 'parkImg' src='https://media.gettyimages.com/photos/in-this-aerial-view-from-a-drone-rides-sit-idle-at-six-flags-kingdom-picture-id1219052377?s=612x612'></img>
			<h3>City, State</h3>
			<p>Coaster Count</p>
		</main>		
	</div>
	);
};
export default Park;
