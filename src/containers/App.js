import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components//Scroll';
import './App.css';
//import { robots } from './robots';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state 
		//Now that you desctructured you can remove this.state from below code 
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		//if we can a ton of users and wanted to control length of users  ad if/else statement
		//instead of === 0 your can use ! to read it false in JS
		//You can also remove if/else statement by using ternary ?
			//The conditional (ternary) operator is the only JS operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy
			return !robots.length ?
			<h1>Loading</h1> :
			(
				<div className = 'tc'>
					<h1 className = 'f1'>RoboFriends</h1>
					<SearchBox searchChange ={this.onSearchChange}/>
					<Scroll>
						<CardList robots = {filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}

export default App;