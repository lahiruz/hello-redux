import React, {Component} from 'react';
import './App.css';
import {Hello} from "./Hello";
import logo from './images/react-redux.svg';

class App extends Component {
	state = {
		tech: 'Redux'
	};

	render() {
		return (
			<div className="app">
				<header className="app-header">
					<img className="app-logo" src={logo} alt="logo"/>
					<Hello tech={this.state.tech}/>
					<a className="app-tech-link"
					   href="https://redux.js.org"
					   target="_blank"
					   rel="noopener noreferrer">
						Learn Redux
					</a>
				</header>
			</div>
		);
	}
}

export default App;
