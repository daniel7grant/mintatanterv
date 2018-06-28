const ACTION = {
	MOVE_SUBJECT : 'MOVE_SUBJECT',
	DETAIL_SUBJECT: 'DETAIL_SUBJECT',
	SET_FILTER: 'SET_FILTER'
};

export const moveSubject = (id, dest) => ({
	type: ACTION.MOVE_SUBJECT,
	id,
	dest
});

export const detailSubject = (id) => ({
	type: ACTION.DETAIL_SUBJECT,
	id
});

export const setFilter = (filter) => ({
	type: ACTION.SET_FILTER,
	filter
});

export default ACTION;