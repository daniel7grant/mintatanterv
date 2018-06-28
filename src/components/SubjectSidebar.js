import React from 'react'
import Term from './Term'

export default class SubjectSidebar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="SubjectSidebar">
				{Object.keys(this.props.subjects).map((term) => (
					<Term key={term} term={term} subjects={this.props.subjects[term]} />
				))}
			</div>
		);
	}
}