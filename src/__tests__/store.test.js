import store from '../store'
import defaultSubjects from '../res/data/subjects'

describe('the store', () => {
	test('creates an object', () => {
		expect(typeof store).toBe('object');
	});

	test('can recieve state from getState', () => {
		expect(typeof store.getState()).toBe('object');
	});

	test('has state with dragstate string property, defaulting to empty', () => {
		expect(typeof store.getState().dragstate).toBe('string');
		expect(store.getState().dragstate).toBe('');
	});

	test('has state with filter string property, defaulting to empty', () => {
		expect(typeof store.getState().filter).toBe('string');
		expect(store.getState().filter).toBe('');
	});

	test('has state with subject object property, defaulting to defaultSubjects', () => {
		expect(typeof store.getState().subjects).toBe('object');
		expect(store.getState().subjects).toEqual(defaultSubjects);
	});

});