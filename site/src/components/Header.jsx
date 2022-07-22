import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className='appHeader'>
			<div>
				<h1 className='coasterTitle'> Coaster Crazy </h1>
			</div>
			<Link to='/'>Home</Link> ||
			<Link to='/coasters'>All Coasters</Link>
		</header>
	);
}

export default Header;
