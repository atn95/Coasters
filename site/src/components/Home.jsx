import React from 'react';
import Search from './Search';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ParkCard from './ParkCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	let [parks, setParks] = useState([]);

	useEffect(() => {
		async function getParks() {
			let parks = axios.get('http://localhost:3001/parks').then((res) => {
				setParks(res.data);
			});
		}
		getParks();
	}, []);

	let navigate = useNavigate();

	useEffect(() => {
		const getParks = async () => {
			const response = await fetch(
				'https://docs.google.com/spreadsheets/d/1gSsbtsN-lxL98gCOhs9q80APHs69lhwquXSJ5vRUQGg/gviz/tq?sheet=Coasters'
			);
			let data = await response.text();
			let parsedResponse = JSON.parse(data.substring(47).slice(0, -2)).table
				.rows;
			let parksArray = [];
			parsedResponse.forEach((row) => {
				let rowInfo = [];
				console.log(row);
				row.c.forEach((col) => {
					// console.log()
					if (col.v != null) rowInfo.push(col.v);
				});
				let obj = {
					name: rowInfo[0],
					desccription: rowInfo[1],
					height: rowInfo[2],
					top_speed: rowInfo[3],
					duration: rowInfo[4],
					image: rowInfo[5],
					park_id: rowInfo[6],
				};
				parksArray.push(obj);
			});
			console.log(parksArray);
		};
		getParks();
	}, []);

	const itemsPerRow = 3;

	const styles = {
		gridContainer: {
			display: 'grid',
			gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
			gridTemplateRows: `repeat(${parks.length / 3}, 1fr)`,
			gap: `20px`,
		},
	};

	return (
		<div>
			<div>
				<Search />
			</div>
			<div className='parks' style={styles.gridContainer}>
				{parks.map((park) => (
					<ParkCard
						name={park.park_name}
						image={park.image}
						onClick={() => navigate(`park/${park._id}`)}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
