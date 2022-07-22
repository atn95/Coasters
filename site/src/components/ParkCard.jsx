import React from 'react';

function ParkCard(props) {
	const styles = {
		container: {
			borderRadius: `10px`,
			backgroundColor: `rgb(0,0,0)`,
			opacity: `1`,
			display: `flex`,
			flexDirection: `column`,
			justifyContent: `center`,
			alignItems: `center`,
		},
	};

	return (
		<div style={styles.container} onClick={props.onClick}>
			<div className='img-container'>
				<img className='park-img' src={props.image} />
			</div>
			<div className='info'>
				<h2>{props.name}</h2>
			</div>
		</div>
	);
}

export default ParkCard;
