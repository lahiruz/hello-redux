import React, {Component} from 'react';
import './App.css';
import {Hello} from './Hello';
import logo from './images/react-redux.svg';

import {createStore} from 'redux';
import {reducer} from './reducers';

const initialState = { tech: 'Redux'};
const store = createStore(reducer, initialState);

class App extends Component {
	render() {
		return (
			<div className="app">
				<header className="app-header">
					<img className="app-logo" src={logo} alt="logo"/>
					<Hello tech={store.getState().tech}/>
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
