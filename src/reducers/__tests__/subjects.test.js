import subjects from '../subjects'
import { resetSubjects, dropSubject } from '../../actions'
import defaultSubjects from '../../res/data/subjects'

describe('dragstate', () => {
	test('is a function', () => {
		expect(typeof subjects).toBe('function');
	});

	test('returns a default state if none given', () => {
		expect(subjects(undefined, { type: '' })).toBe(defaultSubjects);
	});

	test('returns the given state if unknown type given', () => {
		let state = [{ 'name': 'subject1' }, { 'name': 'subject2' }];
		expect(subjects(state, { type: '' })).toEqual(state);
	});

	test('returns a default state on RESET_SUBJECTS', () => {
		let state = [{ 'name': 'subject1' }, { 'name': 'subject2' }];
		expect(subjects(state, resetSubjects())).toBe(defaultSubjects);
	});

	test('changes exactly one subject\'s term on DROP_SUBJECT', () => {
		let state = [
			{ id: '1', name: 'subject1', term: '1' },
			{ id: '2', name: 'subject2', term: '2' },
			{ id: '3', name: 'subject3', term: '3' }
		];
		let id = '2', dest = '999';
		let newState = subjects(state, dropSubject(id, dest));
		let diff = 0, diffObj = null;
		for(let i in newState){
			if(JSON.stringify(state[i]) !== JSON.stringify(newState[i])){
				diff++;
				diffObj = newState[i];
			}
		}
		expect(diff).toBe(1);
		expect(diffObj.id).toBe(id);
		expect(diffObj.term).toBe(dest);
	});

})