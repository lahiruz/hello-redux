import React from 'react';

import {setTechnology, store} from '../store';

import './ButtonGroup.css';

export function ButtonGroup(props) {
	return (
		<div>
			{props.technologies.map((tech, index) => (
				<button
					data-tech={tech}
					key={`btn-${index}`}
					className="btn-tech"
					onClick={dispatchTechnology}>
					{tech}
				</button>
			))}
		</div>
	);
}

function dispatchTechnology(e) {
	const tech = e.target.dataset.tech;
	store.dispatch(setTechnology(tech));
}
