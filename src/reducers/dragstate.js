import ACTION from '../actions';

export default (state = '', action) => {
	switch(action.type){
		case ACTION.DRAG_SUBJECT: return action.id;
		case ACTION.CANCEL_DRAG: 
		case ACTION.DROP_SUBJECT: return '';
		default: return state;
	}
}