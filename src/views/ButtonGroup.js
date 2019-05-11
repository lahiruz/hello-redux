import React from 'react';

import {dispatchBtnAction} from '../actions';

import './ButtonGroup.css';

export function ButtonGroup(props) {
	return (
		<div>
			{props.technologies.map((tech, index) => (
				<button
					data-tech={tech}
					key={`btn-${index}`}
					className="btn-tech"
					onClick={dispatchBtnAction}>
					{tech}
				</button>
			))}
		</div>
	);
}
