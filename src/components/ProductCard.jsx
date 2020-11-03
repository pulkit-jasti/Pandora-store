import React from 'react';

function ProductCard(props) {
	return (
		<div className='product-card'>
			<div className='img-wrapper'></div>
			<h4 className='product-name'>{props.title}</h4>
			<p className='product-info'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat
				nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.
			</p>
			<button className='add-to-cart'>Add to Cart</button>
		</div>
	);
}

export default ProductCard;
