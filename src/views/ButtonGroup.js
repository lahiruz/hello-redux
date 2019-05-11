import React from 'react';
import './ButtonGroup.css';

export function ButtonGroup(props) {
	return (
		<div>
			{props.technologies.map((tech, index) => (
				<button
					data-tech={tech}
					key={`btn-${index}`}
					className="btn-tech">
					{tech}
				</button>
			))}
		</div>
	)
}
