export const reducer = (state, action) => {
	if (action.type === 'SET_TECHNOLOGY') {
		return {
			...state,
			tech: action.tech
		};
	}

	return state;
};
