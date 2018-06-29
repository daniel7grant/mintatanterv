import { render, mount } from 'enzyme'
import React from 'react'
import { createStore } from 'redux';

import Subject from '../Subject'
import ACTION from '../../actions';

const subject = {
	"id": "BMEGEMTAMT1",
	"name": "Anyagismeret",
	"short": "Anyagismeret",
	"exam": 1,
	"credit": 5,
	"term": 1,
	"crossterm": 0
};

describe('Subject component', () => {
	test('renders text and class correctly', () => {
		const store = createStore(
			jest.fn((state) => state),
			{ filter: '' }
		);
		let subjectComponent = render(<Subject store={store} subject={subject} />);

		expect(subjectComponent.text()).toBe(subject.name);
		expect(subjectComponent.hasClass('Subject')).toBeTruthy();
	});

	test('adds filter prop and applies filtered class', () => {
		const store = createStore(
			jest.fn((state) => state),
			{ filter: 'longfilterwhichwontmatch' }
		);
		let subjectComponent = render(<Subject store={store} subject={subject} />);

		expect(subjectComponent.hasClass('filtered')).toBeTruthy();
	});

	test('on dragstart it calls the function and updates the store', () => {
		const reducer = jest.fn((state) => state);
		const store = createStore(
			reducer,
			{ filter: 'longfilterwhichwontmatch' }
		);
		const setData = jest.fn();
		const event = {
			dataTransfer: { setData }
		}
		let subjectComponent = mount(<Subject store={store} subject={subject} />);

		subjectComponent.simulate('dragstart', event);
		expect(setData).toHaveBeenCalledWith('text/plain', subject.id);
		expect(reducer).toHaveBeenCalledWith(store.getState(), {
			type: ACTION.DRAG_SUBJECT,
			id: subject.id
		});

		subjectComponent.unmount();
	});

	test('on dragend it calls the function and updates the store', () => {
		const reducer = jest.fn((state) => state);
		const store = createStore(
			reducer,
			{ filter: 'longfilterwhichwontmatch' }
		);
		let subjectComponent = mount(<Subject store={store} subject={subject} />);

		subjectComponent.simulate('dragend');
		expect(reducer).toHaveBeenCalledWith(store.getState(), {
			type: ACTION.CANCEL_DRAG
		});

		subjectComponent.unmount();
	});
});