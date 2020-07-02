import React from 'react'; 


const SearchBox = (props) => {
	return(
		<div className='pa2' >
		<input type='search' 
		style = {{width : '20vw' , textAlign : 'center'}}
		 placeholder='search robots '
		 onChange = {props.SearchChange}
		 className='pa3 ba b--green bg-lightest-blue' />
		</div>
	);
}

export default SearchBox;