import React from 'react'
import SubjectSidebar from './SubjectSidebar'
import { connect } from 'react-redux'
import groupBy from 'lodash/groupBy'

import {setFilter} from '../actions';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<div id="header">
					<h1>Mintatanterv</h1>
					<div>
						<span>Szűrés: </span>
						<input value={this.props.filter} onChange={this.props.onFilterChange} />
						<br />
						<span className="hint">Próbálj rövidítéseket, mint "matek a2", "mikmak", stb.</span>
					</div>
				</div>
				<div id="main">
					<div id="left-sidebar">
						<SubjectSidebar subjects={this.props.subjects} />
					</div>
					<div id="main-body">

					</div>
				</div>
			</div >
		);
	}
}

function groupSubjects(subjects, filter) {
	return groupBy(Object.keys(subjects).map((key) => Object.assign(subjects[key], {
		isFiltered: !subjects[key].name.toLowerCase().includes(filter.toLowerCase())
	})), 'term');
}

export default App = connect(
	(state) => ({
		filter: state.filter,
		subjects: groupSubjects(state.subjects, state.filter)
	}),
	(dispatch) => ({
		onFilterChange: (ev) => dispatch(setFilter(ev.target.value))
	})
)(App);