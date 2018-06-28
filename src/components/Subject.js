import React from 'react'

export default class Subject extends React.Component {
	render() {
		return (
			<div className={"Subject " + (this.props.subject.isFiltered ? 'filtered' : '') } id={this.props.subject.id}>
				{this.props.subject.name}
			</div>
		);
	}
}