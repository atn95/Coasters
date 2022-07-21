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

	const styles = {
		flexContainer: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			border: '2px solid red',
		},
		gridContainer: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gridTemplateRows: `repeat(${parks.length / 2}, 1fr)`,
		},
	};

	return (
		<div>
			<div>
				<Search />
			</div>
			<div className='parks' style={styles.gridContainer}>
				{parks.map((park) => (
					<ParkCard />
				))}
			</div>
		</div>
	);
};

export default Home;
