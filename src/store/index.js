import {createStore} from 'redux';

import {reducer} from '../reducers';

const initialState = {tech: 'Redux'};
export const store = createStore(reducer, initialState);

export function setTechnology(tech) {
	return { type: 'SET_TECHNOLOGY', tech}
}

