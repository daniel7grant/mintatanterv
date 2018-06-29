import { render, mount } from 'enzyme'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import groupBy from 'lodash/groupBy'

import SubjectSidebar from '../SubjectSidebar'

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

const store = createStore(
	jest.fn((state) => state),
	{ filter: '' }
);

describe('SubjectSidebar component', () => {
	test('renders the correct amount of terms', () => {
		let subjectSidebarComponent = render(<Provider store={store}>
			<SubjectSidebar subjects={groupBy(subjects, 'term')} />
		</Provider>);

		let diffterms = new Set();
		for (let subj of subjects) {
			diffterms.add(subj.term);
		}

		expect(subjectSidebarComponent.find('div.Term').length).toBe(diffterms.size);
	});
});