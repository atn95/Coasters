import React from 'react';
import Search from './Search';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ParkCard from './ParkCard';

const Home = () => {
	let [parks, setParks] = useState([]);

	useEffect(() => {
		async function getParks() {
			let parks = axios.get('http://localhost:3001/coasters').then((res) => {
				console.log(res.data);
				setParks(res.data);
			});
		}
		getParks();
	}, []);

	useEffect(() => {
		const getParks = async () => {
			const response = await fetch(
				'https://docs.google.com/spreadsheets/d/1gSsbtsN-lxL98gCOhs9q80APHs69lhwquXSJ5vRUQGg/gviz/tq?sheet=Parks'
			);
			let data = await response.text();
			let parsedResponse = JSON.parse(data.substring(47).slice(0, -2)).table
				.rows;
			let parksArray = [];
			parsedResponse.forEach((row) => {
				let rowInfo = [];
				row.c.forEach((col) => {
					rowInfo.push(col.v);
				});
				let obj = {
					park_name: rowInfo[0],
					city: rowInfo[1],
					state: rowInfo[2],
					image: rowInfo[3],
				};
				parksArray.push(obj);
			});
			console.log(parksArray);
		};
		getParks();
	}, []);

	const itemsPerRow = 3;

	const styles = {
		flexContainer: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			border: '2px solid red',
		},
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
					<ParkCard name={park.name} image={park.image} />
				))}
			</div>
		</div>
	);
};

export default Home;
