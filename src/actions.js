const ACTION = {
	DETAIL_SUBJECT: 'DETAIL_SUBJECT',
	DRAG_SUBJECT: 'DRAG_SUBJECT',
	CANCEL_DRAG: 'CANCEL_DRAG',
	DROP_SUBJECT: 'DROP_SUBJECT',
	SET_FILTER: 'SET_FILTER',
	RESET_SUBJECTS: 'RESET_SUBJECTS',
};

export const detailSubject = (id) => ({ type: ACTION.DETAIL_SUBJECT, id });

/* dragstate.js */
export const dragSubject = (id) => ({ type: ACTION.DRAG_SUBJECT, id });
export const cancelDrag = () => ({ type: ACTION.CANCEL_DRAG });
export const dropSubject = (id, dest) => ({ type: ACTION.DROP_SUBJECT, id, dest });

/* filter.js */
export const setFilter = (filter) => ({ type: ACTION.SET_FILTER, filter });

/* subjects.js */
export const resetSubjects = () => ({type: ACTION.RESET_SUBJECTS});

export default ACTION;