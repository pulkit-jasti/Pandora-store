import React from 'react';
import './css/style.min.css';

import ProductCard from './components/ProductCard';

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
						return <ProductCard imgsrc={el.productImgSrc} title={el.productTitle} info={el.productDes} />;
					})}
				</div>
			</section>
		</main>
	);
}

export default App;
