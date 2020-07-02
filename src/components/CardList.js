import React , {Fragment}  from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	return (
		<Fragment>
			{
				robots.map((user ,x) => {
					return (
							<Card key={x} n={robots[x].name} e={robots[x].email} i={robots[x].id} />
						);
					})
			}
		</Fragment>
	);
}
export default CardList;