import React from 'react';
import './css/style.min.css';

import sample from '../assets/test.jpeg';

function App() {
	return (
		<main>
			<section>
				<div className='card-container'>
					<img src={sample} alt='' />
				</div>
			</section>
		</main>
	);
}

export default App;
