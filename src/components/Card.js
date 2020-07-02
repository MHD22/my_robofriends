import React from 'react';

const Card = ({n , e , i}) => {
	return(
		
		<div className = 'bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5 b--gray ba '>
			<img src={`https://robohash.org/${parseInt(i)}?200x200`} alt='aads' />
			<h2> {n} </h2>
			<p> {e} </p>
		</div>
		



	);
}
export default Card;

