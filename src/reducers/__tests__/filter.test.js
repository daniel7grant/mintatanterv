import filter from '../filter'
import { setFilter } from '../../actions'

describe('dragstate', () => {
	test('is a function', () => {
		expect(typeof filter).toBe('function');
	});

	test('returns a default state if none given', () => {
		expect(filter(undefined, { type: '' })).toBe('');
	});

	test('returns the given state if unknown type given', () => {
		let state = 'abcdef';
		expect(filter(state, { type: '' })).toBe(state);
	});

	test('sets the given filter on SET_FILTER', () => {
		let state = 'abcdef', newFilter = 'fedcba';
		expect(filter(state, setFilter(newFilter))).toBe(newFilter);
	});

})