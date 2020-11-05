import React from 'react';
import './css/style.min.css';

import ProductCard from './components/ProductCard';

import rand from './assets/test.jpeg';

function App() {
	return (
		<main>
			<section className='main-container'>
				<h1 className='title'>Pandora's Store.</h1>
				<div className='card-container'>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
					<ProductCard
						title='pultit'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic incidunt placeat provident, animi ipsam sit illo ad fugiat nemo impedit libero, nostrum eveniet numquam illum sequi quidem id. Ad.'
						imgsrc={rand}
					/>
				</div>
			</section>
		</main>
	);
}

export default App;
