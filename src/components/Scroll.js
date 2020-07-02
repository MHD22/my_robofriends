import React from 'react';

const Scroll = (props) => {

	return(
		<div style= {{borderTop:'2px solid black', overflow : 'scroll', height : '80vh'}} >
			{props.children}
		</div>
	);
}



export default Scroll; 