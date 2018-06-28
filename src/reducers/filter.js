import ACTION from '../actions'

export default (state = '', action) => {
	switch (action.type) {
		case ACTION.SET_FILTER: return action.filter;
		default: return state;
	}
}