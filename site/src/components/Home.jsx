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

	const itemsPerRow = 3;

	const styles = {
		gridContainer: {
			display: 'grid',
			gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
			gridTemplateRows: `repeat(${parks.length / 3}, 1fr)`,
			gap: `20px`,
		},
	};

	function goTo(to) {
		navigate(to);
	}

	return (
		<div>
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
