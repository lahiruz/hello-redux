import {store} from '../store';

function setTechnology(tech) {
	return { type: 'SET_TECHNOLOGY', tech}
}

export function dispatchBtnAction(e) {
	const tech = e.target.dataset.tech;
	store.dispatch(setTechnology(tech));
}
