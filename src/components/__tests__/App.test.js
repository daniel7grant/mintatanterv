import { render, mount } from 'enzyme'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from '../App'
import ACTION from '../../actions';

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

describe('App component', () => {
	test('renders SubjectSidebar', () => {
		const store = createStore(
			jest.fn((state) => state),
			{ subjects, filter: '' }
		);
		let appComponent = render(<Provider store={store}>
			<App />
		</Provider>);

		expect(appComponent.find('div.SubjectSidebar').length).toBe(1);
	});

	test('adds filter value to input.filter, and changes on input', () => {
		const filter = 'randomfilter', newfilter = 'newfilter';
		const reducer = jest.fn((state) => state);
		const store = createStore(
			reducer,
			{ subjects, filter }
		);
		const event = {
			target: {
				value: newfilter
			}
		}

		let appComponent = mount(<Provider store={store}>
			<App />
		</Provider>);

		expect(appComponent.find('input.filter').length).toBe(1);
		expect(appComponent.find('input.filter').first().props().value).toBe(filter);

		appComponent.find('input.filter').first().simulate('change', event);
		expect(reducer).toBeCalledWith(store.getState(), { type: ACTION.SET_FILTER, filter: newfilter });
	});

	test('resets on button.reset click', () => {
		const filter = 'randomfilter', newfilter = 'newfilter';
		const reducer = jest.fn((state) => state);
		const store = createStore(
			reducer,
			{ subjects, filter }
		);

		let appComponent = mount(<Provider store={store}>
			<App />
		</Provider>);

		expect(appComponent.find('button.reset').length).toBe(1);

		appComponent.find('button.reset').first().simulate('click');
		expect(reducer).toBeCalledWith(store.getState(), { type: ACTION.RESET_SUBJECTS });
	});
});