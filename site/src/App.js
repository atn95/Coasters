import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Park from './components/Park';
import Coasters from './components/Coasters';
import Header from './components/Header';
import { useNavigate } from 'react-router-dom';

function App() {
	let navigate = useNavigate();
	function goTo(to) {
		navigate(to);
	}
	return (
		<div className='App'>
			<Header />
			<main className='body'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/park/:parkId' element={<Park goTo={goTo} />} />
					<Route path='/coaster/:coasterId' element={<Coasters />} />
				</Routes>
			</main>
			{/* <Route path =  /> */}

			{/* landing  
       - header,
       -search bar, 
       -parks
       

    parks
      -header (bkgrd as img)
      -searchbar (within park)
      -coasters
      -locati
      -details..blurb

    coasters  
      -header (park background)
      -small image of coaster
      -description
      -top speed
      -duration
      -park name
       */}
		</div>
	);
}

export default App;
