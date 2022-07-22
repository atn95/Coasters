import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../dropdown.css';

const Park = (props) => {
	let { parkId } = useParams();
	const [coasters, setCoasters] = useState([]);
	let navigate = useNavigate();

	useEffect(() => {
		async function getCoasters() {
			const res = axios
				.get(`http://127.0.0.1:3001/park/coaster/${parkId}`)
				.then((res) => {
					console.log(res.data);
					console.log(parkId);
					setCoasters(res.data);
				});
		}
		getCoasters();
	}, [parkId]);

	const itemsPerRow = 3;
	const styles = {
		coasterBox: {
			display: `grid`,
			gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
			gridTemplateRows: `repeat(${coasters.length / 3}, 1fr)`,
			gap: `20px`,
		},
		coasterCard: {
			backgroundColor: 'rgb(0,0,0)',
			width: '90%',
			margin: '5px auto',
			borderRadius: '10px',
		},
		filterDiv: {
			display: `flex`,
			justifyContent: `flex-end`,
		},
	};

	function sortBySpeed() {
		let speedList = coasters
			.map((coaster) => coaster)
			.sort((a, b) => {
				return (
					parseInt(b.top_speed.split(` `)[0]) -
					parseInt(a.top_speed.split(` `)[0])
				);
			});
		setCoasters(speedList);
	}

	function sortByHeight() {
		let heightList = coasters
			.map((coaster) => coaster)
			.sort((a, b) => {
				return (
					parseInt(b.height.split(` `)[0]) - parseInt(a.height.split(` `)[0])
				);
			});
		console.log(heightList);
		setCoasters(heightList);
	}

	return (
		<div className='parkPage'>
			<main>
				<div style={styles.filterDiv}>
					<ul>
						{' '}
						Filter
						<li onClick={() => sortBySpeed()}>Speed</li>
						<li onClick={() => sortByHeight()}>Height</li>
						<li>Duration</li>
					</ul>
				</div>
				<div style={styles.coasterBox}>
					{coasters.map((coaster) => (
						<div
							key={coaster.name}
							style={styles.coasterCard}
							onClick={() => props.goTo('coaster/' + coaster._id)}>
							<h1>{coaster.name}</h1>
							<img src={coaster.image} />
							<p className='info'>
								Top Speed: {coaster.top_speed} || Height: {coaster.height} ||{' '}
								Duration: {coaster.duration}
							</p>
						</div>
					))}
				</div>
			</main>
		</div>
	);
};
export default Park;
