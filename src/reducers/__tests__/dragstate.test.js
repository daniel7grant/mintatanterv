import dragstate from '../dragstate'
import { dragSubject, cancelDrag, dropSubject } from '../../actions'

describe('dragstate', () => {
	test('is a function', () => {
		expect(typeof dragstate).toBe('function');
	});

	test('returns a default state if none given', () => {
		expect(dragstate(undefined, { type: '' })).toBe('');
	});

	test('returns the given state if unknown type given', () => {
		let state = 'abcdef';
		expect(dragstate(state, { type: '' })).toBe(state);
	});

	test('sets the given id on DRAG_SUBJECT', () => {
		let state = 'abcdef', id = 'fedcba';
		expect(dragstate(state, dragSubject(id))).toBe(id);
	});

	test('returns an empty string on CANCEL_DRAG or DROP_SUBJECT', () => {
		let state = 'abcdef', id = 'fedcba', dest = '1';
		expect(dragstate(state, cancelDrag())).toBe('');
		expect(dragstate(state, dropSubject(id, dest))).toBe('');
	});
})