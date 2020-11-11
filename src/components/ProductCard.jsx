import React from 'react';

function ProductCard(props) {
	return (
		<div className='product-card-wrapper'>
			<div className='border'>
				<div className='product-card gradient-border'>
					<div className='img-wrapper'>
						<img src={props.imgsrc} alt='' />
					</div>
					<h4 className='product-title'>{props.title}</h4>
					<p className='product-info'>{props.description}</p>
					<button className='add-to-cart'>
						Add to Cart <span>🛒</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
