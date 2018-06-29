import ACTION, { detailSubject, dragSubject, cancelDrag, dropSubject, setFilter, resetSubjects } from '../actions'

describe('actions', () => {
	test('detailSubject function creates DETAIL_SUBJECT action', () => {
		let id = 'abcdef';
		expect(typeof detailSubject).toBe('function');
		expect(typeof detailSubject(id)).toBe('object');
		expect(detailSubject(id).type).toBe(ACTION.DETAIL_SUBJECT);
		expect(detailSubject(id).id).toBe(id);
	});

	test('dragSubject function creates DRAG_SUBJECT action', () => {
		let id = 'abcdef';
		expect(typeof dragSubject).toBe('function');
		expect(typeof dragSubject(id)).toBe('object');
		expect(dragSubject(id).type).toBe(ACTION.DRAG_SUBJECT);
		expect(dragSubject(id).id).toBe(id);
	});

	test('cancelDrag function creates CANCEL_DRAG action', () => {
		expect(typeof cancelDrag).toBe('function');
		expect(typeof cancelDrag()).toBe('object');
		expect(cancelDrag().type).toBe(ACTION.CANCEL_DRAG);
	});

	test('dropSubject function creates DROP_SUBJECT action', () => {
		let id = 'abcdef', dest = '5';
		expect(typeof dropSubject).toBe('function');
		expect(typeof dropSubject(id, dest)).toBe('object');
		expect(dropSubject(id, dest).type).toBe(ACTION.DROP_SUBJECT);
		expect(dropSubject(id, dest).id).toBe(id);
		expect(dropSubject(id, dest).dest).toBe(dest);
	});

	test('setFilter function creates SET_FILTER action', () => {
		let filter = 'abcdef';
		expect(typeof setFilter).toBe('function');
		expect(typeof setFilter(filter)).toBe('object');
		expect(setFilter(filter).type).toBe(ACTION.SET_FILTER);
		expect(setFilter(filter).filter).toBe(filter);
	});

	test('resetSubjects function creates RESET_SUBJECTS action', () => {
		expect(typeof resetSubjects).toBe('function');
		expect(typeof resetSubjects()).toBe('object');
		expect(resetSubjects().type).toBe(ACTION.RESET_SUBJECTS);
	});
});
