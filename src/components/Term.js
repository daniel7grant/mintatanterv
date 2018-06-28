import React from 'react'
import Subject from './Subject'

export default class Term extends React.Component {
	render() {
		return (
			<div className="Term">
				<h2>{this.props.term}. félév</h2>
				<ul>
					{this.props.subjects.map((subj) => (
						<Subject key={subj.id} subject={subj} />
					))}
				</ul>
			</div>
		);
	}
}