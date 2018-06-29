import { shallow, render, mount } from 'enzyme'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Term from '../Term'
import ACTION from '../../actions';

const term = '3';
const subjects = [{
	"id": "BMEGEMTAMT1",
	"name": "Anyagismeret",
	"short": "Anyagismeret",
	"exam": 1,
	"credit": 5,
	"term": 1,
	"crossterm": 0
},
{
	"id": "BMEGEGEA3CD",
	"name": "CAD alapjai",
	"short": "CAD alapjai",
	"exam": 0,
	"credit": 4,
	"term": 2,
	"crossterm": 0
}];

describe('Term component', () => {
	test('renders title correctly', () => {
		const store = createStore(
			jest.fn((state) => state),
			{filter: ''}
		);
		let termComponent = render(<Provider store={store}>
			<Term subjects={subjects} term={term} />
		</Provider>);

		expect(termComponent.find('.title').length).toBe(1);
		expect(termComponent.find('.title').text()).toBe(term + '. félév');
	});

	test('renders and calculates sum correctly', () => {
		const store = createStore(
			jest.fn((state) => state),
			{filter: ''}
		);
		let sum = 0;
		for (let subj of subjects) {
			sum += subj.credit;
		}

		let termComponent = render(<Provider store={store}>
			<Term subjects={subjects} term={term} />
		</Provider>);

		expect(termComponent.find('.credits').length).toBe(1);
		expect(termComponent.find('.credits').text()).toBe(sum.toString());
	});

	test('renders the exact number of Subjects', () => {
		const store = createStore(
			jest.fn((state) => state),
			{filter: ''}
		);

		let termComponent = render(<Provider store={store}>
			<Term subjects={subjects} term={term} />
		</Provider>);

		expect(termComponent.find('ul').find('li.Subject').length).toBe(subjects.length);
	});

	test('on dragenter/dragleave it sets/removes class', () => {
		const store = createStore(
			(state) => state,
			{filter: ''}
		);

		let termComponent = mount(<Provider store={store}>
			<Term subjects={subjects} term={term} />
		</Provider>);

		termComponent.simulate('dragover');
		expect(termComponent.find('div.Term').hasClass('isdragover')).toBeTruthy();
		termComponent.simulate('dragleave');
		expect(termComponent.find('div.Term').hasClass('isdragover')).toBeFalsy();
	});

	test('on drop in calls function and updates store', () => {
		const reducer = jest.fn((state) => state);
		const store = createStore(
			reducer,
			{filter: ''}
		);
		const preventDefault = jest.fn();
		const getData = jest.fn().mockReturnValue('abcdef');
		const event = {
			preventDefault,
			dataTransfer : { getData }
		};

		let termComponent = mount(<Provider store={store}>
			<Term subjects={subjects} term={term} />
		</Provider>);

		termComponent.simulate('drop', event);
		expect(preventDefault).toBeCalled();
		expect(reducer).toBeCalledWith(store.getState(), { type: ACTION.DROP_SUBJECT, id: 'abcdef', dest: term });
	});
});