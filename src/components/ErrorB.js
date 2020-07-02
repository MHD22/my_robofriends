import React , {Component} from 'react';


class ErrorB extends Component {
	constructor(props){
		super(props);
		this.state = { hasError : false };
	}
	componentDidCatch(){
		this.setState({hasError : true});
	}
	render(){
		return this.state.hasError? (<h1> ooobs that's Error !! </h1>) : this.props.children ;
	}
}
export default ErrorB ; 