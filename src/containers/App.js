import React  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorB from '../components/ErrorB';
import './App.css';

class App extends React.Component {
	constructor(){
		super();
		this.state={
			rob:[],
			schfield:''
		}
		
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({rob : users}));
		
	}

	onSearchChange= (event)=>{
		this.setState({schfield : event.target.value});
	}
	render(){
		const {rob ,schfield} = this.state ;
		const robfilter = rob.filter(rob => {
		return rob.name.toLowerCase().includes(schfield.toLowerCase());
		});
		return rob.length?

			(<div className='tc'>
				<h1> RoboFriends </h1>
				<ErrorB>
					<SearchBox  SearchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={robfilter}/>
					</Scroll>
				</ErrorB>
			</div>
			) : (<h1> Loading, please wait...</h1>);
	}
}



export default App;