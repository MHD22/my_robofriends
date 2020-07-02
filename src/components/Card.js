import React from 'react';
import './Card.css';

const Card = ({n , e , i}) => {
	return(
		
		<div id={"mmm"} className = 'bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5 ba b--light-yellow '>

			<img src={`https://robohash.org/${parseInt(i)}?50x50`} alt='aads' />
			<h2> {n} </h2>
			<p> {e} </p>
		</div>
		



	);
}
export default Card;

