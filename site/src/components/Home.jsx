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
					<ParkCard
						name={'Park Name'}
						image={
							'https://sf-static.sixflags.com/wp-content/uploads/Jersey-Devil-closeup-11-1-1024x743.jpg'
						}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
