import React, {Component} from 'react';

import {Hello} from './views/Hello';
import {ButtonGroup} from "./views/ButtonGroup";
import logo from './images/react-redux.svg';
import './App.css';
import {store} from "./store";

class App extends Component {
	render() {
		return (
			<div className="app">
				<header className="app-header">
					<img className="app-logo" src={logo} alt="logo"/>
					<Hello tech={store.getState().tech}/>
					<ButtonGroup technologies={["React", "Redux", "HTML5", "CSS3"]}/>
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
