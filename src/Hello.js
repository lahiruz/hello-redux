import React from 'react';
import './Hello.css';

export function Hello(props){
	return(
		<div className="app-welcome">
			Hello <span className="app-welcome-tech">{props.tech}!</span>
		</div>
	);
}
