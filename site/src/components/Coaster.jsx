import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Coaster = () => {
	let { coasterId } = useParams();
	const [coasters, setCoasters] = useState(null);

	useEffect(() => {
		const getCoaster = async () => {
			const res = await axios.get(
				`http://localhost:3001/coasters/${coasterId}`
			);
			console.log(res.data);

			setCoasters(res.data);
		};
		getCoaster();
	}, [coasterId]);

	const styles = {
		container: {
			borderRadius: `10px`,
			backgroundColor: `rgb(0,0,0)`,
			opacity: `1`,
			display: `flex`,
			flexDirection: `column`,
			justifyContent: `center`,
			alignItems: `center`,
			margin: '0 auto',
			maxWidth: '800px',
			color: `white`,
		},
		specsContainer: {
			display: 'flex',
			flexDirection: 'row',
			gap: '30px',
		},
		descriptionContainer: {
			padding: '0 80px 25px 80px',
		},
	};
	return (
		<div style={styles.container}>
			<h1> {coasters != null ? coasters.name : ''} </h1>
			<img src={coasters != null ? coasters.image : ''} />
			<div style={styles.specsContainer}>
				<h2>Height: {coasters != null ? coasters.height : ''}</h2>
				<h2>Top Speed: {coasters != null ? coasters.top_speed : ''}</h2>
				<h2>Duration: {coasters != null ? coasters.duration : ''}</h2>
			</div>
			<h3 style={styles.descriptionContainer}>
				{coasters != null ? coasters.description : ''}
			</h3>
		</div>
	);
};

export default Coaster;
