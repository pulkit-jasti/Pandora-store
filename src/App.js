import React from 'react';
import './css/style.min.css';

import ProductCard from './components/ProductCard';

import rand from './assets/test.jpeg';

import data from './data';

let request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
	console.log(request.responseText);
});

function App() {
	return (
		<main>
			<section className='main-container'>
				<h1 className='title'>Pandora's Store.</h1>
				<div className='card-container'>
					{data.map(el => {
						return (
							<ProductCard
								imgsrc={rand}
								title={el.productTitle}
								description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
							/>
						);
					})}
				</div>
			</section>
		</main>
	);
}

export default App;
