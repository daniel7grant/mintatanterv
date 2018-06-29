import React from 'react'
import SubjectSidebar from './SubjectSidebar'
import { connect } from 'react-redux'
import groupBy from 'lodash/groupBy'

import { setFilter, resetSubjects } from '../actions'

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.inputFilter.focus();
	}

	render() {
		return (
			<div className="App">
				<div id="header">
					<h1>Mintatanterv</h1>
					<div className="toolbar">
						<div>
							<span>Szűrés: </span>
							<input className="filter" value={this.props.filter}
								ref={(ref) => this.inputFilter = ref}
								onChange={this.props.onFilterChange} />
							<br />
							<span className="hint">Próbálj rövidítéseket, mint "matek a2", "mikmak", stb.</span>
						</div>
						<div>
							<button className="reset" onClick={this.props.reset}>Visszaállítás</button>
						</div>
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

export default App = connect(
	(state) => ({
		filter: state.filter,
		subjects: groupBy(state.subjects, 'term')
	}),
	(dispatch) => ({
		onFilterChange: (ev) => dispatch(setFilter(ev.target.value)),
		reset: () => dispatch(resetSubjects())
	})
)(App);